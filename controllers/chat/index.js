var express = require('express');
var app = module.exports = express();
app.set('views', __dirname + '/views');


app.get('/', function(request, response) {
	response.render('index', {
		title: 'login',
		error: ''
	});
});

app.get('/listContacts', function(request, response) {
	response.render('list', {
		title: 'login',
		
	});
});


app.get('/register', function(request, response) {
	response.render('register', {
	});
});

app.post('/registerData',function (req,res) {
	console.log(req.body);
	var data=req.body;

	var name=data.name;
	var lastName=data.lastName;
	var nickName=data.nickName;
	var cel=data.cel;
	var email=data.email;
	var pass=data.pass;
	var birthdate=data.birthdate;

 	
  		var newUser = new db.User({
    		name : name,
    		lastName : lastName,
    		nickName : nickName,
    		cel : cel,
    		email : email,
    		pass: pass,
    		birthdate : birthdate 
  		});

  		newUser.save(function(error, user) {
    		if (error){ 
    				res.json(error);	
    			}
    			else{
      				console.log("Usuario guardado");
      				res.write('Bienvenido');
				}
  			});
 
});


app.post('/login', function(req, res) {
	console.log(req.body);
	var user=req.body.user;
	var pass=req.body.pass;
	
	db.User.findOne({email:user}, function (err,data) {
		console.log(data)
		console.log(err);
		if (data==null) {
			res.render('index', {
				title: 'login',
				error: 'usuario incorrecto'
				});
		}else{
			if (data.pass==pass) {
				res.render('contacts', {
				user: req.body.user	
				});

			}else{
				res.render('index', {
				title: 'login',
				error: 'usuario incorrecto'
				});
			}
			console.log(data);
		}
		
	});
	
});


