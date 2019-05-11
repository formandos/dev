const app = require('./server_config.js');
var validator = require('validator'); //medida de segurança
var http = require('http');

app.get('/', function(req, res){
	console.log("Link Index/Raiz");

});



