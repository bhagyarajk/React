// call, apply and bind are the methods from Function prototype
// so all the functions will have access to call, apply and bind methods just like array's having access to the methods like slice, splice etc
// call, apply and bind methods purpose is to set the value of this
// means by using these methods you can actually manipulate the value that the this is pointing to
// these 3 methods are used to avoid the boilerplate's in js

// call method --> used to call the function, by setting the value of this keyword
let human = {
  firstName: "raja",
  lastName: "kulkarni",
  printFullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

let dog = {
  firstName: "kitty",
  lastName: "sweety",
};

// Now if you observe  the human object which has the method to print the full name of the human
// now lets call the function
human.printFullName();

// now lets say I want to print the full name of the dog object, by calling printFullName inside the human object, this is not making sense in this example but this will make sense in few used cases when the objects are related

human.printFullName.call(dog);
// output : kitty sweety
// even function are also treated as objects in functional programing

// call method signature
// functionname.call(this value, argument1, argument2, so on )

// Apply method : The job of the apply method is also as same as that of call but instead of receiving the arguments one by one
// you can pass in the list as arguments there
// signature of apply method

// functionname.apply(this value, listofargs)

// Method 2 : now lets define  something meaning full not like the example 1

// Let's define the generic object arithmaticOps object
let arithmaticOps = {
  add: function (x, y) {
    console.log(x + y);
  },
  sub: function (x, y) {
    console.log(x - y);
  },
  mul: function (x, y) {
    console.log(x * y);
  },
  div: function (x, y) {
    console.log(x / y);
  },
};

// Let's define the mul object for specific multiplication
let mul = {
  double: function () {
    arithmaticOps.mul.call(arithmaticOps, 2);
  },
  tripple: function () {
    arithmaticOps.mul.call(arithmaticOps, 3);
  },
  square: function (x) {
    arithmaticOps.mul.call(arithmaticOps, x, x);
  },
  cube: function (x) {
    arithmaticOps.mul.call(arithmaticOps, x * x, x);
  },
};

mul.square(2);
mul.square(10);
mul.square(3);
mul.cube(2);

// let me implement the same thing with the help of apply method

console.log("below we have loged the results of the mulWithApply method");

let mulWithApply = {
  double: function () {
    arithmaticOps.mul.apply(arithmaticOps, 2);
  },
  tripple: function () {
    arithmaticOps.mul.apply(arithmaticOps, 3);
  },
  square: function (x) {
    arithmaticOps.mul.apply(arithmaticOps, [x, x]);
  },
  cube: function (x) {
    arithmaticOps.mul.apply(arithmaticOps, [x * x, x]);
  },
};

mulWithApply.cube(2);

// But now we will learn about bind method : this method is also used to set the value that the this points to
// bind will not invoke the function at that time, rather it just returns the function with the updated this value, so that later you can invoke the function
console.log("logging the value of bind method impl below ");
let mulWithBind = {
  square: function (x) {
    // bind returns the function, which inturn returned by the square function here
    return arithmaticOps.mul.bind(arithmaticOps, x, x);
  },
};
let squareValue = mulWithBind.square(20);
console.log(squareValue);
squareValue();
