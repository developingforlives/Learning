let theName = "Carlos";
switch (theName) {
   case "Matheus":
      console.log("Matheus is a really cool name, I Love It!");
      break;
   case "Murillo":
      console.log("Murillo is a really cool name, I Love It!");
      break;
   case "Carlos":
      console.log("Carlos is my name and I Love it!")
      break;
   default:
      console.log("Interesting name you have there.");
}

let coolName = "Carlos";
switch (coolName) {
   case "Carlos": // fall through
   case "Carlão": // fall through
   case "Carlitos":
      console.log("Any version of Carlos is a cool name.");
      break;
   default:
      console.log("I have not heard that name before.");
}

let num1 = 17;
switch (true) {
   case (num1 < 20):
      console.log("The number is less than 20.");
      break;
   case ((num1 >= 20) && (num1 <= 100)):
      console.log("The number is somewhere between 20 and 100.");
      break;
   default:
      console.log("The number is negative or more than 100.");
}

let myNum = 1;
let myMessage = "";
if (myNum === 1) {
   myMessage = "You win!";
   console.log(myMessage);
}
else {
   myMessage = "Sorry! Try again!";
   console.log(myMessage);
}

let myNum2 = 1, myMessage2 = "";
myMessage2 = (myNum2 === 1) ? "You win!" : "Sorry! Try Again!";
console.log(myMessage2);


/*let userName = prompt("Give me your name!");
if ((userName === null) || (userName === "")) {
   console.log("Hello, Random Nameless Person!");
}
else {
   console.log("Hello, " + userName + "!");
}*/

/*let msg = "";
let city = prompt("What is the name of your city?");
if ((city === null || city === "")) {
   msg = "No city entered Cannot determine delivery availability";
} else {
   switch (city) {
      case "Limeira":
         msg = "We can have items delivered to you in 3 days.";
         break;
      case "Piracicaba":
         msg = "We can have items delivered to you in 1 week.";
      case "Americana": //fall through
      case "Campinas":
         msg = "We can have items delivered to you in 2 weeks.";
         break;
      default:
         msg = "Sorry! We do not deliver to your city yet.";
         break;
   }
}
document.write(msg);*/

/*
let vehicle = "";
let monthly = parseFloat(prompt("Enter how much per month can you pay to buy a car:\nWill be 60 months :)"));
let numberOfMonths = 60;
let total = monthly * numberOfMonths;

if ((monthly === null) || (monthly === "") || (monthly == 0)) {
   vehicle = "Do you have any money, POOR?";
   total = "none, 0";
} else {
   switch (true) {
      case ((monthly > 0) && (monthly <= 100)):
         vehicle = "You can buy a bike and get fit, FAT!";
         break;
      case ((monthly > 100) && (monthly <= 200)):
         vehicle = "You can buy a motorcicle and broke all your bones, Fuck!";
         break;
      case ((monthly > 200) && (monthly <= 300)):
         vehicle = "You can buy a 1.0 car and Eat Dust!";
         break;
      case ((monthly > 300) && (monthly <= 400)):
         vehicle = "You can buy a good car, Good Fella!";
         break;
      case ((monthly > 400) && (monthly <= 500)):
         vehicle = "You can buy a better car, Hmmmm Very Nice!";
         break;
      case (monthly > 500):
         vehicle = "You can buy almost any car, not HOT cars!";
         break;
      default:
         vehicle = "Sorry, but you did enter any valid and positive number MTF, type again a positive number AssHole. Do you know what is a positive number? Don't you???";
   }
}
document.write(vehicle + "<br><br>");
document.write("So, you can spend: " + total + "€");
*/

let vehicle = "";
let monthly = parseFloat(prompt("Enter how much per month can you pay to buy a car:\nWill be 60 months :)"));
let numberOfMonths = 60;
let total = monthly * numberOfMonths;

switch (true) {
   case (monthly === 0):
      vehicle = "Do you have any money, POOR?";
      total = "none, 0";
      break;
   case ((monthly > 0) && (monthly <= 100)):
      vehicle = "You can buy a bike and get fit, FAT!";
      total = total.toFixed(2)
      break;
   case ((monthly > 100) && (monthly <= 200)):
      vehicle = "You can buy a motorcicle and broke all your bones, Fuck!";
      total = total.toFixed(2)
      break;
   case ((monthly > 200) && (monthly <= 300)):
      vehicle = "You can buy a 1.0 car and Eat Dust!";
      total = total.toFixed(2)
      break;
   case ((monthly > 300) && (monthly <= 400)):
      vehicle = "You can buy a good car, Good Fella!";
      total = total.toFixed(2)
      break;
   case ((monthly > 400) && (monthly <= 500)):
      vehicle = "You can buy a better car, Hmmmm Very Nice!";
      total = total.toFixed(2)
      break;
   case (monthly > 500):
      vehicle = "You can buy almost any car, not HOT cars!";
      total = total.toFixed(2)
      break;
   default:
      vehicle = "Sorry, but you did enter any valid and positive number MTF, type again a positive number AssHole. Do you know what is a positive number? Don't you???";
      total = "none, 0";
}

document.write(vehicle + "<br><br>");
document.write("So, you can spend: " + total + "€");

//Muito engraçado
/*let r = confirm("Você é Viado ou Não?");
console.log(r);

if (r === true) {
   alert("Viadão!!!");
} else {
   alert("Além de Viado é mentiroso!")
}*/