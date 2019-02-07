var express 		= 	require("express");
var app				= 	express();
const fs 			= 	require('fs');
var morgan			=	require('morgan');
var bodyParser		=	require('body-parser');
var port    		=   process.env.PORT || 3600;
var router 			= 	express.Router();
var cors 			=  	require('cors');
/***************************************************/

app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json
 
/***********************************************************/

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
//enables cors
app.use(cors({
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}));
/**************************************************************/
app.use(express.static('tmp'))
require('./app/routes.js')(app);
app.listen(port,function(){
	console.log("server created "+port);
})