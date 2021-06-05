// For this project you need to open in the browser and need to compare the browser output and the console input
// Synchronous Programming
console.log("First line of the code");
const square = (number) => number * number;
console.log(square(3));
console.log("Last line of the code");

// Async Programming
// Js is single threaded, synchronous in nature : because of this things the network calls will block the User interactions until there is a response from the server
// to solve this problem browsers manipulate js to be asynchronous in nature
// By default js is synchronous but the environments on which the js works makes it to behave
// asynchronously some time : to understand in detail go through evernote's article saying that js is synchronous or async

// Note 1: callbacks are just the functions that can be passed as an arguments, these functions will be called once after the specified task is completed
// Note 2 : All callbacks are not async in nature

console.log("First line of the async programming");
const test = () => {
  console.log("Inside the test function and will be executed immediately");
  setTimeout(() => {
    console.log("This will be executed after the timeout Preffered ");
  }, 5000);
};

test();

// ex 2: built in callback for the browser env
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#clickMe").addEventListener("click", () => {
    console.log("you just clicked the button");
  });
});
// from this example you can see that the addEventListener() method will takes a function as argument, and that's actually a callback function(the function you passed as an argument)

// Now finally we will come to very important example where you will understand what is the benefits of using the Promises or Async await syntax
//ex 3:
// query selector will return the element only if the dom loading is completed, dom loading (When there are files for the browsers they are parsed to display the content : this procedure is called domcontent loading)
let element;
document.addEventListener("DOMContentLoaded", () => {
  element = document.querySelector("#addElement");
  console.log(element);
});

const eatBreakFast = () => {
  console.log("Started eating the breakfast");
  setTimeout(() => {
    element.insertAdjacentHTML("beforeend", "<li>Ate Breakfast</li>");
  }, 5000);
};
const eatLunch = () => {
  console.log("Started eating the Lunch");
  setTimeout(() => {
    element.insertAdjacentHTML("beforeend", "<li>Ate Lunch</li>");
  }, 1000);
};
const eatDinner = () => {
  console.log("Started eating the Dinner");
  setTimeout(() => {
    element.insertAdjacentHTML("beforeend", "<li>Ate Dinner</li>");
  }, 2000);
};
//Note : For this if you see the output in the console you can say that js is synchronous, but if you see the output in the browser
// you can say that, its behaving asynchronously

eatBreakFast();
eatLunch();
eatDinner();

// What if we want to execute these things in the same order they have been called ?
// To solve the same issue we have three things in our belt : 1. callbacks 2. Promises 3.Async await
// what is the main purpose of the callback ? --> Ans is : To execute something after certain action is been completed
// Before explaining that let me go through the normal function call stack for js functions execution
// 1.Main is loaded into the stack where it contains all the things that were not there in functions so this execution context is called : global context
// 2. Local contexts : each time the methods been invoked they will have there own contexts for execution, just like pushing an item into the stack after main(global context)
// so now for our example 3 : All these methods are loaded in the global context (or the main stack) initially, and they will have there own stacks as an when they are invoked
// first eatBreakFast() is invoked so : its been loaded into the memory (pushed into the stack --> to form the local context) --> so this function will start execution
// But as soon as browser detects that there is an uncertain action in the function will seems to take little longer time(some time we don't even know the timings) then it pops this stack from main memory and is been loaded in webapi given by the browsers, if there is an event listeners they are added into event queue
// Basically there are five things that you need to remember 1. callstack 2.Heap mem (Dynamically allocated memory) 3.webapi (for http requests etc..) 4.Event queue 5.Job queue
// so now the poped function body of the eatBreakfast is been added in the webapi
// so now js go through the next lines of the code ie. the function call of eatLunch() the same things will happen again, they are stack loading of the function, pop and push in the webapi
// the same thing happens with the third function as well
// After all of this the call stack is empty now (even global stack is poped)
// In our case as they are asynchronous operations browsers execute the async code left out in the jobqueue and event queue once the call stack is empty, exactly which is empty in our situation
// event loop or some infinite code --> which is like a listener for an event trigger , which keeps on monitoring for the events and event queues
// now js or the event loop (Listener) first looks for jobqueue(given by browsers for handling promises) it will execute the code in the queue, then looks out for the event queue then it executes the code in the event loop as well
// conclusion : stack, heap ---> webapi ---> jobqueue or eventqueue --> stack or heap ... cycle repeats
// I would recommend going through this : https://medium.com/@Rahulx1/understanding-event-loop-call-stack-event-job-queue-in-javascript-63dcd2c71ecd

// Using the callback functions to achieve the above requirement : ie. eachBreakFast() --> eatLunch() --> eatDinner()
// Implementing the callbacks in the functions : this just means you want to call the method that you accepted as an argument at the appropriate place
const eatBreakFastWithCallBack = (callback) => {
  console.log("Started eating the breakfast callback implementation");
  setTimeout(() => {
    element.insertAdjacentHTML("beforeend", "<li>Ate Breakfast</li>");
    callback();
  }, 5000);
};
const eatLunchWithCallBack = (callback) => {
  console.log("Started eating the Lunch callback implementation");
  setTimeout(() => {
    element.insertAdjacentHTML("beforeend", "<li>Ate Lunch</li>");
    callback();
  }, 1000);
};
const eatDinnerWithCallBack = () => {
  console.log("Started eating the Dinner callback implementation");
  setTimeout(() => {
    element.insertAdjacentHTML("beforeend", "<li>Ate Dinner</li>");
  }, 2000);
};

// This code is literally very much messier, and even I will not be able to understand if I read it after 2-3 months
//you can even call this as the callback hell
// In order to achieve that : we need to call each of the functions inside the callback function so that once the function body is completed the other function is called
eatBreakFastWithCallBack(() => {
  eatLunchWithCallBack(() => {
    eatDinnerWithCallBack();
  });
});

// Just a note for java/c/c++ programmers :
/*
const hello = (keep this empty or use some variable does not matter no error is thrown by js) => {
  console.log("what is my name");
};

hello();
hello(12);
both of these above lines will not give any errors in js
*/

// Now lets learn about the promises
// raw syntax is

/*
return Promise((resolve, reject) => {
   1. do something asynchronous here
   2. some checking on whether the promise is served with valid data or not
   3. if served then call resolve otherwise call reject by passing the necessary info
  })
*/

// Promise is a java script class, the constructor of the promise will accept an higher order function with two parameters (both of those parameters also accepts functions)
// These arguments of the function passed to constructor (resolve and reject) are callback functions given by js, you need not to implement it
// as soon as you create an object the code inside an higher order function is executed --> we need to write this code while returning a promise --> this code is also called as an executor code or an async code
// at some point if we are writing a function which returns a promise then we also need to call either resolve or reject depending on the response we got
// We have the properties like status and result inside a promise object, when you call either of resolve or reject these will set status and result properties of the promise
// Depending on the result property either then or catch will be executed
// At this point just remember promises are an alternative syntaxes for achieving the same thing that we were achieving using callbacks
// in Promises error handling was made very simple --> these are introduced in es6
// the idea is the promise object is been returned by most of the libraries in js and using the promises is very easy (rather than implementing or returning a promise)
// usage syntax (Handling a returned promise): object.functioncall --> returns promise then
// object.functioncall.then(function1).catch(function2) --> function1 is executed when the promise is resolved
// function 2 is executed when the promise rejected, I will come to these resolve and reject lines by couple of minutes
// Most of the time we will never come across creating our own function that will return a promise, however it's always good to know about that
// this below example is to just give you an idea like : for the functions in js you can call just by name
// after that whether you pass something or not no errors will come

// And of course pls read about hoisting also to avoid the bugs in the code

// conclusions : Promise is a class, constructor of promise will accepts

const eatBreakFastWithPromise = () => {
  console.log("Started eating the breakfast promise implementation");
  return new Promise((resolve, reject) => {
    // executor code
    //let isSuccessFull = Math.random();
    let isSuccessFull = 1;

    setTimeout(() => {
      element.insertAdjacentHTML("beforeend", "<li>Ate Breakfast</li>");
    }, 5000);
    if (isSuccessFull > 0.5) {
      resolve("Hurry successful");
    } else {
      reject("Oops something went wrong !!");
    }
  });
};
const eatLunchWithPromise = () => {
  console.log("Started eating the lunch promise implementation");
  return new Promise((resolve, reject) => {
    // let isSuccessFull = Math.random();
    let isSuccessFull = 1;

    setTimeout(() => {
      element.insertAdjacentHTML("beforeend", "<li>Ate Lunch</li>");
    }, 5000);
    if (isSuccessFull > 0.7) {
      resolve("Hurry successful");
    } else {
      reject("Oops something went wrong !!");
    }
  });
};
const eatDinnerWithPromise = () => {
  console.log("Started eating the dinner promise implementation");
  return new Promise((resolve, reject) => {
    // let isSuccessFull = Math.random();
    let isSuccessFull = 1;

    setTimeout(() => {
      element.insertAdjacentHTML("beforeend", "<li>Ate Dinner</li>");
    }, 5000);
    if (isSuccessFull > 0.9) {
      resolve("Hurray !!! its successful");
    } else {
      reject(" Oops something went wrong !!");
    }
  });
};

// The above code talks about the implementation or creating a function that returns a promise, now we will learn how to make use of promise - Method 1 - Ineffective
// we know that when there is a resolve() method called at that time .then will be executed and whatever you pass from the resolve method, then method will have access to that value (How we don't know how the resolve method handles these things more over not necessary to know about that)
// when there is reject method executed .catch will be executed and the same story happens for catch also
// I have explained the promise in simpler way however I would highly recommend visiting : https://javascript.info/promise-basics for very good info, (I have this as the pdf as well)
// Finally lets write a code to make use of the promises returned
eatBreakFastWithPromise()
  .then((info) => {
    console.log("Promise successful while eating the breakfast " + info);
    eatLunchWithPromise()
      .then((info) => {
        console.log("Promise is successful while eating the Lunch " + info);
        eatDinnerWithPromise()
          .then((info) => {
            console.log("Promise is successful while eating dinner " + info);
          })
          .catch((err) => {
            console.log("Promise failed while eating the dinner " + err);
          });
      })
      .catch((err) => {
        console.log("Promise failed while eating the Lunch " + err);
      });
  })
  .catch((err) => {
    console.log("The promise was failed while eating the breakfast " + err);
  });
// But you know what : this above code is even uglier right ? lets make it cleaner, Method - 2 of Promises

eatBreakFastWithPromise()
  .then((info) => {
    console.log("eating breakfast with promise method2 implementation " + info);
    // If you execute this eatLunchWithPromise() function then of course it will return a promise right so look at the then chain now
    return eatLunchWithPromise();
  })
  .then((info) => {
    console.log("eating lunch with the promise method2 implementation " + info);
    return eatDinnerWithPromise();
  })
  .then((info) => {
    console.log(
      "eating dinner with the promise method2 implementation " + info
    );
  })
  .catch((err) => {
    console.log("oops something went wrong !!!" + err);
  });

// Is that making sense why did we used promises, promises allow us to chain and handle the errors so smartly

// Third approach and my favorite one : es7 introduced one
// very simple one
// Note 1 : Async keywords tells that the function is always going to return the promise
// Note 2 : You cant use the await in regular functions, you have to use it inside an async function
// Note 3 : Behind the scenes this also again works as the promises, but the syntactically it's the best
// Note 4 : To handle the errors I will use the try catch method
async function eatInOrder() {
  try {
    await eatBreakFast();
    await eatLunch();
    await eatDinner();
  } catch (err) {
    console.log("oops something went wrong");
  }
}
eatInOrder();
