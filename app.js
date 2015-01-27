var express = require('express');
var http = require('http');
var path = require('path');
var app = express();
//var io = require('socket.io')(http);


var chat = require('./controllers/chat');

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/layouts');
app.set('view engine', 'jade');
/*app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(perimitirCrossDomain);
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
*/
/*app.get('/', function(req, res){
  res.sendFile(__dirname + '/templates/room.html');
});



app.post('/login',function (req,res) {
	console.log('POST /');
    console.log(req);
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

http.createServer(app).listen(app.get('port'), function(){
console.log('Servidor corriendo --> ' + app.get('port'));
});