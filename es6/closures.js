// // Closures : source : Akshay saini youtube
// //-----------------------
// // Here in this section we will learn about the closures
// // Definition : The function bundled along with it's lexical scope is called closure
// // variable scope always flows from inside to outside or inward to outwards

// function x() {
//   let a = 10;
//   function y() {
//     console.log(a);
//   }
//   y();
// }
// x();
// // We are able to access a from y how ?
// // It's because of closure, that's the function y will form a closure which contains a as the variable

// // Note 1 : closure seems confusing when there is a function which returns another function
// function display() {
//   let m = 20;
//   return function displayNumber() {
//     console.log(m);
//   };
// }
// let displayNumber = display();
// displayNumber();
// // the output of the above code will be 20, it's because when ever the function is returned
// // it returns a closure (function + lexical scope)

// // Note 2 : guess the output
// function first() {
//   var q = 2000;
//   function second() {
//     console.log(q);
//   }

//   q = 100;
//   return second;
// }
// first()();
// // output is : 100

// // Note 3 :
// function first1() {
//   var q = 2000;
//   return function second1() {
//     console.log(q);
//   };

//   q = 100;
// }
// first1()();

// // now the output is : 2000, ie because the function is returned before the value of q is being changed
// // it would have given the output 100 if the code is as shown below

// function first2() {
//   var q = 2000;
//   q = 100;
//   return function second2() {
//     console.log(q);
//   };
// }
// first2()();

// Note : You can imagine the closure as a closed box which contains the function and it's lexical scope
// in the above example the if you see the body of function second2() you can see that it has access to q
// so q will come in the lexical scope, so when the function first2() returns second2() it will also return the lexical scope of the second2() which is called a closure

// Why you need closure : if the function is working when it's inside another then it should work in the same manner when that function is returned by the function also

// Part 2
// now we will learn one of the famous interview questions --> closures + setTimeOut()

function print() {
  setTimeout(function () {
    console.log("Hello");
  }, 2000);
}
print();
// we know that the above code will print Hello after 2sec, which we covered in async programming

// ex : print 1,2,3,4 each number on the console every after one second
// below is the right program for the same, I will come to it later but just for time being lets replace the let by var and see what will happen

// for (let index = 0; index < 4; index++) {
//   setTimeout(function () {
//     console.log(index);
//   }, 1000 * index);
// }

for (var i = 0; i < 4; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000 * i);
}

// whenever you replace let by var, the output got changed, and the output is : 4,4,4,4
// seems surprising right, but that's true
// this is one of the fantastic example of debugging, you have to learn debugging the code to be a good dev
// tips : when you ivoke a function it will be pushed into the stack (incase of setTimeOut() they are invoked after certain time until they are invoked they will not come under stack so that copy of the code inside setTimeOut will be given to event queue or jobqueue)
// break point --> program will be halted when it reached the break point
// step over --> Just execute that line, if there is a function execute that function don't go inside
// step into --> go inside the function if there is a function call
// step out --> step out of current function
// these type of debuggers are called, step through debuggers
// resume --> resume the execution until the next breakpoint or the exception
// when ever you are debugging mainly look for callstack and the variable values either in local scope or in global scope (inside the window object)

// IMP ----->
// Now come to the main point why var has produced the different output :
// The ans is that, the var is hoisted and attached with the global object or the window object when it's not inside a function
//as it's attached with the window object, when you debug you can see that every time you come across the setTimeOut() method, it will return a pointer or a ref to a window object inplace of i, instead of the actual value
// as you pass the ref for i (ref for window object) when the event loops comes back to execute the callback function before that the i value is already incremented to 4,
// so when this call back function is executed 4 is been returned

// IMP ---> you can actually ask one more doubt here ie. regarding
// 1000 * i, why setTimeOut() will be executed after 1000, 2000, 3000, 4000 ms rather than executing each time after 4000ms,
// the ans for the doubt is : only the body of the function which is accepted by setTimeOut will be executed after the specified interval (asynchronously), but i*1000 is another
// parameter of setTimeOut(function, time interval) --> which will be executed by the js at the same time or synchronously
//so in our case each time when one copy of the setTimeOut is been sent to event queue, the second parameter ie. i*1000 is executed and sent to the event queue
// ex. for the first time setTimeOut(function, 1000), second time setTimeOut(function, value of i is 2 this time so 2* 1000 = 2000)
// Just to conclude this, you can say only the call back function of setTimeOut() is executed asynchronously but the parameters of the setTimeOut executed at the same time when they are poped and loaded into event queue

// You can ask how are they related with closures, they should be related with hoisting right ?
// ans : they are related with closure also, closure is the thing which enables one super interesting thing in the process of poping the async code from the call stack and pushing it to event queue
// what is that interesting thing is : it popsup the setTimeOut() method and loads the setTimeOut() into the event queue ---> with it's lexical scope
// meaning it loads the setTimeOut() along with the lexical scope ---> in the lexical scope of the setTimeOut() this variable i is hoisted and the as it's hoisted in the global scope it's attached to the window object,
// as this is attached to the window object --> this it self will cause the diff output here

// IMP --> so that's why always remember when there is a var type of variable in the global scope it's attached with the window object and at that time it acts as a non primitive
