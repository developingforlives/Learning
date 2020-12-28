/*function detectSpam(input) {
input = input.toLowerCase();
if(input.indexOf("fake") < 0) {
return false;
}
return true;
}
let mystring = prompt("Enter a string");
alert(detectSpam(mystring));*/

/*
let message = "";
let temperature = 60;

if (temperature < 64) {
   message = "Turn on the heating!";
   heatingStatus = "on";
   fanStatus = "off";
} else if (temperature > 72) {
   message = "Turn on the fan!";
   heatingStatus = "off";
   fanStatus = "on";
} else {
   message = "Temperature is OK";
   heatingStatus = "off";
   fanStatus = "off";
}
console.log(message + "\nHeating status: " + heatingStatus + "\nFan status: " + fanStatus);*/

/*
let day;
switch (new Date().getDay()) {
   case 0:
      day = "Sunday";
      break;
   case 1:
      day = "Monday";
      break;
   case 2:
      day = "Tuesday";
      break;
   case 3:
      day = "Wednesday";
      break;
   case 4:
      day = "Thursday";
      break;
   case 5:
      day = "Friday";
      break;
   case 6:
      day = "Saturday";
}
document.getElementById("demo").innerHTML = "Today is " + day;
*/

/*
let color = "";
switch (color) {
   case "red":
      message = "Stop!";
      break;
   case "yellow":
      message = "Pass with caution";
      break;
   case "green":
      message = "Come on through";
      break;
   default:
      message = "Traffic light out of service. Pass only with great care";
}
document.querySelector(".demo2").innerHTML = message;*/


/*let temperature = prompt("Insert the current temperature.");
if (temperature >= 64 && temperature <= 72) {
   message = "<h1 style=color:green>The temperature is OK</h1>";
} else {
   message = "<h1 style=color:red>The temperature is out of range!</h1>";
}
document.querySelector(".demo3").innerHTML = message;*/


let count = 10;
let sum = 0;
while (count > 0) {
   sum = sum + count;
   count--;
}
console.log(sum);


let sum2 = 0;
for (let count2 = 10; count2 > 0; count2--) {
   sum2 = sum2 + count2;
}
console.log(sum2);


let count3 = 10;
let sum3 = 0;
while (count3 > 0) {
   sum3 = sum3 + count3;
   if (sum3 > 42) break;
   count3--;
}
console.log(sum3);


let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let message = "";
for (i in days) {
   message += 'Day ' + i + ' is ' + days[i] + '\n';
}
console.log(message);


function hide(elementId) {
   document.getElementById(elementId).style.display = 'none';
}

window.onload = function () {
   setTimeout("hide('id1')", 4000);
}