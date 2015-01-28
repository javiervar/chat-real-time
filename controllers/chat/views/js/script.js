function login () {
	var user=document.getElementById('user').value;
	var pass=document.getElementById('pass').value;
	console.log(encrypt(pass));
}

function encrypt (data) {
	var salt = CryptoJS.lib.WordArray.random(128/8);
    var key128Bits = CryptoJS.PBKDF2("Secret Passphrase", salt, { keySize: 128/32 });
    var key256Bits = CryptoJS.PBKDF2("Secret Passphrase", salt, { keySize: 256/32 });
    var key512Bits = CryptoJS.PBKDF2("Secret Passphrase", salt, { keySize: 512/32 });
    var key512Bits1000Iterations = CryptoJS.PBKDF2(data, salt, { keySize: 512/32, iterations: 1000 });
	return key512Bits1000Iterations;
}