/*
function Car(seats, engine, radio) {
   this.seats = seats;
   this.engine = engine;
   this.radio = radio;
}

let workCar = new Car("cloth", "V-6", "Tape Deck");
let funCar = new Car("leather", "V-8", "CD Player");
document.write(workCar.engine + "<br><br>");

let workEngineType = workCar.engine;
let funEngineType = funCar.engine;

document.write(workEngineType + "<br><br>");
document.write(funEngineType + "<br><br>");

document.write("I want a car with " + funCar.seats + " seats.<br>");
document.write("It also needs a " + workCar.engine + " engine.<br>");
document.write("Oh, and I would like a " + funCar.radio + " also.<br><br>");


function Car2(makeName, modelName, bodyType, fuelType, engineType, gearboxType) {
   this.makeName = makeName;
   this.modelName = modelName;
   this.bodyType = bodyType;
   this.fuelType = fuelType;
   this.engineType = engineType;
   this.gearboxType = gearboxType;
   this.describe = function () {
      document.write("Make: " + this.makeName + "<br>");
      document.write("Model: " + this.modelName + "<br>");
      document.write("Body: " + this.bodyType + "<br>");
      document.write("Fuel: " + this.fuelType + "<br>");
      document.write("Engine: " + this.engineType + "<br>");
      document.write("Gearbox: " + this.gearboxType + "<br>");
   }
}

let mine = new Car2("SEAT", "TOLEDO", "Saloon", "Diesel", "1.6 TDI", "Manual");
mine.describe();

document.write("<br>" + this.makeName + ", " + mine.modelName + "<br><br>");
*/

/*
let workCar = new Car("cloth", "V-6", "Tape Deck");
let funCar = new Car("leather", "V-8", "CD Player");
document.write(workCar.engine + "<br><br>");

let workEngineType = workCar.engine;
let funEngineType = funCar.engine;

document.write(workEngineType + "<br><br>");
document.write(funEngineType + "<br><br>");

document.write("I want a car with " + funCar.seats + " seats.<br>");
document.write("It also needs a " + workCar.engine + " engine.<br>");
document.write("Oh, and I would like a " + funCar.radio + " also.");
*/

/*
let work_car = new Car("cloth", "V-6", "Tape Deck");
let fun_car = new Car("leather", "V-8", "CD Player");
let original_work_car_engine = work_car.engine;
//console.log(original_work_car_engine);
work_car.engine = "V-4";
let new_work_car_engine = work_car.engine;
//console.log(new_work_car_engine);
document.write("I wanted a " + original_work_car_engine + " initially.<br>");
document.write("I got a " + new_work_car_engine + " instead to lower gas costs.");

document.write("<br><br>");

function Car(seats, engine, radio) {
   this.seats = seats;
   this.engine = engine;
   this.radio = radio;
   this.describe = function () {
      document.write("This amazing car has these features: ");
      document.write(this.seats + " seats, " + this.engine + " engine, ");
      document.write(this.radio);
   };
}
let work_car = new Car("cloth", "V-6", "Tape Deck");
work_car.describe();
*/

/*
function Car(seats, engine, radio) {
   this.seats = seats;
   this.engine = engine;
   this.radio = radio;
   this.describe = describe_car;
}
function describe_car() {
   document.write("This amazing car has these features: ");
   document.write(this.seats + " seats, " + this.engine + " engine, ");
   document.write(this.radio);
}
let work_car = new Car("cloth", "V-6", "Tape Deck");
work_car.describe();
*/

/*
function Car(body, engine, seats, radio) {
   this.body = body;
   this.engine = engine;
   this.seats = seats;
   this.radio = radio;
}
Car.prototype.gearbox = "automatic";
let work_car = new Car("VAN", "V-6", "clouth", "Tape Deck");
let family_car = new Car("SUV", "V-8", "leather", "CD Changer");
let fun_car = new Car("Coupe", "V12", "leather", "DVD Player")

document.write(work_car.gearbox + "<br><br>");
document.write(family_car.gearbox + "<br><br>");

document.write("My work car is a " + work_car.body + ", " + work_car.engine + ", " + work_car.gearbox + ", " + work_car.seats + " seats and with a " + work_car.radio + ".<br><br>");

document.write("My family car is a " + family_car.body + ", " + family_car.engine + ", " + family_car.gearbox + ", " + family_car.seats + " seats and with a " + family_car.radio + ".<br><br>");
*/

/*
function Car(seats, engine, radio) {
   this.seats = seats;
   this.engine = engine;
   this.radio = radio;
}
Car.prototype.locks = "automatic";
let work_car = new Car("cloth", "V-6", "Tape Deck");
let family_car = new Car("leather", "V-8", "CD Changer");
work_car.locks = "manual";
document.write(work_car.locks + "<br><br>");
document.write(family_car.locks + "<br><br>");

document.write("My car family has " + family_car.seats + " seats, with a " + family_car.engine + " engine, " + family_car.radio + " and " + family_car.locks + " locks. <br><br>");
*/

/*
function Car(seats, engine, radio) {
   this.seats = seats;
   this.engine = engine;
   this.radio = radio;
}
Car.prototype.locks = "automatic";
let work_car = new Car("cloth", "V-6", "Tape Deck");
let family_car = new Car("cloth", "V-4", "CD Changer");
work_car.locks = "manual";
document.write(work_car.hasOwnProperty("locks") + "<br>"); // true
document.write(family_car.hasOwnProperty("locks")); // false
*/

/*
function Car(seats, engine, radio) {
   this.seats = seats;
   this.engine = engine;
   this.radio = radio;
}
Car.prototype.describe = function () {
   document.write("This amazing car has these features: ");
   document.write(this.seats + " seats, " + this.engine + " engine and a " + this.radio + ".");
};
let work_car = new Car("cloth", "V-6", "Tape Deck");
work_car.describe();
*/

/*
function Car(seats, engine, radio) {
   this.seats = seats;
   this.engine = engine;
   this.radio = radio;
}
let work_car = new Car("cloth", "V-6", "Tape Deck");
for (let propertie_name in work_car) {
   document.write(propertie_name + ": " + work_car[propertie_name] + "<br>");
}
*/

function Car(seats, engine, radio) {
   this.seats = seats;
   this.engine = engine;
   this.radio = radio;
}
let work_car = new Car("cloth", "V-6", "Tape Deck");
for (let prop_name in work_car) {
   if (work_car.hasOwnProperty(prop_name)) {
      document.write(prop_name + ": " + work_car[prop_name] + "<br>");
   }
}














