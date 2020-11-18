function youClicked(message) {
   document.getElementById("button");
   button.innerHTML = "háááááááá";
   button.style.color = "red";
   console.log("You clicked here," + message);
   //alert("háááááááá");
}

function youMouseOver(message) {
   document.getElementById("button2");
   button2.innerHTML = "háááááááá222222";
   button2.style.color = "blue";
   console.log("Something happen," + message);
   //alert("háááááááá222222");
}

function handleClick(element, message) {
   element.innerHTML = "Clicked";
   element.style = "background-color: pink";
   console.log("Have you clicked here, " + message);
}

var image = document.getElementById("image");
image.addEventListener("mouseover", function () {
   this.style = "box-shadow: 3px 3px 3px green";
   this.width = "300";
});

image.addEventListener("mouseout", function () {
   this.style = "none";
   this.width = "200";
});




