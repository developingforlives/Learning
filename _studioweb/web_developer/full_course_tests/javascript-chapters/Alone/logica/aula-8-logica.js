function salaryCalc () {

   var name = document.getElementById("name").value;
   console.log(name);

   var currentSalary = document.getElementById("currentSalary").value;
   console.log(currentSalary);

   var dependents = document.getElementById("dependents").value;
   console.log(dependents);

   newSalary = document.getElementById("btn");

   //BUGADO
   switch (dependents) {

      case 0:
         dependents = currentSalary * 1.05;
         document.getElementById("newSalary").innerHTML = "ta feliz" + depsendents; 
         console.log(dependents);
         break;
         case 1:
            dependents = currentSalary * 1.5;
            document.getElementById("newSalary").innerHTML = "ta feliz" + depsendents; 
            console.log(dependents);
            break;
   }


   /*if (dependents == 0) {
      newSalary = currentSalary * 1.05;
      document.getElementById("newSalary").innerHTML = "ta feliz" + newSalary; 
      console.log(newSalary);
   } else {
      newSalary = currentSalary;
      document.getElementById("newSalary").innerHTML = "se fudeu" + newSalary; 
      console.log(newSalary);
   }*/



   /*switch (dependents) {
      case 0:
         newSalary = currentSalary + (currentSalary * 5/100);
         document.getElementById("result").innerHTML = "Hi " + name + " you have " + dependents + "dependents, then you are getting a salary of: €" + newSalary + ".<br>";
         break;
   }*/
   

   










}
