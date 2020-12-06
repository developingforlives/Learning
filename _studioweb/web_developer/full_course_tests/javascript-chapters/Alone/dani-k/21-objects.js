/*let person = new Object();

person.name = "Carlos";
person.eyeColor = "Green";
person.age = 45;
person.updateAge = function () {
   return ++person.age
}

console.log(person);

console.log(person.name);

console.log(person.age);

person.updateAge();

console.log(person.age);*/

// *** SHORT HAND BELOW***

/*let person = {
   name: "Carlos",
   eyeColor: "Green",
   age: 45,
   updateAge: function () {
      return ++person.age;
   }
}

console.log(person);

console.log(person.name);

console.log(person.age);

person.updateAge();

console.log(person.age);*/

//Note: Objects always must start with Capital Letter, ex: Object, Person, Car, Animals.

let person = {
   name: ["Carlos", "Matheus", "Murillo"],
   eyeColor: ["Green", "Blue", "Brown"],
   age: [45, 19, 15],
   updateAge: function () {
      return ++person.age;
   }
}

console.log(person);

console.log(person.name);

console.log(person.age);

console.log(person.name[1]);

console.log(person.eyeColor[2]);

console.log(person.age[0]);

person.updateAge(); //How to do this, I did not find an anwser yet

console.log(person.age[0])




