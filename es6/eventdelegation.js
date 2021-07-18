// event delegation is the way to reduce the burden of defining the events on each of the elements
// it uses the concept of event bubling so that the events defined on the child elements will be propogated till the parent one
// As the events are propogated till the parent element, it's enough to add the single listener on the parent element in some situations
// Just remeber that all the events will not be bubbled up
// We recommend you, using the event delegation as much as possible

// let input = document.querySelector("#inputbox");
// console.log(input);
// input.style.backgroundColor = "blue";

// Without event delegation

// Let me write a function which converts everything you type in an input box to uppercase
// input.addEventListener("keyup", (event) => {
//   event.target.value = event.target.value.toUpperCase();
// });

// Now if we want to define the same thing for another text box then you need to either write another function or you need to use alternate methods
// so to avoid that let me use the event delegation here

// With event delegation :
// I will add the event on the parent div element rather than the particular item

// this below line of code will explain how the event bubling will happen, due to event bubling
let divElement = document.querySelector(".eventdelegation");
console.log(divElement);
// divElement.addEventListener("keyup", (event) => {
//   event.target.value = event.target.value.toUpperCase();
// });

// but there is a problem with the above lines of code the issue is that this listener will work for all the child elements, to show that let me add one more input text box
//but what if we don't want this listener to work for all the inputs
// we can add the condition for the event listener
divElement.addEventListener("keyup", (event) => {
  // Here we need to write the condition
  // checkout the html, we have used the data attributes to differentiate between the elements types
  // and with the help of single event listener will work for all the events on the elements with the data attr
  if (event.target.dataset.upperCase != undefined) {
    event.target.value = event.target.value.toUpperCase();
  }
});
