//The Object Constructor
/*
let car = new Object();
car.seats = "cloth";
car.engine = "V-6";
car.showFeatures = function () {
   document.write("Car (object): <br>" + " seats: " + car.seats + "<br> engine: " + car.engine);
};
car.showFeatures();
*/

/*
let car2 = new Object();
car2.seats = "leather";
car2.engine = "V-8";
function myAlert2() {
   document.write("Car2 (object): <br>" + " seats: " + car2.seats + "<br> engine: " + car2.engine);
}
car2.showFeatures2 = myAlert2;
car2.showFeatures2();
*/


//The Object Literal Notation
//You can have as many property-value pairs as needed; just be sure to separate each one with a comma. The last property-value pair does not have a comma afterward. Notice also that each property name is followed by a colon to separate it from its value.
//Note: for the last item, is not used any pontuation, but you can use the comma (,) to look better :) 
let car = {
   seats: "cloth",
   engine: "V-6",
   showFeatures: function () {
      document.write("Car (object): <br>" + " seats: " + car.seats + "<br> engine: " + car.engine);
   }
}
car.showFeatures();


//Accessing Property Values (there are 2 ways)
document.write("<br><br>" + car.seats); //Dot Notation is used most often
document.write("<br><br>" + car["seats"]); //Bracket Notation

document.write("<br><br>");

let car2 = {
   seats2: "cloth",
   engine2: "V-6",
};
let s2 = "seats2";
let start2 = "sea";
document.write(car2["seats2"] + "<br>");
document.write(car2["sea" + "ts2"] + "<br>");
document.write(car2[s2] + "<br>");
document.write(car2[start2 + "ts2"] + "<br>");

let car3 = {
   seats3: "cloth",
   engine3: "V-6",
};
let s3 = "seats3";
function showSeatType3(sts) {
   document.write(car3.sts + "<br>"); // undefined
}
showSeatType3(s3);

let car4 = {
   seats4: "cloth",
   engine4: "V-6",
};
let s4 = "seats4";
function showSeatType4(sts) {
   document.write(car4[sts] + "<br>"); // works
}
showSeatType4(s4);

document.write("<h2 style='color:blue'><br>Exercise<br></h2>")

let computer0 = {
   speed0: "4GHZ",
   hd0: "500GB",
   ram0: "8GB",
};
function showComputerFeature0() {
   document.write("Computer Speed: " + computer0.speed0 + "<br>");
   document.write("Computer Hard Disk: " + computer0.hd0 + "<br>");
   document.write("Computer RAM: " + computer0.ram0 + "<br><br>");
}
showComputerFeature0();


let computer = {
   speed: "4GHZ",
   hd: "500GB",
   ram: "8GB",
   showComputerFeature: function () {
      document.write("Computer Speed: " + computer.speed + "<br>");
      document.write("Computer Hard Disk: " + computer.hd + "<br>");
      document.write("Computer RAM: " + computer.ram + "<br><br>");
   }
}
computer.showComputerFeature();


/*
let car = {
   brand: "SEAT",
   model: "Toledo",
   subModel: "Advance",
   color: "Silver",
   engine: "1.6 TDI",
   showCarInformation: function () {
      document.write("Car brand: " + car.brand + "<br>");
      document.write("Car model: " + car.model + "<br>");
      document.write("Car subModel: " + car.subModel + "<br>");
      document.write("Car color: " + car.color + "<br>");
      document.write("Car engine: " + car.engine + "<br>");
   }
}
car.showCarInformation();

document.write("<br>" + car.brand + "<br>");
document.write(car.model.length + "<br>");
*/
