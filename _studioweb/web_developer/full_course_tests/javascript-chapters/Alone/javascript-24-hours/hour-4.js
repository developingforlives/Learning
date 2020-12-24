/*function happy() {
   let answer = confirm("Are you happy!");
   if (answer == true) {
      alert("Great!");
   } else if (answer == false) {
      alert("Okay!")
   }
}
happy();*/

//alert();
//confirm();
//prompt();

let myDiv = document.getElementById("div1").innerHTML;
console.log(myDiv);

document.getElementById("div1").innerHTML =
   "<p>Here is some new text instead!</p>";
console.log(document.getElementById("div1").innerHTML);

let myDivv = document.getElementById("div1").innerHTML =
   "<p>Here is some new text instead!</p>";
console.log(myDivv);


//history.length - it's show how many pages the user has visited
console.log("You've visited " + history.length + " web pages in this browser session");

//history.forward();
//history.go(-3); // go back 3 pages
//history.go(2); // go forward 2 pages
//history.go("example.com"); // go to the nearest URL in the history // list that contains 'example.com'

//opening a Browser Window
//location.href = 'http://www.google.com';
//location.replace('http://www.uol.com.br');
//document.reload(true);

document.write("------------------------<br><br>");

document.write("<table>");
document.write("<tr><td>appName</td><td>" + navigator.appName + " </td></tr>");
document.write("<tr><td>appCodeName</td><td>" + navigator.appCodeName + "</td></tr>");
document.write("<tr><td>appVersion</td><td>" + navigator.appVersion + "</td></tr>");
document.write("<tr><td>language</td><td>" + navigator.language + "</td></tr>");
document.write("<tr><td>cookieEnabled</td><td>" + navigator.cookieEnabled + "</td></tr>");
document.write("<tr><td>cpuClass</td><td>" + navigator.cpuClass + "</td></tr>");
document.write("<tr><td>onLine</td><td>" + navigator.onLine + "</td></tr>");
document.write("<tr><td>platform</td><td>" + navigator.platform + "</td></tr>");
document.write("<tr><td>No of Plugins</td><td>" + navigator.plugins.length + "</td></tr>");
document.write("</table>");

document.write("<br><br>------------------------<br><br>");

let myDate = new Date();
console.log(myDate);

let year = myDate.getFullYear(); // four-digit year e.g. 2012
console.log(year);
let month = myDate.getMonth(); // month number 0 - 11; 0 is Jan, etc.
console.log(month);
let date = myDate.getDate(); // day of the month 1 - 31
console.log(date);
let day = myDate.getDay(); // day of the week 0 - 6; Sunday = 0, etc.
console.log(day);
let hours = myDate.getHours(); // hours part of the time, 0 - 23
console.log(hours);
let minutes = myDate.getMinutes(); // minutes part of time, 0 - 59
console.log(minutes);
let seconds = myDate.getSeconds(); // seconds part of time, 0 - 59
console.log(seconds);
let milliseconds = myDate.getMilliseconds(); // seconds part of time, 0 - 59
console.log(milliseconds);

let d1 = new Date("October 22, 1995 10:57:22");
console.log(d1);

let d2 = new Date(95,9,22); // 22nd October 1995 00:00:00
console.log(d2);

let d3 = new Date(95,9,22,10,57,0); // 22nd October 1995 10:57:0
console.log(d3);

var myDate2 = new Date(); // current date and time
document.write( "Object created on day number " + myDate2.getDay() + "<br />");
myDate2.setDate(15); // change day of month to the 15th
document.write("After amending date to 15th, the day number is " + myDate2.getDay());








