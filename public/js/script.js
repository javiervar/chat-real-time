function login () {
	var form=document.getElementById('form');
	var user=document.getElementById('user').value;
	var pass=document.getElementById('pass').value;
	var encrypted = CryptoJS.AES.encrypt("Message", "Secret Passphrase");
    var decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");
	console.log(encrypted);
	console.log(CryptoJS.enc.Latin1.stringify(decrypted));
	var data="user="+user+"&pass="+pass;

	form.submit();

}

