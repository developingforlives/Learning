/*var isMale = true;

if (isMale) {
   document.write("<h1 style='color: blue'>You are MACHO!!!</h1>");
} else {
   document.write("<h1 style='color: violet'>You are a Female!!!</h1>");
}*/

/*var isMale = true;
var isTall = true;

if (isMale && isTall) {
   document.write("You are a tall male");
} else {
   document.write("You are either not male or not tall or both");
}*/

/*var isMale = false;
var isTall = false;

if (isMale || isTall) {
   document.write("You are either male or tall or both");
} else {
   document.write("You are not male and not tall");
}*/

/*var isMale = false;
var isTall = false;

if (isMale && isTall) {
   document.write("You are a tall male");
} else if (isMale && !isTall) {
   document.write("You are a short male");
} else if (!isMale && isTall) {
   document.write("You are not male, but you are tall")
}
else {
   document.write("You are not male and not tall");
}*/

/*

if - se

else if - entao

else - senao

*/

document.write("<h1 style='color: red'>rola ||</h1>")

document.write("<br><hr><br>");

var luckNumber = (Math.round(Math.random() * 10));

alert(luckNumber);

var number = parseInt(window.prompt("Let's see if you have luck...\n\nI insert a integer number from 0 to 100"));

if (number == luckNumber) {
   document.write("<h1 style='color:green'>You are really lucky, You Win!!!</h1>");
} else {
   document.write("<h1 style='color:red'>You Lose!!!</h1>");
}

document.write("The number luck is: " + luckNumber + ", but do not be upset, Try Again!");


//I AM POWERFUL







