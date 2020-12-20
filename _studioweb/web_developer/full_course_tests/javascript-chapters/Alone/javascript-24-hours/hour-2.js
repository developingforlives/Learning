let donaCasa = "Vagabunda"

console.log(donaCasa);

let product = 4;
product++; //is just the same as: product = product + 1;
console.log(product);

let products = 4;
products+=8; //is just the same as: product = product + 1;
console.log(products);

let product2 = 9;
product2--;
console.log(product2);

let products2 = 9;
products2-=3;
console.log(products2);

let price = 100;
let uplift = 1.25;
let total = price *= uplift; //price = price * uplift;
console.log(total);

let product3 = 8;
product3 = product3 / 2;
console.log(product3);

let product4 = 8;
product4 = product4 * 2;
console.log(product4);

let reminder1 = 40;
let reminder2 = 12;
let result = reminder1 % reminder2; //reminder1 / reminder2 = 3, so the reminder is 4.
console.log(result);

let a = 3;
let b = 4;
let c = 5;
var average = (a + b + c) / 2;
console.log(average);

/*var cTemp = 25; // temperature in Celsius
// Let's be generous with parentheses
var hTemp = ((cTemp * 9) / 5 ) + 32;
console.log(hTemp);*/

var cTemp = 25; // temperature in Celsius
// Let's be generous with parentheses
var hTemp = ((cTemp * 9) / 5 ) + 32;
document.write("Temperature in Celsius: " + cTemp + " degrees<br/>");
document.write("Temperature in Fahrenheit: " + hTemp + " degrees");