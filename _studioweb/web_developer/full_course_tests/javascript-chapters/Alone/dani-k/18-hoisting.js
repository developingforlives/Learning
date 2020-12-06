//Hoisting allocated memory for the variables, therefore, this can cause the page be slower.
//Hoisting means, allocated all variable at the top.
var a = "First";
var b = "Second";
var c = "Third";

document.write(a + " " + b + " " + c);

console.log(d)

var d;

var e;

console.log(e);

e = "Fourth";

//Named Function - also are hoisted in the top, having said, this can cause the page be slower.
function example() {
   var f = 10;
   return f;
}

console.log(example());

//
console.log(example2());

function example2() {
   var g = 35;
   return g;
}


//Anonymous Functions - do not allocate memory until the variable be called

var h = function() {
   var h = 66;
   return h;
}

console.log(h());


//In the example below, you will get a message error because the in the Anonymous Functions the order of the code matter to them to be called 
console.log(i());

var i = function() {
   var i = 66;
   return i;
}

