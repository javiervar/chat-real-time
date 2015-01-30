var socket = io();
var randomnumber=Math.floor(Math.random()*11);


 socket.on('chat message', function(msg){
 	console.log(msg)
 	console.log(msg.id,randomnumber)
 	if(msg.id==randomnumber){
 		console.log("nada")
 	}else{
    	document.getElementById('messages').innerHTML+="<li class='from'><div>"+msg.message+"</div></li>";
 	}
 	
  });

function login () {

	var user=document.getElementById('user').value;
	var pass=document.getElementById('pass').value;
	var encrypted = CryptoJS.AES.encrypt("Message", "Secret Passphrase");
    var decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");
	console.log(encrypted);
	console.log(CryptoJS.enc.Latin1.stringify(decrypted));
	var data="user="+user+"&pass="+pass;

}

//chat
function send () {
	
	var message=document.getElementById("message");
	var messages=document.getElementById("messages");
	var pannel=document.getElementById("panel-msj");
	var newMessage="";

	newMessage="<li class='me'><div>"+message.value+"</div><i>";
	var obj={id:randomnumber,message:message.value};
	console.log(JSON.stringify(obj));
	socket.emit('chat message', obj);
	if(message.value!=" ")
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


