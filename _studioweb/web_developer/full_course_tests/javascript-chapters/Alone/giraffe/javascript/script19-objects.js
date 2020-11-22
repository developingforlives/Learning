var person = {
   name: "Carlos",
   age: 45,
   isMale: true,
   occupation: "future programmer",
   printName: function() {
      document.write("<h1>" + this.name + "</h1>");
   }
};

document.write(person);

document.write("<br><hr><br>");

document.write(person.name);

document.write("<br><hr><br>");

person.name = "Matheus";

document.write(person.name);

document.write("<br><hr><br>");

person.printName();