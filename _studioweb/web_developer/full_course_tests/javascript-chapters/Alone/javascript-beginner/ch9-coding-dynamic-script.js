let d1 = document.getElementById("div1");
let answer_link = document.getElementById("answer_link");
answer_link.onclick = function () {
   d1.innerHTML = "That is easy, the answer is <strong>4</strong>!";
   return false;
};

/*
<body>
<div id="div1">
That is easy, the answer is <strong>4</strong>!
</div>
<div id="div2">
<a href="answer.html" id="answer_link">Get the answer</a>
</div>
</body>

TIP
To make the script accessible to those without JavaScript, a default link destination
(answer.html) is used. Including the answer text on the linked page allows users without
JavaScript to still click the link and obtain the answer to the question.
*/

