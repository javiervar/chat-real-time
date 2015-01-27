var express = require('express');
var app = module.exports = express();
app.set('views', __dirname + '/views');


app.get('/', function(request, response) {
response.render('index', {
title: 'login'
});
});

app.post('/log', function(req, res) {
	console.log(req.body)
});

app.post('/user', function(request, response) {
	console.log(request.body);
});