/*function carCost(myCar, payCheck) {
   alert("You have a " + myCar + " and make " + payCheck + ".")
}

function getAddedText() {
   let textPart1 = "This is ";
   let textPart2 = "fun!";
   let addedText = textPart1 + textPart2;
   return addedText;
}

carCost("Mustand", 1500)

let alertText = getAddedText();
alert(alertText);*/


//SCOPE
/*let myname = "John"; //this is a global variable 
function say_name() {
   let mydog = "Joey"; //this is a local variable
   window.alert(myname + " has a dog named " + mydog);
}
say_name();*/

// window.alert(myname); This alert will work as expected, using a global variable and the function’s local variable

//window.alert(mydog); This alert causes an error, because mydog cannot be accessed in the global context.

// A GLOBAL VARIABLE/FUNCTION IS USABLE IN ANYWHERE IN THE CODE AFTER IT IS DEFINED.

// A LOCAL VARIABLE/FUNCTION CREATED INSIDE OF A FUNCTION CANNOT BE USED ANYWHERE OUTSIDE OF THIS

/*let myname = "John";
function say_name() {
   let mydog = "Joey";
   function say_food() {
      let myfood = "Pizza";
      window.alert(myname + " and " + mydog + " like " + myfood);
   }
   window.alert(myname + " has a dog named " + mydog);
   say_food();
}
say_name();

Each context from the example (above) and the variables/functions the context can use are shown here:

Global Context:
myname
say_name()

say_name() Context:
my_name (from global)
mydog
say_food()

say_food() Context:
myname (from global)
mydog (from say_name())
myfood

Notice that myname can be used in all three contexts, mydog can be used in two (say_name() and say_food() contexts), and myfood can be used only in one (the say_food() context).*/


function display_HTML() {
   myHeading = "<h1>Hello, World!</h1>";
   myText = "<p>While it is nice to know you world, there are only some things that I am comfortable sharing in a global context. You can’t alter the variable that holds this text outside of the function that contains it! Ha!</p>"
   document.write(myHeading + myText);
}
display_HTML();