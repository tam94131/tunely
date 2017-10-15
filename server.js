// server.js
// SERVER-SIDE JAVASCRIPT
var express = require('express'),
	app = express();
// console.log(__dirname);		//current directory
var db = require('./models'); 
var controllers = require('./controllers');

app.use(express.static('public'));

// Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser
app.use(function(req,res,next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-Wtih, Content-Type, Accept");
	next();
});


/********** ROUTES *************/
app.get('/', function (req,res) {
	console.log('GET / 200 OK');
	console.log(__dirname);		//current directory
	res.sendFile('views/index.html' , { root : __dirname});
	// res.send('Hello World!');
});

app.get('/api', controllers.api.index);


/********** PORT LISTEN ***********/
app.listen(process.env.PORT || 3000, function () {
	console.log("Example app listening at http://localhost:3000/");
});
