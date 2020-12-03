var items = ["Banana", "Avocado"," Apple", 18, true];

items[3] = 36; 

document.write(items[3] + "<br><br>");

console.log(items.length);

items.push("Peach"); 

document.write(items + "<br><br>");

console.log(items.length);

console.log(typeof items);

items.pop("Peach");

document.write(items);

console.log(items.length);
