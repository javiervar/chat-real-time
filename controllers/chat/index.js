var express = require('express');
var app = module.exports = express();
app.set('views', __dirname + '/views');


app.get('/', function(request, response) {
	response.render('index', {
		title: 'login',
		error: ''
	});
});

app.get('/register', function(request, response) {
	response.render('register', {
	});
});


app.post('/login', function(req, res) {
	console.log(req.body);
	var user=req.body.user;
	var pass=req.body.pass;
	if(user=="javi"&&pass=="123"){
	res.render('chat', {
		user: req.body.user	});
	}else{
		res.render('index', {
			title: 'login',
			error: 'usuario incorrecto'
		});
	}
});

