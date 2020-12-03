//Named Functions

function sayHi(name) {
   document.write("Hi " + name + ", how you doin' <br><br>")
}

sayHi("Carlos");

function testExample1() {
   var greeting = "Hi! My name is Carlos.";
   document.write(greeting + "<br><br>");
}
testExample1();

function testExample2(name) {
   var greeting = "Hi! My name is " + name + ".";
   document.write(greeting);
}
testExample2("Isaac");

function jumpLine() {
   document.write("<br><br>");
}
jumpLine();

function testExample3(name) {
   var greeting = "Hi! My name is " + name + ".";
   document.write(greeting);
   jumpLine();
}
testExample3("Salvador");

function testExample4(name) {
   var greeting = "Hi! My name is " + name + ".";
   jumpLine();
   return greeting;
}
document.write(testExample4("Carlos Salvador"));

function testExample5(name, age) {
   var greeting = "Hi! My name is " + name + " and I am " + age + " years old.";
   jumpLine();
   return greeting;
}
document.write(testExample5("Carlos Salvador", 45));

function testExample6(name, age) {
   var greeting = "Hi! My name is " + name + " and I am " + age + " years old.";
   jumpLine();
   return greeting;
}
document.write(testExample6("Carlos Isaac", 45));

//***IMPORTANT Note: the names in the arguments of the functions does not need match, they are just placeholders 
function testExample7(a, b) {
   var greeting = "Hi! My name is " + a + " and I am " + b + " years old.";
   jumpLine();
   return greeting;
}

var firstName = "Carlos";
var currentAge = 45;

document.write(testExample7(firstName, currentAge));


//Anonymous Functions

var anonymousExample = function () {
   var greeting = "Hi! My name is Carlos.";
   jumpLine();
   return greeting;
}
console.log(anonymousExample());

var anonymousExample2 = function (name, age) {
   var greeting = "Hi! My name is " + name + " and I am " + age + " year old.";
   jumpLine();
   return greeting;
}
console.log(anonymousExample2("Carlos", 45));

var anonymousExample2 = function (name, age) {
   var greeting = "Hi! My name is " + name + " and I am " + age + " year old.";
   jumpLine();
   return greeting;
}

var name =  "Carlos";
var age = 45;
console.log(anonymousExample2(name, age));


//Immediate invoke Functions

(function () {
   var greeting = "Hi! My name is Carlos."
   console.log(greeting);
}())