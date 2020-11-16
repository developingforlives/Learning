/* http://www.w3schools.com/jsref/default.asp */

function sniffer(message) {
    console.log("Event: " + message);
    alert("inside function alert.");
}

function outSide() {
    alert("called: outSide() function");
}

document.getElementById("butt").onclick = function () {
    sniffer("Clicked on Button");
    outSide();
};

document.getElementById("firstP").onmouseover = function () {
    console.log("you passed the mouse here!");
};
