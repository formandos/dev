var express = require('express');
var app = module.exports = express();
var bodyParser = require('body-parser');

//executado antes de cada resposta
var allowCors = function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST'); //DELETE
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	res.header('Access-Control-Allow-Credentials', 'true');
	next(); // continue com o processamento
}

// https://stackoverflow.com/questions/18864677/what-is-process-env-port-in-node-js/39077056
let port = process.env.PORT || 5000;
 app.listen(port, () =>{
	console.log("Servidor rodando em http://localhost:"+port);
 });

 app.use(allowCors);
 app.use(bodyParser.json());
 app.use(express.static(__dirname + '/public'));
 app.use(bodyParser.urlencoded ({
 	extended: true
}));