var x = 10;
var y = 50;

if (x < y) {
   console.log("it is true");
} else {
   console.log("it is false");
}

if (x == 10 && y == 50) {
   console.log("it is true");
} else {
   console.log("it is false");
}

if (x == 10 && y == 40) {
   console.log("it is true");
} else {
   console.log("it is false");
}

if (x == 10 || y == 40) {
   console.log("it is true");
} else {
   console.log("it is false");
}

if (x == 20 || y == 40) {
   console.log("it is true");
} else {
   console.log("it is false");
}

if (x != 10 || y == 50) {
   console.log("it is true");
} else {
   console.log("it is false");
}

if (x <= 10 && y < 50) {
   console.log("if");
} else if (x > 20 || y > 40) {
   console.log("else If")
} else {
   console.log("else");
}


/*var gender = "Female";
var age = 16;
var polite = true;

if (gender == "Male") {
   if (age >= 18) {
      if (polite == true) {
         document.write("You are a " + gender + " and above the age limit!");
      } else {
         document.write("Sorry dude!");
      }
   }
} else if (gender == "Female") {
   if (age >= 18) {
      if (polite == true) {
         document.write("You are a " + gender + " and above the age limit!");
      }
   }
   else {
      document.write("Sorry lady!");
   }
} else {
   document.write("Can't figure out your gender!");
}*/


var gender = "Male";
var age = 18;
var polite = true;

if (gender == "Male") {
   if (age == 18) {
      if (polite == true) {
         polite = "you are polite"
         document.write("You are a " + gender + " and above the age limit and " + polite + ", Welcome!");
      } else {
         polite = "you are NOT polite"
         document.write("You are a " + gender + " and above the age limit and, but " + polite + ", them you are not allowed to enter!");
      }
   }
   else {
      document.write("Sorry dude!");
   }
} else if (gender == "Female") {
   if (age >= 18) {
      if (polite == true) {
         polite = "you are polite"
         document.write("You are a " + gender + " and above the age limit and " + polite + ", Welcome!");
      } else {
         polite = "you are NOT polite"
         document.write("You are a " + gender + " and above the age limit and, but " + polite + ", them you are not allowed to enter!");
      }
   }
   else {
      document.write("Sorry lady!");
   }
} else {
   document.write("Can't figure out your gender!");
}