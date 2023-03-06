"use strict";
class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age);
    this.status = status;
    this.legs = 0;
    this.species = "shark";
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, status);
    this.legs = 4;
    this.species = "cat";
  }

  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, status);
    this.master = master;
    this.legs = 4;
    this.species = "dog";
  }

  greetMaster() {
    return `Hello ${this.master}`;
  }
}


 var billy = new Shark("Billy", 3, "Alive and well");
console.log(billy.name);
    var charles = new Shark("Charles", 8, "Finding a mate");
    var cathy = new Cat("Cathy", 7, "Playing with a ball of yarn");
    var spitsy = new Cat("Spitsy", 6, "sleeping");
    var doug = new Dog("Doug", 12, "Serving his master", "Eliza");

