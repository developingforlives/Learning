/* I did that alone, WOOOOOHOOOOOOO!!!
function total (num1, num2) {
   sum = num1 + num2;
   document.write(sum + "<br><br>");
}
total(35, 2);

function total2 () {
   let num3 = parseFloat(prompt("Enter a number:"));
   let num4 = parseFloat(prompt("Enter anothe number:"));
   let sum2 = (num3 + num4);
   document.write(sum2)
}
total2()

function fullName (name, surname) {
   document.write("<h3 style='color:green'>Hi " + name + " " + surname + ", how are doin'?</h3>");
}
fullName("Matheus", "Salvador");

function fullName2 () {
   let name = prompt("Please enter your first name:");
   let surname = prompt("Please enter your last name ");
   let fullName3 = name + " " + surname;
   message = document.querySelector(".fullName3").innerHTML = document.write("<h2 style='color:blue'>Hi " + fullName3 + ", how are doin'?</h2>");
}
fullName2()*/

//This chapter really start here...
/*function getAddedText() {
   let textPart1 = "This is ";
   let textPart2 = "fun!";
   let addedText = textPart1 + textPart2;
   return addedText;
}
document.write(getAddedText());*/

/*function showMessage () {
   alert("This is a alert!");
}
showMessage();

function showMessage2 (write) {
   alert("This is a alert!\n\n" + write);
}
showMessage2("Vagabunda por perto!!!");*/

/*function showMessage() {
   window.alert("This is an alert!");
}
window.alert("I am first, ha!");
window.alert("I am second, ha ha!");
showMessage();*/

/*function updateAlert() {
   window.alert("Welcome! This site is updated daily!");
}
function callAlert() {
   updateAlert();
}
callAlert();*/

/*function updateAlert() {
   window.alert("Welcome! This site is updated daily!");
}
function sectionAlert() {
   window.alert("Please visit the picture section!");
}
function linksAlert() {
   window.alert("Also, check out my links page!");
}
function getMessages() {
   updateAlert();
   sectionAlert();
   linksAlert();
}
getMessages()*/

//Global Scope Variable, can be changed in anywhere
/*let myCar = "SEAT";
let payCheck = 1200;

function newCar() {
   //Local Scope Variable, only can be changed inside of the function
   let myCar = "Ferrari";
   let payCheck = 3500;
   window.alert("You need $" + payCheck + " to get a " + myCar);
}
newCar();
window.alert("You make $" + payCheck + " and have a " + myCar);*/

/*function checkAlert(pCheck) {
   window.alert("You make $" + pCheck);
}
let payCheck = 1200;
checkAlert(payCheck);*/

/*function checkAlert(pCheck, car) {
   window.alert("You make $" + pCheck + " and have a " + car + ".");
}
checkAlert(1200, "Corvette");
checkAlert(1000 + 1500, "SE" + "AT") */

/*function checkAlert(pCheck, car) {
   if (pCheck && car) {
      window.alert("You make $" + pCheck + " and have a " + car + ".");
   } else {
      window.alert("My arguments are missing!");
   }
}
checkAlert(2500, "SEAT");
checkAlert();*/

/*function getAddedText() {
   let textPart1 = "This is ";
   let textPart2 = "fun!";
   let addedText = textPart1 + textPart2;
   return addedText;
}
let alertText = getAddedText();
alert(alertText);*/

/* Here you can find an example of the VARIABLE/FUNCTION
let yourName = function (name) {
   alert("Hi " + name + ".");
};
yourName("Carlos");*/

/* This cannot be processed 
sendAlert("This is ", "broken!");
let sendAlert = function (textPart1, textPart2) {
   alert(textPart1 + textPart2);
};*/

/*let sendAlert = function (textPart1, textPart2) {
   alert(textPart1 + textPart2);
};
sendAlert("This is ", "working!");*/

document.onclick = function () {
   alert("Do not click on my page!");
};
