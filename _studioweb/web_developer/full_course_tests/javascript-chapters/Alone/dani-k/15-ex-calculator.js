function calc() {
   var number1 = parseFloat(document.querySelector("#value1").value);
   var number2 = parseFloat(document.querySelector("#value2").value);
   var op = document.querySelector("#operator").value;
   var calculate;

   if (op == "add") {
      calculate = number1 + number2;
   } else if (op == "min") {
      calculate = number1 - number2;
   } else if (op == "div") {
      calculate = number1 / number2;
   } else if (op == "mul") { 
      calculate = number1 * number2;
   }
   document.querySelector("#result").innerHTML = calculate;
}


function calc2() {
   var number1 = parseFloat(document.querySelector(".value1").value);
   var number2 = parseFloat(document.querySelector(".value2").value);
   var op = document.querySelector(".operator").value;
   var calculate;

   if (op == "add") {
      calculate = number1 + number2;
   } else if (op == "min") {
      calculate = number1 - number2;
   } else if (op == "div") {
      calculate = number1 / number2;
   } else if (op == "mul") { 
      calculate = number1 * number2;
   }
   document.querySelector(".result").innerHTML = calculate;
}


function calc3() {
   var number1 = parseFloat(document.getElementById("value1e").value);
   var number2 = parseFloat(document.getElementById("value2e").value);
   var op = document.getElementById("operatore").value;
   var calculate;

   if (op == "add") {
      calculate = number1 + number2;
   } else if (op == "min") {
      calculate = number1 - number2;
   } else if (op == "div") {
      calculate = number1 / number2;
   } else if (op == "mul") { 
      calculate = number1 * number2;
   }
   document.getElementById("resulte").innerHTML = calculate;
}