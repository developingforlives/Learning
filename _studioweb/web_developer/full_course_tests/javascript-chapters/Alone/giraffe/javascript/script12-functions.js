function sayHi() {
   document.write("<h1 style='color: red'>Hi Viado</h1>");
}
//sayHi();

document.write("<br><hr><br>");

function sayHi2() {
   var name = "Stephen";
   document.write("<h1>Hi " + name + " Viado</h1>");
}
//sayHi2();

document.write("<br><hr><br>");

function sayHi3() {
   var name = prompt("Enter your name:");
   document.write("<h1>Hi " + name + " Viado</h1>");
}
//sayHi3();

document.write("<br><hr><br>");

function sayHi3(name, age) {
   document.write("<h1>Hi " + name + ", you are " + age + " years old.</h1>");
}
sayHi3("Pedro", 47);
sayHi3("Carlos", 45);

document.write("<br><hr><br>");

function addition(num1, num2) {
   document.write(num1 + num2);
}
document.write(addition(4, 4));

document.write("<br><hr><br>");

function addition(num1, num2) {
   return num1 + num2;
}
document.write(addition(3, 3));
console.log(addition(2, 2));

document.write("<br><hr><br>");

function addition(num1, num2) {
   return num1 + num2;
}

var addedNumbers = addition(4, 100);

document.write(addedNumbers);
