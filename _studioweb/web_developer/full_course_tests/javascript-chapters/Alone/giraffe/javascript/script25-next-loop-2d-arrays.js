for (i = 0; i < 3; i++) {
   for (j = 0; j < 3; j++) {
      document.write("i = " + i + " | j = " + j + "<br>");
   }
}

document.write("<br><hr><br>");


var numberGrid = [
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9],
   [0]
];
document.write(numberGrid[2][1]);

document.write("<br><br><hr><br>");


var numberGrid = [
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9],
   [0]
];

for (i = 0; i < numberGrid.length; i++) {
   for (j = 0; j < numberGrid[i].length; j++) {
      document.write(numberGrid[i][j]);
   }
   document.write("<br>");
}

for (var i = 0; i <= 5; i++) {
   document.write("<br>")
   for (var j = 0; j <= 5; j++) {
      document.write("i is in: " + i + " and j is in: " + j + "<br>")
   }
}

document.write("<br><hr><br>");


var num = 0;
for (var i = 0; i <= 10; i++) {
   document.write("1 x " + (num++) + " = " + i + "<br>");
}

document.write("<br><hr><br>");


var num = 0;
for (var i = 0; i <= 20; (i = i += 2)) {
   document.write("2 x " + (num++) + " = " + i + "<br>");
}

document.write("<br><hr><br>");


var num = 0;
for (var i = 0; i <= 50; (i = i += 5)) {
   document.write("5 x " + (num++) + " = " + i + "<br>");
}

document.write("<br><hr><br>");


var x = 0;
var y = 0;
while (y <= 10) {
   document.write("1 x " + (x++) + " = " + y + "<br>");
   y++;
}

document.write("<br><hr><br>");


var x = 0;
var y = 0;
while (y <= 50) {
   document.write("5 x " + (x++) + " = " + y + "<br>");
   y += 5;
}

document.write("<br><hr><br>");


var x = 0;
var y = 0;
while (y <= 100) {
   document.write("10 x " + (x++) + " = " + y + "<br>");
   y += 10;
}