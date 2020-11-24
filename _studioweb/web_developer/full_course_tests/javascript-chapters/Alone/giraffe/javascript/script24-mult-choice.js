var questions = [
   {
      prompt: "What color are Apples?\n(a) Red/Green\n(b) Purple\n(c) Orange",
      answer: "a"
   },
   {
      prompt: "What color are Bananas?\n(a) Teal\n(b) Magenta\n(c) Yellow",
      answer: "c"
   },
   {
      prompt: "What color are Strawberries?\n(a) Yellow\n(b) Red\n(c) Blue",
      answer: "b"
   },
]
console.log(questions.length);

var score = 0;

for (var i = 0; i < questions.length; i++) {
   var response = window.prompt(questions[i].prompt);
   if (response == questions[i].answer) {
      score++;
      alert("Correct!");
   } else {
      alert("Wrong!");
   }
}
alert("you got " + score + " / " + questions.length);