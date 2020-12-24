console.log(isFinite(21)); // true
console.log(isFinite("This is not a numeric value")); // false
console.log(isFinite(Math.sqrt(-1))); // false

let message = "IMPORTANT MESSAGE:\n\nError etected!\nPlease check your data";
//alert(message);

let name = "Carlos Salvador";
console.log(name);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.split(""));
console.log(name.split(" "));
console.log(name.indexOf("C"));
console.log(name.lastIndexOf("o"));

let string1 = "The quick brown fox ";
console.log(string1.indexOf('fox')); // returns 16
console.log(string1.indexOf('dog')); // returns -1 because did not find any occuerence

let teste = "Rola";
result = teste.indexOf("R");
document.write(result + "<br><br>");
if (result == -1) {
   document.write("did not find <br><br>");
} else {
   document.write("you found <br><br>");
}

let string3 = "The quick brown fox ";
console.log(string3);
let string4 = string3.replace("brown", "orange"); // string2 is now "the quick orange fox"
console.log(string4);

let string5 = "The quick brown fox ";
let newArray = string5.split(" ")
console.log(newArray);

let string6 = "The quick brown fox ";
let sub1 = string6.substr(4, 11); // extracts "quick brown"
console.log(sub1);
let sub2 = string6.substr(4); // extracts "quick brown fox"
console.log(sub2);

/*let answer = confirm("Do you want to continue?"); // answer will contain true or false
console.log(answer);
alert(answer * 1); // will display either 0 or 1*/

/*function detectSpam(input) {
   input = input.toLowerCase();
   return input.indexOf("fake");
}
let mystring = prompt("Enter a string");
alert(detectSpam(mystring));*/

//JavaScript interprets the ! character, when placed before a Boolean variable, as “not,” that is, “the opposite value.”
/*let success = false;
alert(!success); // alerts 'true'*/

function capitalizeF(capitalFirstLetter) {
   capitalFirstLetter = capitalFirstLetter.toUpperCase();
   return capitalFirstLetter;
}
let phrase = prompt("Type a phrase!");
alert(capitalizeF(phrase));