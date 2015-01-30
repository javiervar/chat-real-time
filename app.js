var express = require('express');
var path = require('path');
var app = express();
var https = require('http').Server(app);
var favicon = require('serve-favicon');
var bodyParser = require('body-parser')
var io = require('socket.io')(https);




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
*/
io.on('connection', function(socket){

  		socket.on('disconnect', function(){

    	console.log('user disconnected');
  	});

   socket.on('chat message', function(msg){

    msg.time=getDateTime();
   	io.emit('chat message', msg);
  	});


});

app.use(chat);

https.listen(3000, function(){
  console.log('listening on *:3000');
});
//https.createServer(app).listen(app.get('port'), function(){
//console.log('Servidor corriendo --> ' + app.get('port'));
//});


function getDateTime() {

    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return year + ":" + month + ":" + day + ":" + hour + ":" + min + ":" + sec;

}