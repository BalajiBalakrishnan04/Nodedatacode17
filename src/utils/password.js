const generatePassword = (length) => {
 let characters = "QWERTYUIOPLKJHGFDSAZXCVBNMmnbvcxzasdfghjklpoiuytrewq1234567890)(*&^%$#@!>:LP}{|}{P)(*&^5";
 let password = "";
 for (let index = 0; index < length; index++) {
  password += characters.charAt(Math.floor(Math.random() * characters.length))   
 };
 return password;
};


module.exports = generatePassword;