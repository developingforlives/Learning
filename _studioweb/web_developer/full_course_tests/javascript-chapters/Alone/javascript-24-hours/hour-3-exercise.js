function calculator() {
   let num1 = parseFloat(document.querySelector("#num1").value);
   let num2 = parseFloat(document.querySelector("#num2").value);
   let operator = document.querySelector("#operator").value;
   let calculate;

   if (operator == "add") {
      calculate = num1 + num2;
   } else if (operator == "min") {
      calculate = num1 - num2;
   } else if (operator == "mul") {
      calculate = num1 * num2;
   } else if (operator == "div") {
      calculate = num1 / num2;
   }
   document.querySelector("#result").innerHTML = calculate;
}