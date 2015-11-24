var express = require('express'),
    swig = require('swig'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    routes = require('./routes');

var app = express();

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Swig Setup
swig.setDefaults({ cache: false });
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
// Swig will cache templates for you, but you can disable
// that and use Express's caching instead, if you like:
app.set('view cache', false);


app.get('/',function(req,res,next){
	res.status(200).render('');
})

app.get('/error',function(req,res,next){
	res.status(418).render('error');
})


app.use(function(req,res,next){
	var err = new Error("I'm a little teapot")
	err.status = 418;
	next(err);
})

app.use(function(err,req,res,next){
	res.status(err.status||500);
	console.log({error: err})
	res.render('error');
})


app.listen(3000, function(err){
  console.log('Listening to port 3000');
});
