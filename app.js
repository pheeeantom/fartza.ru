const express = require("express");
const expressHbs = require("express-handlebars");
const hbs = require("hbs");
const app = express();
const goods = require("./data/goods");
//var bodyParser = require('body-parser');
const config = require("./config/auth.config");
var jwt = require("jsonwebtoken");
var passport = require('passport');
var LocalStrategy = require('passport-local');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const User = require("./data/user");
const DB = require("./lib/db");

var session = require('express-session');
var mysql2 = require('mysql2/promise');
var MySQLStore = require('express-mysql-session')(session);

const hour = 3600000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser(config.secret));

var captcha = require("nodejs-captcha");

var sessionStore = new MySQLStore({
	//expiration: 604800,
	connectionLimit : 10,
	host: "127.0.0.1",
	user: "fartsa",
	database: "fartsa",
	password: "S$PD5TsU@ke8JEhT~J9M",
	// Whether or not to automatically check for and clear expired sessions:
	clearExpired: false,
	// How frequently expired sessions will be cleared; milliseconds:
	checkExpirationInterval: hour,
    createDatabaseTable: false,
    schema: {
        tableName: 'users_sessions',
        columnNames: {
            session_id: 'session_id',
            expires: 'expires',
            data: 'data'
        }
    }
});
app.use(session({
  name: 'passport',
  secret: config.secret,
  resave: false,
  saveUninitialized: false,
  store: sessionStore,
  cookie: { maxAge: 7 * 24 * hour, secure: false },
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.authenticate('session'));

const mysql = require("mysql2");

const pool = mysql.createPool({
    connectionLimit: 5,
    host: "localhost",
    user: "fartsa",
    password: "S$PD5TsU@ke8JEhT~J9M", 
    database: "fartsa"
}).promise();

/** Decode JSON data */
app.use(express.json());

app.engine('hbs', expressHbs.engine(
	{
		defaultLayout: "layout",
		extname: 'hbs'
		/*helpers: {
	        style(page) {
			    return new hbs.SafeString('<link href="/css/' + page + '.css" rel="stylesheet">');
	        },
	        categoriesStyle(categories) {
	        	return categories ? new hbs.SafeString('<link href="/css/categories.css" rel="stylesheet">') : null;
	        }
	    }*/
		/*script(page) {
			return new hbs.SafeString('<script src="/js/' + page + '.js"></script>');
		},
		categoriesScript(categories) {
			return categories ? new hbs.SafeString('<script src="/js/categories.js"></script>') : null;
		},*/
	}
));

app.set('view engine', 'hbs');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  }, function verify(email, password, cb) {
	console.log("hi");
	let connection = DB.createConn();
	connection.query("SELECT * FROM users WHERE email='" + email + "';", function(err, results, fields) {
		if (err) { DB.plainEndConn(connection); console.log(1); return cb(err); }
		if (!results.length) { DB.plainEndConn(connection); console.log(2); return cb(null, false, { message: 'Неверный емейл либо пароль.' }); }
		if (require('crypto').createHash('sha256').update(password + results[0].salt).digest("hex") !== results[0].password_hash) {
			DB.plainEndConn(connection); console.log(3); return cb(null, false, { message: 'Неверный емейл либо пароль.' });
		}
		DB.plainEndConn(connection); console.log(4);
		return cb(null, results[0]);
	});
}));

passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    cb(null, user.id);
  });
});

passport.deserializeUser(function(id, cb) {
  process.nextTick(function() {
    let connection = DB.createConn();
	connection.query("SELECT * FROM users WHERE id='" + id + "';", function(err, results, fields) {
		DB.plainEndConn(connection); cb(err,results[0]);
	});
  });
});

app.get("/confirm", function(request, response) {
	let connection = DB.createConn();
	jwt.verify(request.query.token, config.secret, function(err, decoded) {
		if (err) {
			response.sendStatus(422);
		}
		else {
			connection.query("UPDATE users SET is_confirmed=1 WHERE email='" + decoded.email + "';",
	            function(err, results, fields) {
	                if (err) {
	                    console.log(err);
	                    connection.end(function(err) {
	                        if (err) {
	                            console.log(err);
	                            response.sendStatus(503);
	                        }
	                        else {
	                            console.log("Подключение закрыто");
	                            response.sendStatus(503);
	                        }
	                    });
	                }
	                else {
	                    connection.end(function(err) {
	                        if (err) {
	                            console.log(err);
	                            response.sendStatus(503);
	                        }
	                        else {
	                            console.log("Подключение закрыто");
	                            response.redirect('/profile');
	                        }
	                    });
	                }
	            }
	        );
		}
	});
});

app.get("/logreg", function(request, response) {
	if (!request.user) {
		response.render("index");
	}
	else {
		response.send(request.user);
	}
});

app.post("/login", function(req, res, next) {
	//console.log(req.body);
	console.log(req.cookies.captcha)
	let connection = DB.createConn();
	connection.query("SELECT * from captchas WHERE uuid='" + req.cookies.captcha + "';",
	    function(err, results, fields) {
	    	if (err) {
                DB.plainEndConn(connection);
                res.sendStatus(503);
            }
            else {
            	connection.end(function(err) {
                    if (err) {
                        console.log(err); res.sendStatus(503);
                    }
                    else {
                        if (results[0].captcha === req.body.captcha.toLowerCase()) { next(); }
                        else { res.redirect('/logreg?captcha=true'); }
                    }
                });
            }
        });
}, passport.authenticate('local', {
  successRedirect: '/profile',
  failureRedirect: '/logreg?invalid=true'
}));

app.post("/registrate", function(req, res, next) {
	//console.log(req.body);
	console.log(req.cookies.captcha)
	let connection = DB.createConn();
	connection.query("SELECT * from captchas WHERE uuid='" + req.cookies.captcha + "';",
	    function(err, results, fields) {
	    	if (err) {
                DB.plainEndConn(connection);
                res.sendStatus(503);
            }
            else {
            	connection.end(function(err) {
                    if (err) {
                        console.log(err); res.sendStatus(503);
                    }
                    else {
                        if (results[0].captcha === req.body.captcha.toLowerCase()) { next(); }
                        else { res.redirect('/logreg?captcha=true&num=1'); }
                    }
                });
            }
        });
}, function(request, response, next) {
	console.log(request.body);
	if (request.body.nickname.match(/^.{2,}$/) && request.body.email.match(/^[a-z0-9_.-]+@[a-z0-9-]+\.[a-z]{2,}$/) &&
		request.body.password[0].match(/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}$/) &&
		request.body.password[0] === request.body.password[1]) {
		/*try {
			const connection = DB.createConn();
			let user = new User.User(request.body.nickname, request.body.email, request.body.password[0]);
			user.createUser(connection, response);
			connection.end(function(err) {
				if (err) {
					throw new DB.DBError("Ошибка во время закрытия");
				}
				console.log("Подключение закрыто");
				response.redirect('/profile');
			});
		}
		catch (err) {
			if (err instanceof DB.DBError) {
				console.log(err);
				response.sendStatus(503);
			}
			else {
				throw err;
			}
		}*/
		let connection = DB.createConn();
		let user = new User.User(request.body.nickname, request.body.email, request.body.password[0]);
		user.createUser(connection, request, response);
	}
	else {
		response.sendStatus(422);
	}
});

app.use("/profile", function(request, response) {
	if (!request.user) { response.send("Не авторизован!"); return; }
	if (!request.user.is_confirmed) { response.send("Подтвердите почту!"); }
	response.send(request.user);
});

app.get('/logout', function(req, res, next) {
  req.logout(err => {
    if (err) { res.sendStatus(500); }
    res.redirect('/');
  });
});

app.get('/getCaptcha',// session({ name: 'captcha', secret: config.secret, resave: false, saveUninitialized: false, store: sessionStore, cookie: { secure: false } }),
	function(req, res, next) {
	let captcha2 = captcha();
	/*var temp = captcha2.value;
    req.session.regenerate(function(err){
        req.session.captcha = temp;
        req.session.save();
    });*/
    //req.session.reload(); //TODO:убрать это говно
    /*req.session.regenerate(function(err) {
	    req.session.captcha = captcha2.value;
	    req.session.save();
	});*/
    //console.log(req.session);
    //console.log(res.locals);
    //res.locals.captcha = captcha2.value;
    let connection = DB.createConn();
    let uuid;
    connection.query("insert into captchas (uuid, captcha) values(uuid(), '" + captcha2.value + "');",
	    function(err, results, fields) {
	    	if (err) {
                //console.log(err);
               /*connection.end(function(err) {
                    if (err) {
                        console.log(err);
                        res.sendStatus(503);
                    }
                    else {
                        console.log("Подключение закрыто");
                        res.sendStatus(503);
                    }
                });*/
                DB.plainEndConn(connection);
                res.sendStatus(503);
            }
            else {
            	connection.end(function(err) {
                    if (err) {
                        console.log(err); res.sendStatus(503);
                    }
                    else {
                        let conn2 = DB.createConn();
                        conn2.query("SELECT * from captchas WHERE id='" + results.insertId + "';",
                            function(err, results, fields) {
                                if (err) { console.log(err); DB.plainEndConn(conn2); res.sendStatus(500); }
                                else {
                                    DB.plainEndConn(conn2); uuid = results[0].uuid; res.cookie('captcha', uuid, { httpOnly: true }); res.json({image: captcha2.image});
                                }
                            }
                        );
                    }
                });
            }
        }
    );
});

app.get("/", function(request, response) {
	/*let getter = new goods.Getter(pool);
	getter.getNew(0).then(result => {
		response.render("index", {
	        page: "index",
	        categories: true,
	        goodsMin: result[0][0].id
	    });
	});*/
	response.render("index", {
        page: "index",
        categories: true
    });
});

app.get("/api/goods", function(request,response) {
	let getter = new goods.Getter(pool);
	if (request.query.sort) {
		getter.search(request.query.word, request.query.since, request.query.sort).then(result => {
			if (result[0].length == 0) {
				response.status(404).send({error: 'Ничего не найдено!'});
				return;
			}
			response.json( { 'goods': [result[0]] } );
		});
	}
	else {
		getter.search(request.query.word, request.query.since).then(result => {
			if (result[0].length == 0) {
				response.status(404).send({error: 'Ничего не найдено!'});
				return;
			}
			response.json( { 'goods': [result[0]] } );
		});
	}
});

app.get("/api/goods/:id", function(request, response) {
	let getter = new goods.Getter(pool);
	getter.getById(request.params["id"]).then(result => {
		if (result[0].length == 0) {
			response.status(404).send({error: 'Ничего не найдено!'});
			return;
		}
		response.json( { 'goods': [result[0]] } );
	});
});

app.post("/api", function(request, response) {
	//console.log(request.body);
	/*if (request.body.command == 'getNew') {
		let getter = new goods.Getter(pool);
		getter.getNew(request.body.since).then(result => {
			response.json( { 'goods': [result[0]] } );
		});
	}
	else if (request.body.command == 'getPopular') {
		let getter = new goods.Getter(pool);
		getter.getPopular(request.body.since).then(result => {
			response.json( { 'goods': [result[0]] } );
		});
	}
	else if (request.body.command == 'getGoodsById') {
		let getter = new goods.Getter(pool);
		getter.getById(request.body.id).then(result => {
			response.json( { 'goods': [result[0]] } );
		});
	}
	else if (request.body.command == 'searchGoods') {
		let getter = new goods.Getter(pool);
		if (request.body.sort) {
			getter.search(request.body.word, request.body.since, request.body.sort).then(result => {
				response.json( { 'goods': [result[0]] } );
			});
		}
		else {
			getter.search(request.body.word, request.body.since).then(result => {
				response.json( { 'goods': [result[0]] } );
			});
		}
	}*/
	if (request.body.command == 'isLoggedIn') {
		//console.log(request.user.is_confirmed);
		if (!request.user) { response.json( { 'logout': false } ); }
		if (!request.user.is_confirmed) { response.json( { 'logout': true, 'confirm': false, 'nick': request.user.nickname } ); }
		if (request.user && request.user.is_confirmed) response.json( { 'logout': true, 'confirm': true, 'nick': request.user.nickname } );
	}
});





//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
app.get("/goods/create", function(request, response) {
	response.render("goods_create", {
        page: "goods_create",
        categories: false
    });
});

app.get("/goods/:id", function(request, response) {
	pool.execute("UPDATE `goods` SET `views` = `views` + 1 WHERE id = " + request.params["id"] + ";")
		.catch(err => {
			console.log(err.message);
		});
	response.render("index");
});

/*app.get("/test", function(request, response) {
	let getter = new goods.Getter(pool);
	//getter.getNewest().then(result => { getter.getNew(result); });
	getter.getNew(0).then(
		response.render("index", {
	        page: "index",
	        categories: true
	    });
	);
});*/

app.use(express.static('public'));

app.use(function(request, response, next) {
	response.sendStatus(404);
});

app.listen(3000);