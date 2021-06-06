// ... --> is called the spread and rest operator depending on where we use it
// Spread operator : As the name suggests it allows an iterables like an array or string to be expanded in places
// Most commonly this operator is used with arrays
// Kind of toArray you can say, but not exactly
// Note 1 : Spread Operator :
const arr = [1, 2, 3, 4];
const newArr = [arr, 4];
// [[1,2,3,4],4]
console.log(newArr);
const newArr2 = [...arr, 4];
// [1,2,3,4,4]
console.log(newArr2);

// Note 2 : Rest Operator (merge operation): to merge the elements passed, into an array

const display = (...args) => {
  args.forEach((element) => {
    console.log(element);
  });
};
display(1, 2, 3, 4, 5, 6);

// Basic functionality is the same but we can use the same operator for various purposes
// 1. copying the elements from object or array
const person = {
  name: "Max",
  roll: "dev",
};

const person2 = {
  ...person,
  display() {
    console.log("Hello");
  },
};
console.log(person2);
person2.display();
// 2. Removing the duplicate elements in an array
const numbers1 = [1, 2, 3, 1, 2, 4, 5];
const duplicateRemoved = [...new Set(numbers1)];
// without the spread operator new Set(numbers1) would have returned an object of set, this spread will convert them into the values
// [1,2,3,4,5]
console.log(duplicateRemoved);

// 3. String to character array
const name = "bhagyaraj";
const charNames = [...name];
console.log(charNames);
