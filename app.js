var express = require('express');
var https = require('http');
var path = require('path');
var app = express();
var favicon = require('serve-favicon');
var bodyParser = require('body-parser')
//var io = require('socket.io')(http);




var chat = require('./controllers/chat');

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
//app.use(favicon(__dirname + '/public/favicon.ico'));
//app.use(express.logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

/*app.use(express.methodOverride());
app.use(perimitirCrossDomain);
app.use(app.router);

*/ app.use(express.static(path.join(__dirname, 'public')));

/*app.get('/', function(req, res){
  res.sendFile(__dirname + '/templates/room.html');
});



app.post('/login',function (req,res) {
	console.log('POST /');
    console.log(req.body);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('thanks');

});

io.on('connection', function(socket){

  	console.log('a user connected');
  		socket.on('disconnect', function(){
    	console.log('user disconnected');
  	});

   socket.on('chat message', function(msg){
   	io.emit('chat message ',msg );
    console.log('message: ' + msg);
  	});


});*/

app.use(chat);

https.createServer(app).listen(app.get('port'), function(){
console.log('Servidor corriendo --> ' + app.get('port'));
});