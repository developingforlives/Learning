function Laptop(use, model, processor, ram, hd) {
   this.use = use
   this.model = model;
   this.processor = processor;
   this.ram = ram;
   this.hd = hd;
}

Laptop.prototype.describe = function () {
   document.write("<p> My " + this.use + " laptop is:<br>");
   document.write("Model: " + this.model + "<br>");
   document.write("Processor: " + this.processor + "<br>");
   document.write("RAM: " + this.ram + "<br>");
   document.write("Hard Disk: " + this.hd + "</p>");
}

let work_laptop = new Laptop("Work", "X1", "i7", "16GB", "SSD 256GB");
let home_laptop = new Laptop("Home", "P52s", "i7", "16GB", "SSD 512GB");
let gaming_laptop = new Laptop("Gaming", "Alienware", "i9", "32GB", "M.2 4TB");
work_laptop.describe();
home_laptop.describe();
gaming_laptop.describe();

document.write(Laptop.length);

document.write("<br><br>--------------------------<br><br>");

class Laptop2 {
   constructor(use2, model2, processor2, ram2, hd2) {
      this.use2 = use2;
      this.model2 = model2;
      this.processor2 = processor2;
      this.ram2 = ram2;
      this.hd2 = hd2;
   }
   describe() {
      document.write("<p> My " + this.use2 + " laptop is:<br>");
      document.write("Model: " + this.model2 + "<br>");
      document.write("Processor: " + this.processor2 + "<br>");
      document.write("RAM: " + this.ram2 + "<br>");
      document.write("Hard Disk: " + this.hd2 + "</p>");
   }
}

let work_laptop2 = new Laptop2("Work", "X1", "i7", "16GB", "SSD 256GB");
let home_laptop2 = new Laptop2("Home", "P52s", "i7", "16GB", "SSD 512GB");
let gaming_laptop2 = new Laptop2("Gaming", "Alienware", "i9", "32GB", "M.2 4TB");
work_laptop2.describe();
home_laptop2.describe();
gaming_laptop2.describe();