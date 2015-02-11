var socket = io();
var randomnumber=Math.floor(Math.random()*11);


 socket.on('chat message', function(msg){
 	console.log(msg)
 	console.log(msg.id,randomnumber)
 	if(msg.id==randomnumber){
 		console.log("nada")
 	}else{
 		var pannel=document.getElementById("panel-msj");
    	document.getElementById('messages').innerHTML+="<li class='from'><div>"+msg.message+"</div></li>";
 		pannel.scrollTop = pannel.scrollHeight;

 	}
 	
  });

//chat
function send (user) {
	console.log(user);
	
	var message=document.getElementById("message");
	var messages=document.getElementById("messages");
	var pannel=document.getElementById("panel-msj");
	var newMessage="";

	newMessage="<li class='me'><div>"+message.value+"</div><i>";
	var obj={id:randomnumber,message:message.value};
	console.log(JSON.stringify(obj));
	socket.emit('chat message', obj);
	if(message.value.length>0 && message.value!=" " && message.value!=null)
		messages.innerHTML+=newMessage;
    message.value=" ";
    pannel.scrollTop = pannel.scrollHeight;
    //return false;
}

function runScript(e) {
    var code = (e.keyCode ? e.keyCode : e.which);
 		if(code == 13) { //Enter keycode
   			send()
 	}
}


