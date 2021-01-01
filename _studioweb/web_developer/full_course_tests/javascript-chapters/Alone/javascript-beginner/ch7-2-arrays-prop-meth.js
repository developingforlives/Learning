//join() Method (used to combine the items of an array into a single string)
let fruits = ["oranges", "apples", "pears"];
document.write(fruits + "<br><br>");
let fruit_string = fruits.join(" - ");
document.write(fruit_string + "<br><br>");


//pop() Method (used to remove the last item from an array)
let fruits2 = ["oranges", "apples", "pears"];
document.write(fruits2 + "<br><br>");
fruits2.pop();
document.write(fruits2 + "<br><br>");

let fruits3= ["oranges", "apples", "pears"];
let picked_fruit3 = fruits3.pop();
document.write("You picked my " + picked_fruit3 + "<br><br>");


//push() Method (used to add items to the end of an array)
let fruits4 = ["oranges", "apples", "pears"];
document.write(fruits4 + "<br><br>");
fruits4.push("Banana");
document.write(fruits4 + "<br><br>");
fruits4.push("Pineapple", "Melow");
document.write(fruits4 + "<br><br>");

let fruits5 = ["oranges", "apples"];
let newLength = fruits5.push("pears", "grapes");
document.write("The array now has: " + newLength + " items <br><br>");

let fruits6 = ["oranges", "apples"];
document.write("The arrays currently has: " + fruits6.length + " items <br><br>");
let newLength6 = fruits6.push("pears", "grapes");
document.write("The array now has: " + newLength6 + " items <br><br>");


//shift() Method (used to remove the first item of an array)


