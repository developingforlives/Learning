let myNum1 = 12.55;
let myNum2 = 12.45;
console.log(Math.floor(myNum1)); // shows 12
console.log(Math.ceil(myNum1)); // shows 13
console.log(Math.round(myNum1)); // shows 13
console.log(Math.round(myNum2)); // shows 12

let ageDavid = 23;
let ageMary = 27;
let ageChris = 31;
let ageSandy = 19;
document.write("The youngest person is " + Math.min(ageDavid, ageMary, ageChris, ageSandy) + " years old<br><br>");
document.write("The oldest person is " + Math.max(ageDavid, ageMary, ageChris, ageSandy) + " years old<br><br>");

let n1 = 39;
let n2 = 948;
let n3 = 2;
let n4 = 1029;
document.write("The smaller number is: " + Math.min(n1, n2, n3, n4) + ".<br><br>");
document.write("The smaller number is: " + Math.max(n1, n2, n3, n4) + ".<br><br>");

function myRand(range) {
   return Math.round(Math.random() * range);
}
document.write((myRand(100)) + "<br><br>");

let myNum = 24.77;
document.write((Math.floor(myNum)) + "<br><br>");
document.write((Math.ceil(myNum)) + "<br><br>");

//let area = Math.PI * radius * radius; // area of circle
//let circumference = 2 * Math.PI * radius; // circumference

with (Math) {
   let myRand = random();
   console.log(myRand);
   let biggest = max(3,4,5);
   console.log(biggest);
   let height = round(76.35);
   console.log(height);
}

