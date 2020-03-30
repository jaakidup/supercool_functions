



let teststring = "My email is Jaaki@gmail.com";
let regex = /email is [A-Z, a-z]+[@][A-Z, a-z]+[.]/;
let isExisting = regex.test(teststring);


console.log(isExisting);







