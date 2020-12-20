/*function sayHi(name) {
   document.write("How are you doing?");
   alert("Hi, " + name);
}

sayHi("Carlos");*/

function sayHello(name) {
   document.write("Hello, " + name);
}

function squareRoot(x) {
   console.log(x * x);
}
squareRoot(4)

function cube(y) {
   console.log(y * y * y);
}
cube(3);

function buttonReport(buttonId, buttonName, buttonValue) {
   // information about the id of the button
   let userMessage1 = "Button id: " + buttonId + "\n";
   // then about the button name
   let userMessage2 = "Button name: " + buttonName + "\n";
   // and the button value
   let userMessage3 = "Button value: " + buttonValue;
   // alert the user
   alert(userMessage1 + userMessage2 + userMessage3);
}

function cubeR(x) {
   return x * x * x;
}
let answer = cubeR(4);
console.log(answer);
//or simplifying 
console.log(cubeR(5));


//Scope of Variables...
// Define our function addTax()
function addTax(subtotal, taxRate) {
   let total = subtotal * (1 + (taxRate / 100));
   return total;
} // now let's call the function
let invoiceValue = addTax(50, 10);
console.log(invoiceValue); // works correctly
// alert(total); this doesn't work because is inside of the function
console.log(addTax(50, 10));


let a = 10;
let b = 10;
function showVars() {
   let a = 20; // declare a new local variable 'a'
   b = 20; // change the value of global variable 'b'
   return "Local variable 'a' = " + a + "\nGlobal variable 'b' = " + b;
}
let message = showVars();
console.log(message + "\nGlobal variable 'a' = " + a);


//Exercises

function tempConvert() {
   let temp = parseFloat(document.querySelector("#value1").value);
   let convert = document.querySelector("#operator").value;
   let result;
   if (convert == "CtoF") {
      result = "We have now: " + (((temp * 9) / 5) + 32).toFixed(1) + " degrees Fahreinheit.";
   } else if (convert == "FtoC") {
      result = "We have now: " + ((temp -32) * 5/9).toFixed(1) + " degrees Celsius.";
   }
   document.querySelector("#result").innerHTML = result;
}1000