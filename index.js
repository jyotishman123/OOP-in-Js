"use strict";

// CONSTRUCTOR FUNCTION

const Person = function (fistname, birthyear) {
  this.fistname = fistname;
  this.birthyear = birthyear;

  // Never do this to declare a function
  // We will use prototype instead of this method

  // this.calcage = function(){
  //     console.log(2024 - this.birthyear)
  // }
};

const jonas = new Person("Jonas", 1991);
console.log(jonas);

const matilda = new Person("matila", 2023);
const jack = new Person("jack", 2021);

// console.log(matilda,jack,jonas)

// An instance, in the context of a constructor function, refers to a specific object that is created using that constructor

console.log(jonas instanceof Person);

// IMPORTANT STEPS

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototye
// 4. function automatically return the object {}

// How to use prototype

console.log(Person.prototype);

Person.prototype.calcage1 = function (year) {
  console.log(year - this.birthyear);
};

jonas.calcage1(2037);
matilda.calcage1(2023);
jack.calcage1(2023);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(jonas);
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

Person.prototype.species = "Homo Spania";
console.log(jonas.species);

console.log(jonas.__proto__.__proto__);

const arr = [1, 2, 3, 4, 4, 1, 3, 4, 1, 8, 9];
const arr1 = [4, 56, 96, 4, 5, 2, 4, 9, 9, 4, 2];

console.log(arr.__proto__);

// How to add prototype in Array
// We can now apply this method on any array because it is created using prototype

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());
console.log(arr1.unique());

// Coding Challenge

const Car = function (brand, speed) {
  this.brand = brand;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.brand} is going at ${this.speed} engine is`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.brand} is stoping at ${this.speed}`);
};

const Bmw = new Car("Bmw", 100);
const Mercedes = new Car("Merceder", 90);

Bmw.brake();
Bmw.accelerate();

Bmw.accelerate();
Mercedes.brake();

Mercedes.accelerate();
Bmw.brake();

////////////////////////////

// ES6 CLASSES

class PersonCl {
  constructor(fullName, birthyear) {
    this.fullName = fullName;
    this.birthyear = birthyear;
  }
  calcAge() {
    console.log(2037 - this.birthyear);
  }

  static hey() {
    console.log("hey there form class");
  }
}

const jessica = new PersonCl("Jessica", 1996);

console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

// 1. Class are not hoiseted as like function declaration
// 2. Class are first class citizen
// 3. Class are executed in strict mode

// Seters and Getters

// A getter is a function that is used to retrieve the value of a property. It is defined using the get keyword followed by the property name. When the property is accessed, the getter function is automatically called, and its return value is used as the property value.

// A setter, on the other hand, is a function that is used to assign a value to a property. It is defined using the set keyword followed by the property name. When the property is assigned a value, the setter function is automatically called with the assigned value as its argument.

const account = {
  owner: "Jonas",
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1);
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

// Statics Methods

// Creating a static function

// This is a static method because this function is not called under prototye

// Other instances cannot use this
Person.hey = function () {
  console.log("hey 👍👍");
};

Person.hey();

// It will give error know
// jonas.hey()

// To create a static function in class we need to add static keyword before declaring the function

// OBJECT CREATE

const PersonProto = {
  name:"Steven",
  calcAge() {
    console.log(2037 - this.birthyear);
  },

  init(firstName, birthyear) {
    this.firstName = firstName;
    this.birthyear = birthyear;
  },
};

const steven = Object.create(PersonProto);
 
steven.birthyear = 2036;
steven.calcAge();
// console.log(steven);

const Sarah = Object.create(PersonProto);

Sarah.init("Sarah", 2013);
Sarah.calcAge();

// Coding Challenge

class CarCl {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.brand} is going at ${this.speed}`);
  }
  brake(){
    this.engine = "V8 turbo"
    this.speed -=5;
    console.log(`${this.brand} is branking at ${this.speed}`)
  }

   get speedUs(){
      return this.speed / 1.6
   }

   set speedUs(speed){
       this.speed = speed * 1.6
   }

}

const ford = new CarCl('Ford', 120);
const chevrolate = new CarCl('Cheverolate',100)

console.log(ford.speedUs)
ford.accelerate()
ford.accelerate()
ford.accelerate()
ford.speedUs = 50;
console.log(ford.speed)

// IMPORTANT

/*
In JavaScript, when you create a variable using the this keyword inside a function within a class, that variable becomes a property of the class instance. This means that when you call the function, the variable will behave like any other instance property defined in the constructor.*/

console.log("This is the ford before calling the brake function", ford)
ford.brake();
console.log("This is the ford after calling the brake function", ford)
console.log("This is the cheverlate  after calling  calling the brake function in ford", chevrolate)
chevrolate.brake()
console.log("This is the cheverlate  after calling  calling the brake function in cheverolate", chevrolate)


// The Call funcion to get the this property from another constructor function


const Person1 = function(firstName,birthyear){
  this.firstName = firstName;
  this.birthyear = birthyear
};

Person1.prototype.calcAge = function(){
   console.log(2037 - this.birthyear)
}



const Students = function(firstName,birthyear,course){
     Person1.call(this, firstName, birthyear)
     this.course = course
}

Students.prototype.introduce = function(){
   console.log(`My name is ${this.firstName} and I am studing ${this.course}`)
}

const mike = new Students("Mike", 2023, "CS");

mike.introduce()


// Coding Challenge

// Get the same property from the pervious constructor as Car instead of declaring it;


const Fuel = function(brand, speed, fuelTank){
    Car.call(this, brand, speed);
   this.fuelTank = fuelTank
}

Fuel.prototype = Object.create(Car.prototype);

Fuel.prototype.reFulling = function(refuel){
  this.fuelTank = refuel
   
}

const Audi = new Fuel("Audi", 120, 20);
Audi.reFulling(3);
console.log(Audi.fuelTank)
Audi.brake()
console.log(Audi)


 

// Inherientances Between Classes
// Here we don have to call call method

class StudentCl extends PersonCl {
  constructor(fullName,birthyear,course){
    // Always need to happern first
    super(fullName, birthyear)
    this.course = course
  }
  introduce(){
    console.log(`My name is ${this.fullName} and I study ${this.course}`)
  }
  calcAge() {
    console.log(2012 - this.birthyear);
  }
}

const martha = new StudentCl("Martha Jonas",2012,'Computer Sciences')
console.log(martha)
martha.introduce()
martha.calcAge()

// In heritance between Classes and object.create

const PersonProto1 = {
  calcAge(){
    console.log(2037 - this.birthyear)
  },

  init(firstName, birthyear){
     this.firstName = firstName;
     this.birthyear = birthyear
  }
}


const steven1 = Object.create(PersonProto1);

const StudentProto = Object.create(PersonProto1);

StudentProto.init = function(firstName, birthyear, course){
     PersonProto1.init.call(this, firstName, birthyear);
     this.course = course
}

StudentProto.introduce = function(){
  console.log(`My name is ${this.firstName} and I study ${this.course}`)
}

const jay = Object.create(StudentProto);
jay.init("Jay", 2010, "Computer Science")
jay.introduce()



// ANOTHER CLASS EXAMPLE

class Account{
  
   constructor(owner, currency, pin){
    this.owner = owner;
    this.currency = currency
    this.pin = pin
    this.movements = []
    

    console.log("Thanks for opening an acconunt", owner)
   }

   getMovements(){
     return this.movements
   }

   deposit(val){
    this.movements.push(val)
   }

   withdrawl(val){
    this.deposit(-val)
   }

   _approveLoan(val){
    return true
   }

   requestLoan(val){
    if(this._approveLoan(val)){
      this.deposit(val)
      console.log("Laon approved")
    }
   }

    
}

const acc1 = new Account('Jonas',"EUR",111);
console.log(acc1)

acc1.deposit(500);
acc1.withdrawl(120);
acc1.requestLoan(150000)
console.log(acc1.getMovements())




// Coding Challenge 4

class CarCl2 {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.brand} is going at ${this.speed}`);
  }
  brake(){
    this.engine = "V8 turbo"
    this.speed -=5;
    console.log(`${this.brand} is branking at ${this.speed}`)
    return this
  }

   get speedUs(){
      return this.speed / 1.6
   }

   set speedUs(speed){
       this.speed = speed * 1.6
   }

}


class FuelCar extends CarCl2{


     #fuel
     constructor(brand,speed,fuel){
      super(brand,speed);
      this.#fuel = fuel
     }

     fuelTank(fuelto){
      this.#fuel = fuelto
      return this
     }

     accelerate() {
      this.speed += 20;
      this.#fuel--
      console.log(`${this.brand} is going at ${this.speed} with a fuel of ${this.#fuel}..`);
      return this
    }
    
}

const Toyata = new FuelCar("Toyata",120,5)
console.log(Toyata)

 Toyata.accelerate()
 Toyata.accelerate()
 Toyata.accelerate()
 Toyata.brake()
 Toyata.fuelTank(5)
 Toyata.accelerate()


 



 

 
 
 

 