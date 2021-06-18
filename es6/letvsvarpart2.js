// console.log(a);
// console.log(b);
// let a = 10;
// var b = 20;

// Note 1:
// If you debug the above code by keeping the break point at the very first line you can see that
// js allocates the memory for both a and b
// but there is a noticeable diff : b is attached with window(global object) where as a has been
//Allocated a memory in separate place --> block level scope (in firefox it shows block level where as in chrome it shows as script it's due to diff js engines)
// by this we can conclude that let always have the block scope where as var will have method scope if they are inside the method global scope if they are global

// Note 2:
// By keeping the breakpoints at the very first line of code will also confirms there is a hoisting in js
// this hoisting will allow you to use the variables even before declaring (* terms and conditions apply)

// Note 3:
// temporal dead zone : time between the let variable is hoisted and it's initialized with the value
// when you try to access the variable in the temporal dead zone it will give you unreferenced error (cant access a without initializing a)
// Line number 1 to 3 (before executing 3 ) is the temporal dead zone, once line number 3 executed the temporal dead zone ends

//Note 4 :
// below line of code will give unreferenced error but this time the msg is dif : x is not defined because memory is not at all allocated,
// console.log(x);

// Note 5 :
// for the below lines of code the output is : undefined and sour, it's because var's are attached to global object where as lets are block scoped and not attached to window object

let mango = "sweet";
var apple = "sour";
console.log(window.mango);
console.log(window.apple);

// Note 6:
// only variables declarations are hoisted not the initialization
// this will give undefined only

console.log(m);
var m = 10;

// Note 7: var's are hoisted and initialized with undefined where as lets are hoisted but not initialized with undefined,
// that's the reason we get ref error for let where as undefined for vars

// Note 8 : if you initialize let variables with the same name more than once it will throw syntax error

// let a = 10;
// let a = 12;

// Note 9: we can redeclare the vars
var p = 10;
var p = 12;
console.log(p);

// Note 10: debugging this below line of code is little complicated but let me tell you few things :
// if you debug this below lines of code properly : then you will get the proof that let's will have block level scopes and
// vars will have method level scopes when they are inside the method (now var's will not be attached to window object because it will have method level scope now not the global scope)
// so if you check inside the window object you will not see both a and b, a --> you can see inside the inside() method --> means method level scope
// b you will see inside a block --> block level scope
function display() {
  function inside() {
    if (true) {
      var a;
      let b;
      a = 10;
      b = 12;
      console.log(a, b);
    }
  }
  inside();
}
display();

// If you keep the debugger and see at the display() method invocation you can see that this display method is already been hoisted
// and it's attached to window object

// Conclusions :
// 1. let's are block scoped --> not attached to window object, they are also hoisted, but not initialized with undefined
// 2. vars's are --> method level scoped if inside the method or global scoped if they are outside the methods --> attached to window object when they are not inside method -->
// they are also hoisted, and they are also initialized with undefined ie. the reason you will not get unreferenced error rather you will get undefined as the value
