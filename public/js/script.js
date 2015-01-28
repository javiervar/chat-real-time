function login () {
	console.log("sup")
	var user=document.getElementById('user').value;
	var pass=document.getElementById('pass').value;
	
	var encrypted = CryptoJS.TripleDES.encrypt("Message", "Secret Passphrase");
	console.log(encrypted);

    var decrypted = CryptoJS.TripleDES.decrypt(encrypted, "Secret Passphrase");
	console.log(decrypted);

}

/*function encrypt (data) {
	var salt = CryptoJS.lib.WordArray.random(128/8);
    /*var key128Bits = CryptoJS.PBKDF2("Secret Passphrase", salt, { keySize: 128/32 });
    var key256Bits = CryptoJS.PBKDF2("Secret Passphrase", salt, { keySize: 256/32 });
    var key512Bits = CryptoJS.PBKDF2("Secret Passphrase", salt, { keySize: 512/32 });
    
    var key512Bits1000Iterations = CryptoJS.PBKDF2(data, salt, { keySize: 512/32, iterations: 100 });
    console.log(decryptString(key512Bits1000Iterations.toString(),512/32,salt.toString()));
	return salt+key512Bits1000Iterations;
}
*/


 
 