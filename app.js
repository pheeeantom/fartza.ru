const express = require("express");
const expressHbs = require("express-handlebars");
const hbs = require("hbs");
const app = express();

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
    response.render("index", {
        page: "index",
        categories: true
    });
});

app.use(express.static('public'));

app.use(function(request, response, next) {
	response.sendStatus(404);
});

app.listen(3000);