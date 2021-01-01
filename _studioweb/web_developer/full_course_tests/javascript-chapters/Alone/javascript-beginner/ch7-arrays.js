/*let names = new Array("Carlos", "Matheus", "Murillo");
console.log(names.length);
console.log(names);*/

/*let answers = [42, "paper", -3, "plastic"];
let is_true = [true, false];
let nums = [4, 20, 19, 2, 2, 10056, -42, 3];*/

/*let names = ["Carlos", "Matheus", "Murillo", "Bruno", "Giusepe", "Gomes"];
document.write("<p>Names:</p>");
for (let i = 0; i < names.length; i++) {
   document.write(i + " - ");
   document.write(names[i] + "<br>");
}

document.write("<br>")

NEW WAY
names.forEach(function (names) {
   document.write(names + "<br>");
});

document.write("<br>")

names.forEach(function (names, index) {
   document.write("index: " + index + " - " + names + "<br>");
});

document.write("<br>")

names.forEach((names, index, array) => {
   console.log(array);
});

document.write("<br>")

names.forEach((names, index) => {
   document.write("index: " + index + " - " + names + "<br>");
});
*/

/*
let names = ["Carlos", "Matheus", "Murillo", "Bruno", "Giusepe", "Gomes"];
console.log(names);
names[4] = "Max";
console.log(names);

let students = ["Thomas", "Roger", "Amber", "Jennifer"];
for (let i = 0; i < students.length; i++) {
students[i] += " Doe";
console.log(students[i]);
}
console.log(students);

let students2 = ["Thomas", "Roger", "Amber", "Jennifer"];
students2.length = 2;
console.log(students2);

let students3 = ["Thomas", "Roger", "Amber", "Jennifer"];
students3.length = 8;
console.log(students3);   

let students4 = ["Thomas", "Roger", "Amber", "Jennifer"];
students4[5] = "Martin";
console.log(students4);

console.log("-------");

let students5 = ["Thomas", "Roger", "Amber", "Jennifer"];
students5[students5.length] = "Pat";
console.log(students5);
*/


//EXERCISE

let computerParts = ["Monitors", "Motherboards", "Chips", "Hard-Drives", "DVD-Rows", "Cases", "Power Supplies"];

document.write("<p>Computer Parts</p>")
for (i = 0; i < computerParts.length; i++) {
   document.write("index: " + i + " - " + computerParts[i] + "<br>");
}
console.log(computerParts.length);









