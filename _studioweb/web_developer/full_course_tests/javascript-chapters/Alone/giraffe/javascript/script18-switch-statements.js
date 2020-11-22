function getDayName(dayNum) {

   var day; 

   switch (dayNum) {
      case 0: 
         day = "Sunday";
         break;
      case 1: 
         day = "Monday";
         break;   
      case 2: 
         day = "Tuesday";
         break;
      case 3: 
         day = "Wednesday";
         break;   
      case 4: 
         day = "Thrusday";
         break;
      case 5: 
         day = "Friday";
         break;   
      case 6: 
         day = "Saturday";
         break;
      case 30299304930:
         day = "OI!!!";
         break;
      
      default:
         day = "Day does not exist " + dayNum + " is not a valid number!";   
   }

   return day;

}

   document.write(getDayName(30299304930));