var express = require('express');
var app = module.exports = express();
app.set('views', __dirname + '/views');


app.get('/', function(request, response) {
	response.render('index', {
		title: 'login'
	});
});

app.get('/chat', function(request, response) {
	console.log(request.body);
	response.render('chat', {
		user: 'login'
	});
});

app.post('/login', function(req, res) {
	console.log(req.body);
	res.redirect('/chat');
	res.render('chat', {
		user: 'login'
	});
});

