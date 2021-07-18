// function currying is the way to reduce the number of functions written to achieve the similar kind of task by using
// the core concepts of js like bind method, or closures
let multiply = (x, y) => {
  console.log("The product is : " + x * y);
};

multiply(2, 2);

// now lets say we need to write a function to double the value of the integer
// we need not to write the function again, we can use the core concepts of js so that, we can reduce the burden of the developer

// Method 1 : to implement the function currying using bind method
// here I am not defining the body for the function, I have explained bind, apply, call method in other tut
let double = multiply.bind(this, 2); // this line will define the function currying
double(4);
double(8);

// Method 2 : to implement the function using closures
let multiplyWithClosures = (x) => {
  return (y) => {
    console.log(x * y);
  };
};

let doubleWithClosures = multiplyWithClosures(2);
doubleWithClosures(20);
// If we see here you can clearly see that the function returned has access to x via closures feature of the js
