/*function Person (name, eyeColor, age) {
   this.name = name;
   this.eyeColor = eyeColor;
   this.age = age;
   this.updateAge = function () {
      return ++this.age;
   };
}

let person01 = new Person ("Carlos", "Green", 45);

let person02 = new Person ("Matheus", "Blue", 19);

let person03 = new Person ("Murillo", "Brown", 15);

console.log(person01);

console.log(person01.name);

console.log(person01.age);

person01.updateAge();

console.log(person01.age);

console.log(person01.updateAge());

console.log("--------------------");

console.log(person02);

console.log(person02.name);

console.log(person02.age);

person02.updateAge();

console.log(person02.age);

console.log("--------------------");

console.log(person03);

console.log(person03.name);

console.log(person03.age);

person03.updateAge();

console.log(person03.age);*/

//surname, name, age, eyeColor, nationality are placeholders (varaible that can be used to pass information)
function Person (surname, name, age, eyeColor, nationality) {
   this.surname = surname;
   this.name = name;
   this.age = age;
   this.eyeColor = eyeColor;
   this.nationality = nationality;
   this.updateAge = function () {
      return ++this.age;
   };
}

person01 = new Person ("Salvador", "Carlos", 45, "Green", "Brazilian");

console.log(person01);

console.log(person01.surname);
console.log((person01.updateAge()));



