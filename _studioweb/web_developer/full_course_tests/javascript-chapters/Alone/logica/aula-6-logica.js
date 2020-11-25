/*var currentYear = window.prompt("What year are we?");

var age = window.prompt("How old are you?");

var yearBirth = (currentYear - age);

document.write("<h1 style='color:red'>You was born in " + yearBirth + " !</h1>");*/


/*var real = window.prompt("How many reais do you have?");

var dollarRate = window.prompt("What is the Dollar rate today?");

dollarQuantity = (real / dollarRate);

document.write("<h1 style='color:red'>You will have US$ " + dollarQuantity + "</h1>");*/


/*var degreesFahrenheit = window.prompt("How many Fahrenheit degrees are you seeing?");

var degreesCelsius = ((degreesFahrenheit - 32) / 1.8);

alert("You have at moment " + degreesCelsius.toFixed(1) + " there.");*/


/*var price = window.prompt("How much have you paid for this stuff?");

var tax = (price * .6);

//var tax = ((price / 100) * 60);
//var tax = ((price * 60) / 100);

alert("The tax for this product will be of US$ " + tax);*/


/*var loanValueRequested = window.prompt("Insert the Loan Value:");

var loanNumberOfInstallments = window.prompt("Insert the Number of Months:");

var loanInterestByYear = 20 //(50 / 100) * 40;
console.log("The Year Interested is = " + loanInterestByYear + "%");

var loanInterestByMonth = (loanInterestByYear / 12);
console.log("The Month Interest is = " + loanInterestByMonth.toFixed(2));

var loanTotal = (loanValueRequested * (loanInterestByYear / 200) * 12);
console.log("The Total Loan is = " + loanTotal);

loanValueMensalInstallments = (loanTotal / loanNumberOfInstallments);
console.log("The Mensal Installments is = " + loanValueMensalInstallments);

var interestMonth = 1.0167

var loanWithoutInterest = (loanValueRequested / loanNumberOfInstallments);
console.log(loanWithoutInterest);

var loanStartValue = ((loanValueRequested / loanNumberOfInstallments) * interestMonth);
console.log(loanStartValue.toFixed(2));*/

function computeLoan() {
   var amount = document.getElementById("amount").value;
   var interestRate = document.getElementById("interest-rate").value;
   var months = document.getElementById("months").value;
   var interest = (amount * (interestRate * .01)) / months;
   var payment = ((amount / months) + interest).toFixed(2);
   payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
   document.getElementById("payment").innerHTML = "Monthly Payment = $" + payment;
}
