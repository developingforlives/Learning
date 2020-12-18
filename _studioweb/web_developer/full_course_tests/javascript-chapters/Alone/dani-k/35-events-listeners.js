/*let btn = document.querySelector(".test-btn");

function firstFunction() {
   btn.innerHTML = "Yay!";
}

function secondFunction() {
   btn.style.backgroundColor = "red";
}

function btnClick(e) {
   e.preventDefault();
   firstFunction();
   secondFunction();
}

btn.onclick = btnClick;*/

//btn
let btn = document.querySelector(".test-btn");

function firstFunction(e) {
   e.preventDefault()
   btn.innerHTML = "Yay!";
}

function secondFunction() {
   btn.style.backgroundColor = "brown";
}

btn.addEventListener("click", firstFunction);
btn.addEventListener("click", secondFunction);

////btn2
let btn2 = document.querySelector(".test-btn2");

function firstFunction2(e) {
   e.preventDefault()
   btn2.innerHTML = "Oie!";
}

function secondFunction2() {
   btn2.style.backgroundColor = "green";
}

btn2.addEventListener("click", firstFunction2);
btn2.addEventListener("click", secondFunction2);

////btn3
let btn3 = document.querySelector(".test-btn3");

function firstFunction3(e) {
   e.preventDefault()
   btn3.innerHTML = "Ehh aí!";
}

btn3.addEventListener("click", firstFunction3);
btn3.addEventListener("click", function () {
   btn3.style.cssText = "color: red; background-color: cyan";
});

////btn4
let btn4 = document.querySelector(".test-btn4");

function firstFunction4(e, name) {
   e.preventDefault()
   btn4.innerHTML = name;
}

btn4.addEventListener("click", function (e) {
   firstFunction4(e, "Carlos");
});
btn4.addEventListener("click", function () {
   btn4.style.cssText = "color: blue; background-color: yellow";
});



























