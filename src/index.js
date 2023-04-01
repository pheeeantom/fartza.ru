const express = require("express");
const expressHbs = require("express-handlebars");
const app = express();
const goodsRouter = require('./routes/goods');
const pool = require('./db/pool');

/** Decode JSON data */
app.use(express.json());
app.use(express.urlencoded({extended: true}));

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

app.use('/api', goodsRouter);

/*app.get("/api/goods", function(request,response) {
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
});*/

//app.post("/api", function(request, response) {
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
//});





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