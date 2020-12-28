let myArray = ["Sunday", "Sunday", "Monday", "Tuesday", "Wednesday"];
console.log(myArray.length); 

let myOtherArray = ["Thursday", "Friday", "Saturday"];

//concat()
let myWeek = myArray.concat(myOtherArray);
console.log(myWeek);

console.log(myWeek.join(" "));

//join()
let longDay = myWeek.join(" - ");
console.log(longDay);

//toString()
console.log(myWeek.toString());

//indexOf() search for the first item
console.log(myWeek.indexOf("Sunday")); //return the position of 0
console.log(myWeek.indexOf("Teste")); //this will return -1 because there is no Teste in the myWeek array

//lastIndexOf() search for the last item
console.log(myWeek.lastIndexOf("Sunday")); //return the position of 1

//slice()
console.log(myWeek.slice(0, 4));
console.log(myWeek.slice(2, 5));

//sort()
console.log(myWeek.sort());

//reverse()
console.log(myWeek.reverse());

let myWeek2 = myWeek;
console.log("here " + myWeek2);

//splice()
myWeek2.splice(2,1,"Holiday");
console.log(myWeek2);

myWeek2.splice(2,1,"Holiday");
console.log(myWeek2);

let arrayMult = [[1,2,3], [4,5,6], [7,8,9], [0]];
document.write(arrayMult[1][2]); //this will return 5, because the number 6 is index 1 of the arrays and is in the position 2 of the index of this first index (book page: 108)