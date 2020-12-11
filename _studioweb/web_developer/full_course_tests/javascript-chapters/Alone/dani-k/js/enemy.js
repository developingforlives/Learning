//this variable (object) below is placed in the Global Scope, therefore, can be accessed from everywhere in your code because in inside of the Global Scope and not in a function/method.

let enemy; 

function Enemy (enemyType, health, mana, strength, agility, speed) {
   this.enemyType = enemyType;
   this.health = health;
   this.mana = mana;
   this.strength = strength;
   this.agility = agility;
   this.speed = speed;
}