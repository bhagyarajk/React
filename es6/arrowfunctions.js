//Normal functions looks like this
let myFunc = function () {
  console.log("This is the normal function");
};
myFunc();

// One of the best advantage of the arrow functions is about the this keyword
// Incase of arrow functions this keywords value will not be changed like the functions with function keyword
let anotherFunc = () => {
  console.log("Inside the arrow function");
};
anotherFunc();

const double = (number) => number * 2;
console.log(double(2));
