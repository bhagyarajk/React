// Here in this section we will learn how to create an objects with the blueprint
//-------------------------------------------------------------------------------------------------------
// Method 1 : by using a plain constructor function
// Note 1 : Unlike in java, js object constructors can exists without even the class just like
function Person(name, gender) {
  this.name = name;
  this.gender = gender;
  //   this.square = function (number) {
  //     return number * number;
  //   };
  this.square = (number) => number * number;
}

// creation of an object using just the constructor functions
let personObject = new Person("Raj", "Male");
console.log(personObject);
console.log(personObject.square(9));

// Note 2: you can add any var or method to an object on the fly in the js
personObject.color = "brown";
personObject.double = (number) => number * 2;
console.log(personObject);
console.log(personObject.double(2));

//But how can you add vars and methods into the constructor function
// below line will not add id to the constructor function
// Person.id = 10;
// Below line will not add talk method to the constructor function
//Person.talk = () => "blah blah ";
// conclusion : you cant directly add the properties into the constructor function on the fly if you wanted to do so you need to use the prototype property
// Even by using the prototype property you cant add vars and methods to the constructor function,we are just making these vars and methods available via proto object
// what is prototype ?
// Ans : it's a chain of objects which allows the child object to inherit from them  or it's an indirect way of achieving something that we would have achieved if we added the new vars and methods into the constructor function on the fly

// Array objects inherits from Array.prototype
// Date  objects inherits from Date.prototype
// Similarly all objects inherits from a prototype
// Prototype chaining exits, in this chain the supermost prototype is the Object.prototype, so all the objects inherits from the Object class object
// Prototype inheritance is like object inheriting from another object
// Objects look for the properties in their nearest prototype if does not exists they will start looking at them till the prototype chain ends

// The main difference between the prototypical inheritance and the class inheritance is that, you can add any of the properties to the super object in prototype where as you can add these properties on the fly(when ever you want or at any line of code) to the superclass
Person.prototype.id = 10;
Person.prototype.talk = () => "blah blah";
// Now all the objects that were created from the Person constructor will have these vars and methods indirectly through proto object
console.log("after the prototype");
console.log(personObject);
// bear in mind prototyping will not add the properties to the object directly, you can find these properties inside the proto object
console.log("After the Prototype");
console.log(Person);
console.log("Person id : " + personObject.id);
console.log(personObject.talk());

// Note 2 : Prototype is basically a chain of js objects from which you can inherit the vars and methods and add or remove vars and methods at any point of our code
// Note 3 : Class level inheritance is a strict inheritance
// Note 4 : Lookup for the properties anyobjectref.prototype.prototype ... --> this is called the prototype chaining
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Method 2 : by using Object.create(ref of base object)
let animal = {
  age: 10,
  voice: function () {
    "bla blah";
  },
};

let dog = Object.create(animal);
console.log("creation of animal object");
// All the props of the animal added to dog with the help of proto object
// Not to the proto object
console.log(dog);

//-------------------------------------------------------------------------------------------------------------------------------------------------------
// Method 3 : creating the objects with class, inheritance can be achieved with extends keyword, just like how you do it in java

class Human {
  constructor() {
    this.x = 2;
    this.gender = "male";
    this.speak = 8;
    this.hello = () => {
      console.log("Hello what is the main thing");
    };
  }
  printGender() {
    console.log(this.gender);
  }
}

const human = new Human();
console.log(human);
// By looking at the human object logged you can see that, the gender is been added as a direct property of the object
// but where as printGender() is been added to the prototype object
// Important conclusion : In js whatever you have it inside the constructors available directly as within the object where as other things are available via prototype chaining
class PersonClass extends Human {
  constructor(gender, name) {
    // calling the super class constructor is mandatory here
    super();
    this.gender = gender;
    this.name = name;
  }
  display() {
    console.log("Inside the display method of the Person class");
    console.log(this.name);
    console.log(this.gender);
  }
}
const personForClasses = new PersonClass("Raj", "Male");
console.log("Below we are logging person object");
console.log(personForClasses);
personForClasses.display();
personForClasses.printGender();

class AnotherClass extends Human {
  constructor(gender, name) {
    super();
    this.gender = gender;
    this.name = name;
  }
}
const anotherClass = new AnotherClass("female", "Hello");
console.log(anotherClass);
console.log(anotherClass.x);
// below line is invalid and gives error
//anotherClass.display();

// Important conclusions :
// 1. properties directly added into an object if they are in same class constructors, superclass constructors
// 2. If they are not in the constructors, they will be present in prototype chain

// es7 will even offer the simpler syntax for the
// you can skip writing constructor also to assign the values for the class vars
class NewClass {
  a = 10;
  b = 30;
  getValue = () => {
    // Here below if you don't use the this keyword it will throw error like a not defined, because a and b are class vars you have to access them with the objects
    console.log("value of a : " + this.a + " : value of b : " + this.b);
  };
}
const es7Class = new NewClass();
console.log("Logging the object es7Class :");
console.log(es7Class);
es7Class.getValue();
// even though we skip writing the constructor, it will be internally converted into the constructor calls
