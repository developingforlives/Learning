//There is 3 types of VARIABLES in JavaScript

// var  -  let  -  const

//String data type
var name = "Carlos it's very nice";
document.write(name + "<br><br>");

var name2 = "Carlos \"Hello\" Salvador";
document.write(name2 + "<br><br>");

var name3 = "Carlos <br> Isaac <br> Salvador";
document.write(name3 + "<br><br>");

var name3 = "Carlos \nIsaac \nSalvador";
console.log(name3 + "<br><br>");
console.log(typeof name3);

console.log("Teste\nTeste")


//Numeric data type
var num1 = 20
var num2 = 20.5
var sum = num1 + num2
document.write(sum + "<br><br>");
console.log(typeof sum);



//Boolean data type
var bool1 = true;
var bool2 = false;
var bool3 = 1; // 1 is equal true
var bool3 = 0; // 0 is equal false
console.log(typeof bool1);
console.log(typeof bool3);


/*var checkName = "Carlos";

if (checkName == "Carlos") {
   alert("true");
}  else {
   alert("false")
}*/


//Undefined data
var hey;
console.log(hey);
console.log(typeof hey);


//Null data type
var hey2 = null;
console.log(hey2);
console.log(typeof hey2);