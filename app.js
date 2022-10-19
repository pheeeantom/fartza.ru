const express = require("express");
const expressHbs = require("express-handlebars");
const hbs = require("hbs");
const app = express();
const goods = require("./data/goods");
//var bodyParser = require('body-parser');

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
		extname: 'hbs',
		helpers: {
	        style(page) {
			    return new hbs.SafeString('<link href="/css/' + page + '.css" rel="stylesheet">');
	        },
	        script(page) {
			    return new hbs.SafeString('<script src="/js/' + page + '.js"></script>');
	        },
	        categoriesScript(categories) {
	        	return categories ? new hbs.SafeString('<script src="/js/categories.js"></script>') : null;
	        },
	        categoriesStyle(categories) {
	        	return categories ? new hbs.SafeString('<link href="/css/categories.css" rel="stylesheet">') : null;
	        }
	    }
	}
));

app.set('view engine', 'hbs');

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

app.post("/api", function(request, response) {
	//console.log(request.body);
	if (request.body.command == 'getNew') {
		let getter = new goods.Getter(pool);
		getter.getNew(request.body.since).then(result => {
			response.json( { 'goods': result } );
		});
	}
	else if (request.body.command == 'getPopular') {
		let getter = new goods.Getter(pool);
		getter.getPopular(request.body.since).then(result => {
			response.json( { 'goods': result } );
		});
	}
	else if (request.body.command == 'getGoodsById') {
		let getter = new goods.Getter(pool);
		getter.getById(request.body.id).then(result => {
			response.json( { 'goods': result } );
		});
	}
	else if (request.body.command == 'searchGoods') {
		let getter = new goods.Getter(pool);
		if (request.body.sort) {
			getter.search(request.body.word, request.body.since, request.body.sort).then(result => {
				response.json( { 'goods': result } );
			});
		}
		else {
			getter.search(request.body.word, request.body.since).then(result => {
				response.json( { 'goods': result } );
			});
		}
	}
});

app.get("/goods/:id", function(request, response) {
	pool.execute("UPDATE `goods` SET `views` = `views` + 1 WHERE id = " + request.params["id"] + ";")
		.catch(function(err) {
			console.log(err.message);
		});
	response.render("goods", {
        page: "goods",
        categories: false
    });
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