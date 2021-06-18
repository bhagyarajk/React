// Note 1 : diff between function statement vs function expression
// function statement aka function declarations
function display() {
  console.log("Hello !!!");
}

// function expression
let displayWithExpression = function () {
  console.log("hello second time inside the function expressions");
};

// named function expression
let displayWithNamedFunction = function hello() {
  console.log("Hello from inside the named function expression.");
};

// you cant call hello() like this : error : hello is not defined

// what is the difference between function statement vs function expression
// ans : the main diff is : hoisting : function expressions are not hoisted, where as function statements are hoisted
// because of this reason you cant call function expression before they are declared where as you can call the function statements before they are actually declared

// Note 2 : difference between parameters and arguments
// Parameters -->
// Parameters : these are the parameters that the function is going to accept
// easy way to remember : written in the function signature

// Arguments -->
// arguments : these are the arguments that you will pass while calling the function
// easy way to remember --> used while calling or invoking the function
function hi(param1) {
  console.log(param1);
}

hi("Hi hello this is raj");

// Note 3 : First class function :
// meaning : here functions are considered as the first class citizens
// first class citizens : --> means they can be passed as arguments they can be accepted as the parameters
// this is the reason why we call js functions as first class functions
