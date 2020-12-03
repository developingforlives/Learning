/*var saveTravel = window.prompt("How much money did you save to travel to Disney?");

if (saveTravel >= 10000) {
   document.write("Congratulations, you can travel. Let's go!!!");
} else {
   document.write("Unfortunately, you will need to save more money!")
}*/


/*currentYear = window.prompt("Inform the Current Year:");
birth = window.prompt("What year you was born?");
age = (currentYear - birth);
document.write("In " + currentYear + ", you will be " + age + " years old.");

document.write("<br><br>");

if (age >= 21) {
   document.write("You've reached adulthood!");
} else if (age >= 16 && age <= 20) {
   document.write("You are between 16 and 20 years old!");
} else {
   document.write("You are still a baby!");
}*/


/*var num = window.prompt("Insert a number to check if it is even or odd:");

var result = (num % 2);

document.write(result + "<br><br>");

if (result == 0) {
   document.write("The number " + num + " is EVEN.");
} else {
   document.write("The number " + num + " is ODD.");
}*/

/*var num = window.prompt("Insert a number to check if it is even or odd:");

if (num % 2 == 0) {
   document.write("The number " + num + " is EVEN.");
} else {
   document.write("The number " + num + " is ODD.");
}*/


//BMI - Body Mass Index
/*weight = window.prompt("What is your weight (Kg)?");

height = window.prompt("How tall are you (m)?");

result = (weight / Math.pow(height, 2)).toFixed(2);

if (result < 18.5) {
   document.write("Your BMI is = " + result + ", you are UNDERWEIGHT!");
} else if (result >= 18.5 && result <= 24.9) {
   document.write("Your BMI is = " + result + ", you are Normal Weight.");
} else if (result >= 25 && result <= 29.9) {
   document.write("Your BMI is = " + result + ", you are Overweight.");
} else if (result >= 30 && result <= 34.9) {
   document.write("Your BMI is = " + result + ", you are Obesity Class I!.");
} else if (result >= 35 && result <= 39.9) {
   document.write("Your BMI is = " + result + ", you are Obesity Class II!!.");
} else {
   document.write("Your BMI is = " + result + ", you are Obesity Class III!!!.");
}*/


//Driver License Check

function elegibility() {

   var currentYear = document.getElementById("current").value;

   var birthYear = document.getElementById("birth").value;

   var result = document.getElementById("btn");

   result = currentYear - birthYear;

   if (result < 18) {
      document.getElementById("result").innerHTML = "You are " + result + " year old.<br>You are still a Baby!";
   } else {
      document.getElementById("result").innerHTML = "You are " + result + " year old.<br>Congratulations! You can drive.";
   }
}


/*function computeLoan() {
   var amount = document.getElementById("amount").value;
   var interestRate = document.getElementById("interest-rate").value;
   var months = document.getElementById("months").value;
   var interest = (amount * (interestRate * .01)) / months;
   var payment = ((amount / months) + interest).toFixed(2);
   payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
   document.getElementById("payment").innerHTML = "Monthly Payment = $" + payment;
}*/















