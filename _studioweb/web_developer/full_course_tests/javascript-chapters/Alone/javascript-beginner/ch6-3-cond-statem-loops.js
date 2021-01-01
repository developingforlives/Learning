/*
document.write("Get ready for some repeated text.<br>");
for (let count = 1; count < 11; count++) {
document.write("I am part of a loop!<br>");
}
document.write("Now we are back to the plain text.<br><br>");

document.write("Get ready for some repeated text.<br>");
for (let count = 1; count < 11; count++) {
document.write("I am part of a loop!: " + count + "<br>");
}
document.write("Now we are back to the plain text.<br><br>");

document.write("Get ready for some repeated text.<br>");
for (let count = 0; count < 11; count+=2) {
document.write("I am part of a loop!: " + count + "<br>");
}
document.write("Now we are back to the plain text.<br><br>");
*/

// ***REMEMBER - THE INDEX STARTS IN 0***

/*
for (i = 0; i < 11; i++) {
   document.write("1 x " + i + " = " + i + "<br>");
}

document.write("<br><br>");

for (i = 0; i < 11; i++) {
   document.write("2 x " + i + " = " + i * 2 + "<br>");
}

document.write("<br><br>");

for (i = 0; i < 11; i++) {
   document.write("2 x " + i + " = " + i * 5 + "<br>");
}
*/

/*
for (let count = 1; count < 11; count++) {
   document.write(count + ". I am part of a loop!<br>");
   for (let nestcount = 1; nestcount < 3; nestcount++) {
      document.write("I keep interrupting in pairs!<br>");
   }
}

document.write("<br><br>");

document.write("Get ready for some repeated text.<br>");
for (let count = 1; count < 11; count++) {
   document.write(count + ". I am part of a loop!<br>");
   for (let nestcount = 1; nestcount < 3; nestcount++) {
      document.write("I keep interrupting in pairs!<br>");
   }
}
document.write("Now we are back to the plain text.");

document.write("<br><br>");
*/

/*
for (i = 0; i < 11; i++) {
   document.write("I am the main loop, number: " + i + "<br>");
   for (let nestI = 0; nestI < 2; nestI++) {
      document.write("I am the nested loop, number: " + nestI + "<br>");
   }
   document.write("<br>");
}
*/

/*
let numTimes = prompt("Choose what number multiplicated do wou want see?");

for (let i = 0; i < 11; i++) {
   document.write(numTimes + " x " + i + " = " + (i * numTimes) + "<br>");
}
*/

/*
for (let count = 1; count < 11; count++) {
   if (count === 5) {
      document.write("The loop is halfway done!<br>");
   }
   else {
      document.write("I am part of a loop!<br>");
   }
}

document.write("<br>");

document.write("Get ready for some repeated text.<br>");
for (let count = 1; count < 11; count++) {
if (count === 5) {
document.write("The loop is halfway done!<br>");
}
else {
document.write("I am part of a loop!<br>");
}
}
document.write("Now we are back to the plain text.");
*/

// DO NOT USE - Creates an infinite loop
/*for (let i = 25; i > 10; i++) {
   document.write("This sentence can repeat forever...<br>");
}*/

/*for (let i = 25; i > 10; i--) {
   document.write("This sentence can be stopped!<br>");
}*/

/*for (let i = 1, j = 10; i < 11; i++, j += 10) {
   document.write(j + "<br>");
}*/

/*for (let i = 1, j = 10; i < 11; i++, j += 10) {
   document.write(j + "<br>");
}*/

//https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercise-5.php

//EVEN or ODD (Par ou Ímpar)
/*for (let x = 0; x <= 20; x++) {
   if (x === 0) {
      console.log(x + " is even");
   }
   else if (x % 2 === 0) {
      console.log(x + " is even");
   }
   else {
      console.log(x + " is odd");
   }
}

for (let i = 1; i < 41; i++) {
   if (i === 0) {
      document.write(i + "<br>");
   }
   else if (i % 4 === 0) {
      document.write("PIN<br>");
   }
   else {
      document.write(i + "<br>");
   }
}*/

/*
document.write("Get ready for some repeated text.<br>");
let count = 1;
while (count < 11) {
document.write(count + ". I am part of a loop!<br>");
count++;
}
document.write("Now we are back to the plain text.<br><br>");

let i = 1;
do {
document.write("Hi!<br>");
i++;
} while (i < 6);

document.write("<br>")

let count2 = 1;
do {
document.write("Hi5!<br>");
count2++;
} while (count2 < 10);
*/

/*
let i = 0;
while (i < 5) {
   i++;
   console.log("i = " + i);
}

let j = 0;
while (j < 5) {
   j++;
   if (j == 3) continue;
   console.log("j = " + j);
}

let l = 0;
while (l < 5) {
   l++;
   if (l == 4) break;
   console.log("l = " + l);
}

console.log("Do While")

let m = 5;
do {
   m++;
   console.log("m = " + m);
} while (m < 5);
*/

let stopnumber = 5;
for (let count = 1; count < 11; count++) {
   if (count === stopnumber) {
      document.write("Sorry, the loop stops here!<br>");
      break;
   }
   else {
      document.write(count + " - I am part of a loop!<br>");
   }
}

document.write("<br>");

let skipnumber = 5;
for (i = 1; i < 11; i++) {
   if (i === skipnumber) {
      continue; // do nothing
   }
   document.write(i + ". I am part of a loop!<br>");
}

document.write("<br>");

let theNum = 0;
for (var j = 1; j < 11; j++) {
theNum = j;
document.write(theNum + ". I am part of a loop!<br>");
}

