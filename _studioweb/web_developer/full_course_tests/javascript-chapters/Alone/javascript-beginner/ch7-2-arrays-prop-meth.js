//join() Method (used to combine the items of an array into a single string)
/*document.write("- The join() Method ***<br><br>");
let fruits = ["oranges", "apples", "pears"];
document.write(fruits + "<br><br>");
let fruit_string = fruits.join(" - ");
document.write(fruit_string + "<br><br>");


//pop() Method (used to remove the last item from an array)
document.write("- The pop() Method ***<br><br>");
let fruits2 = ["oranges", "apples", "pears"];
document.write(fruits2 + "<br><br>");
fruits2.pop();
document.write(fruits2 + "<br><br>");

let fruits3 = ["oranges", "apples", "pears"];
document.write(fruits3 + "<br><br>");
let pickedFruit3 = fruits3.pop();
document.write("You picked my " + pickedFruit3 + "<br><br>");


//push() Method (used to add items to the end of an array)
document.write("- The push() Method ***<br><br>");
let fruits4 = ["oranges", "apples", "pears"];
document.write(fruits4 + "<br><br>");
fruits4.push("Banana");
document.write(fruits4 + "<br><br>");
fruits4.push("Pineapple", "Melow");
document.write(fruits4 + "<br><br>");

let fruits5 = ["oranges", "apples"];
let newLength = fruits5.push("pears", "grapes");
document.write("The array now has: " + newLength + " items <br><br>");

let fruits6 = ["oranges", "apples"];
document.write("The arrays currently has: " + fruits6.length + " items <br><br>");
let newLength6 = fruits6.push("pears", "grapes");
document.write("The array now has: " + newLength6 + " items <br><br>");


//shift() Method (used to remove the first item of an array)
document.write("- The shift() Method ***<br><br>");
let fruits7 = ["oranges", "apples", "pears"];
fruits7.shift();
document.write(fruits7 + "<br><br>");

let fruits8 = ["oranges", "apples", "pears"];
document.write(fruits8 + "<br><br>");
let pickedFruit8 = fruits8.shift()
document.write(fruits8 + "<br><br>");
document.write("You picked my: " + pickedFruit8 + "<br><br>");
document.write(fruits8 + "<br><br>");


//unshift() Method (used to add items to the beginning of an array)
document.write("- The unshift() Method ***<br><br>");
let fruits9 = ["apples", "pears"];
document.write(fruits9 + "<br><br>");
fruits9.unshift("oranges");
document.write(fruits9 + "<br><br>");
let insertedFruits9 = fruits9.unshift("grapes", "bananas")
document.write(insertedFruits9 + "<br><br>");//? Why this show the number of items, instead of the name of 2 items added?
document.write(fruits9 + "<br><br>");
document.write(fruits9.length + "<br><br>");


//reverse() Method (used to reverse the order of the items in an array) 
document.write("- The reverse() Method ***<br><br>");
let fruits10 = ["oranges", "apples", "pears", "bananas"];
fruits10.reverse();
document.write(fruits10 + "<br><br>");


//sort() Method (converts each array item into a string value, and then arranges the items in ascending order based on the string values)
document.write("- The sort() Method ***<br><br>");
let fruits11 = ["oranges", "grapes", "apples", "pears", "bananas"];
fruits11.sort();
document.write(fruits11 + "<br><br>");

//Note: if there is a difference in capitalization, this can cause an unexpected order to be returned:
let fruits12 = ["oranges", "apples", "pears", "Grapes"];
fruits12.sort();
document.write(fruits12 + "<br><br>");

//Note_2: To fix this, you can use a method for strings named toLowerCase() to ensure all values are compared in lowercase and return in the order expected after the sort:
let fruits13 = ["oranges", "apples", "pears", "Grapes"];
for (let i = 0; i < fruits13.length; i++) {
   fruits13[i] = fruits13[i].toLowerCase();
}
fruits13.sort();
document.write(fruits13 + "<br><br>");

//This is another way that I found in the Internet
let fruits14 = ["oranges", "apples", "Bananas", "pears", "Grapes"];
document.write(fruits14 + "<br><br>");
let fruits14UpperCased = fruits14.map(fruits14 => fruits14.toUpperCase());
fruits14UpperCased.sort();
document.write(fruits14UpperCased + "<br><br>");

let fruits15 = [2, 3, 1, 20];
fruits15.sort();
document.write(fruits15 + "<br><br>");

function mysort(first_value, second_value) {
   if (first_value > second_value) {
      return 1;
   } else if (first_value < second_value) {
      return -1;
   } else {
      return 0;
   }
}

fruits15.sort(mysort);
document.write(fruits15 + "<br><br>");

fruits15.reverse(mysort);
document.write(fruits15 + "<br><br>");


//concat() Method (oncatenate the array with the arguments sent to it and return a new array containing all of the items. It does not affect the original array)
document.write("- The concat() Method ***<br><br>");
let fruits16 = ["oranges", "apples"];
let veggies16 = ["corn", "peas"];
let fruitsAndVeggies16 = fruits16.concat(veggies16);
document.write(fruitsAndVeggies16 + "<br><br>");

let veggiesAndFruits16 = veggies16.concat(fruits16);
document.write(veggiesAndFruits16 + "<br><br>");

let fruits18 = ["oranges", "apples"];
let veggies18 = ["corn", "peas"];
let breads18 = ["Italian", "French"];
let meats18 = ["chicken", "fish"];
let drinks18 = ["water", "juice"];
let fiveGroups = fruits18.concat(veggies18, breads18, meats18, drinks18);
document.write(fiveGroups + "<br><br>");
fiveGroupsString = fiveGroups.join(", ");
document.write(fiveGroupsString + "<br><br>");
//Note: you is that determinet the sequence that you want to add the arrays.
//Note_2: In addition to concatenating arrays, you can also concatenate strings, numbers, or other data types.
let fruits19 = ["oranges", "apples"];
let veggies19 = ["corn", "peas"];
let bigAarray19 = fruits19.concat(veggies19, "cat", 4, ["house","car"]);
document.write(bigAarray19 + "<br><br>");
//If you use concat() without any arguments, it will make a copy of the original array. So, the following code would simply give you a copy of the fruits array:
let fruits20 = ["oranges", "apples"];
let sameFruits20 = fruits20.concat();
document.write(sameFruits20 + "<br><br>");


//slice() Method (used to slice a specified section of an array and then to create a new array using the elements from the sliced section of the old array)
document.write("- The slice() Method ***<br><br>");
//arrayname.slice(start, stop);
let fruits21 = ["oranges", "apples", "pears", "grapes"];
document.write(fruits21 + "<br><br>");
let someFruits21NewArray = fruits21.slice(0); //This simply copy the array
document.write(someFruits21NewArray + "<br><br>");
//Note: If the second argument is not included, then the slice method will continue to the end of the array.
let someFruits21 = fruits21.slice(1,3);
document.write(someFruits21 + "<br><br>");
document.write(someFruits21.length + "<br><br>");


//splice() Method (The splice(begin, num_items, [add_item]) method allows you to remove or replace items in an array) 
document.write("- The splice() Method ***<br><br>");
let fruits22 = ["oranges", "apples", "pears", "grapes"];
let someFruits22 = fruits22.splice(2, 1);
document.write(someFruits22 + "<br><br>");

let fruits23 = ["oranges", "apples", "pears", "grapes"];
let someFruits23 = fruits23.splice(2, 2);
document.write(someFruits23 + "<br><br>");

let fruits24 = ["oranges", "apples", "pears", "grapes"];
let someFruits24 = fruits24.splice(2, 1, "watermelons");
document.write(someFruits24 + "<br><br>");
document.write(fruits24 + "<br><br>");

let fruits25 = ["oranges", "apples", "pears", "grapes"];
let someFruits25 = fruits25.splice(2, 0, "watermelons", "plums");
document.write(someFruits25 + "<br><br>");//I do not know is not showing nothing (let's move on...)
document.write(fruits25 + "<br><br>");


//indexOf() Method (searches the array from front to back)
//lastIndexOf() Method (searches from back to front)
document.write("- The indexOf([string]) and lastIndexOf([string]) methods were added in ECMAScript 5 and provide a way to search for an item in an array ***<br><br>");
let fruits26 = ["oranges", "apples", "pears", "apples"];
let foundApples26 = fruits26.indexOf("apples");
document.write(foundApples26 + "<br><br>");

foundApples26 = fruits26.lastIndexOf("apples");
document.write(foundApples26 + "<br><br>");

foundApples26 = fruits26.indexOf("grapes");
document.write(foundApples26 + "<br><br>");

let fruits27 = ["oranges", "apples", "pears", "apples"];
let foundApples27 = fruits27.indexOf("apples", 2);
document.write(foundApples27 + "<br><br>");
foundApples27 = fruits27.lastIndexOf("apples", 1);
document.write(foundApples27 + "<br><br>");

let nums = ["2", 5, 22, 3];
let foundFive = nums.lastIndexOf(5);
document.write(foundFive + "<br><br>");

let nums2 = ["2", 5, 22, 3];
let foundTwo2 = nums2.lastIndexOf("2");
document.write(foundTwo2 + "<br><br>");

let nums3 = ["2", 5, 22, 3];
let foundTwo3 = nums3.lastIndexOf(2);
document.write(foundTwo3 + "<br><br>");
//Note: this return -1 because 2 (numeric value) is diferent of "2" (string), in this case, these methods returns exactly the content

let word = "Paralelepipedo";
document.write(word.length + "<br><br>");
document.write(word.indexOf("P") + "<br><br>");
document.write(word.indexOf("p") + "<br><br>");
document.write(word.lastIndexOf("p") + "<br><br>");
*/


//every(), filter(), forEach(), map(), and some() Methods
document.write("- These functions return a value based on the results of running the function called in the argument on each item in the array ***<br><br>");

function checkAdult(age) {
   return age >= 18;
}
//every() Method is checking in this case is a ages are >= 18, the value returned is false, because not all ages are >= 18
let ages = [45, 43, 20, 15, 78];

let result = ages.every(checkAdult);
document.write((result) + "<br><br>");


//some() Method is checking if at least one yes true
let result2 = ages.some(checkAdult);
document.write((result2) + "<br><br>");


//filter() Method will return an array with all of the items that returned true
let result3 = ages.filter(checkAdult);
document.write((result3) + "<br><br>");


//map() Method will return an array with the result of each of the function calls
let result4 = ages.map(checkAdult);
document.write((result4) + "<br><br>");


//oreach() will not return anything. It will simply run the function for each item in the array
let result5 = ages.map(checkAdult);
document.write((result5) + "<br><br>");


//The reduce() and reduceRight() Methods
document.write("- These methods also iterate over the items in an array ***<br><br>");
function subValues(prevValue, nextValue) {
   return (prevValue - nextValue);
}
let nums4 = [2, 4, 8, 16, 32];
let theResult = nums4.reduce(subValues);
document.write(theResult + "<br><br>");
theResult = nums4.reduceRight(subValues);
document.write(theResult + "<br><br>");
document.write("The variable nums4 still keep of the same, of course: " + nums4 + "<br><br>");


//toString(), toLocaleString() and valueOf() Methods
document.write("- The toString(), toLocaleString(), and valueOf() methods effectively combine the elements of an array into a single string with a comma as a separator character (much like using the join method with a comma separator). The toLocaleString() method can be adjusted to return a localized version of an item value if desired. You will learn more about the toLocaleString() method when strings are discussed in Chapter 13.***<br><br>");