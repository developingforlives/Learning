/*var i = 0
while (i <= 10) {
   document.write(i + "<br>")
   i++;
}*/

// ***Tip: usually i is used in loops because it means... INDEX

for (var i = 0; i <= 10; i++) {
   document.write(i + "<br>");
}

document.write("<br><hr><br>");

var fruits = ["Bananas", "Apples", "Oranges", "Grapes"];
document.write(fruits[0] + '<br><br>')
for (var i = 0; i < fruits.length; i++) {
   document.write(fruits[i] + "<br>");
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

var num = 0;
for (var i = 0; i <= 100; (i = i += 10)) {
   document.write("10 x " + (num++) + " = " + i + "<br>");
}

document.write("<br><hr><br>");


for (var i = 1; i <= 3; i++) {
   document.write("Oi <br>");
}
