//Summary : var : method scoped when inside the methods, can be re-declared, reassigned, acts like global when outside the methods
// Hoisting : var declarations are hoisted in the top of function or script, and initialized with undefined
// let : always block level scope, preferred to use, can be reassigned but not re-declared,
// Hoisting : let declarations are hosted at the top but they are not initialized so you will get the errors (Ref error so There is no further execution of the code)
// const : Just like let, but the change is you cant redeclare or re-initialized hoisting is also same

// to guess the output of course the knowledge of hoisting is needed
// Always use let and const : don't use var anymore (var is very loose when it comes to using the vars without declaring)

function display() {
  var name1 = "Bhagyaraj";
  console.log(name1);
}

//added a line
display();
console.log(name1);

function displayWithLet() {
  let name2 = "Raj";
  console.log(name2);
  if (true) {
    let name2 = "Hello";
    console.log(name2);
  }
}
displayWithLet();

function displayWithConst() {
  const name3 = "raj";
  console.log(name3);
  name3 = "kulkarni";
}
displayWithConst();
