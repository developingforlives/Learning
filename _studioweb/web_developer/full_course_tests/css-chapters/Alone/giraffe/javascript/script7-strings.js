var phrase = "Strings are cool";
var text = "are cool"; 

document.write(phrase.length + "<br><br>");

document.write(phrase.toUpperCase() + "<br><br>");

document.write(phrase.toLowerCase() + "<br><br>");

//the method charAt returns the position of the index (Index starts count from 0 (zero))...
//ABCDEFG
//0123456
document.write(phrase.charAt(0) + "<br><br>");

//the method indexOf returns the where the letters is (index)... 
document.write(phrase.indexOf("S") + "<br><br>");

document.write(phrase.lastIndexOf("o") + "<br><br>");

document.write(phrase.lastIndexOf("z") + "<br><br>");

document.write(phrase.substring(0, 3) + "<br><br>");

document.write(phrase.substring(4, 9) + "<br><br>");

document.write(phrase.substring(phrase.indexOf("c"), phrase.length) + "<br><br>");

document.write(phrase.substring(phrase.indexOf("a"), phrase.length) + "<br><br>");

document.write(phrase.endsWith("cool") + "<br><br>");

document.write(phrase.endsWith("cools") + "<br><br>");

document.write(phrase.includes("Strings") + "<br><br>");

document.write(phrase.includes("Stringsssss") + "<br><br>");

document.write(phrase.includes(text) + "<br><br>");

document.write(phrase + " " + text);












