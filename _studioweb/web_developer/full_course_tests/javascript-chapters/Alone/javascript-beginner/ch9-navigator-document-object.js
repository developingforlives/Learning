/*
document.write("Last Updated: " + document.lastModified);
//document.dir = "rtl";
//alert("You came from " + document.referrer + "!");

document.write("<br><br>");

document.writeln("pi");

document.writeln("pi");


document.writeln("<strong>JavaScript Rules!</strong>");
document.writeln(" This is fun.");
*/

/*
let me_div = document.getElementById("div1");
document.write("The title of the div element is, " + me_div.title);
*/

/*
let me_div = document.getElementById("div1");

let inner_div = document.createElement("div");

let inner_div_text = document.createTextNode("More about me...");

inner_div.appendChild(inner_div_text);

inner_div.title = "More";

me_div.appendChild(inner_div);
*/

let me_div = document.getElementById("div1");
document.write(me_div.title + "<br><br>");
let inner_div = document.createElement("div");
let inner_div_text = document.createTextNode("See you");
inner_div.appendChild(inner_div_text);
inner_div.title = "Lucky";
me_div.appendChild(inner_div);
document.write(inner_div.title + "<br><br>");

