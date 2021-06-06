// remeber we attached many files to a single html so variables may conflict, ultimately js is executed as the long single page code
// Destructuring allows pulling out certain properties from arrays or objects
const arr1 = [2, 3];
[value1, value2] = arr1;
console.log("we are learning the destructuring");
console.log(value1);
console.log(value2);

// ex2 :
[value3, value4] = [4, 5];
console.log(value3);
console.log(value4);

// ex3 : as we are putting semicolon at the end of the line we need to enclose this within parenthesis
({ item } = { item: "egg", price: 7 });
console.log(item);
