var fruits = ["Apples", "Bananas", "Oranges" ]
document.write(fruits);

document.write("<br><br>");

var fruits = ["Apples", "Bananas", "Oranges" ]
document.write(fruits [0]);

document.write("<br><br>");

var fruits = ["Apples", 24, true ]
document.write(fruits [2]);

document.write("<br><br>");

var fruits = ["Apples", 24, true ]
fruits.push("Melow", "Oranges");
document.write(fruits [3]);

document.write("<br><br>");

fruits.sort();
document.write(fruits);

document.write("<br><br>");

fruits.reverse();
document.write(fruits);

document.write("<br><br>");

document.write(fruits.length);

document.write("<br><br>");

document.write(fruits.length -2);

document.write("<br><br>");

var fruits = ["Apples", 24, true ]
fruits.push("Melow", "Oranges");
document.write(fruits);

document.write("<br><br>");

fruits[0] = "Bananas"
document.write(fruits);

document.write("<br><br>")

fruits.splice(2, 1)
document.write(fruits);

document.write("<br><br>")

var fruits = "Apples, Bananas, 24, Oranges, Peaches"
fruits = fruits.split(",")
document.write(fruits);
document.write("<br><br>")
document.write(fruits[1]);