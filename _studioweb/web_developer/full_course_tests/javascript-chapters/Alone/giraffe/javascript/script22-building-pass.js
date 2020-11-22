/*var password = "rola";
var response;
var entryCount = 0;
var entryLimit = 3;
var error = false;

while (response != [password] && !error) {
   if (entryCount < entryLimit) {
      response = window.prompt("Enter your Password");
      entryCount++;
   } else {
      error = true;
   }
}
if (error) {
   alert("Too many entries");
} else {
   alert("You got it Dude!");
}*/


/*var password = "rola";
var response;
var entryCount = 0;
var entryLimit = 3;
var error = false;

while (response != password && !error) {
   if (entryCount < entryLimit) {
      response = window.prompt("Enter your Password");
      entryCount++;
      console.log(entryCount);
   } else {
      console.log("rola");
      error = true;
   }
}

//this line below is the same as: error == true
if (error) {
   alert("Too many times");
//this line below is the same as: error != true or == false
} else {
   alert("You got it Dude!");
}*/


var password = "rola";
var response;
var entryCount = 0;
var entryLimit = 3;
var error = false;

while (response != password && !error) {
   if (entryCount < entryLimit) {
      response = window.prompt("Enter your Password");
      entryCount++;
      console.log(entryCount);
   } else {
      console.log("rola");
      error = true;
   }
}

if (error) {
   alert("Too many times");
} else {
   alert("You got it Dude!");
}