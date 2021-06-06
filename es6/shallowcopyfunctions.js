// Primitives : All the normal datatypes
// ref or secondary : other than primitives
// Primitive variable holds the value where as ref variables holds the ref to an object or an address of an object or pointer to an object
console.log("We are learning the shallow copy wala functions now");
object1 = {
  name: "raj",
  age: 22,
};
const array1 = [2, 3, 4, object1];
// Note : 1 about slice method
// slice(starting point, ending point excluding the ending element)
// slice is a function which  returns a brand new array with the shallow copies :what does shallow copy mean will learn in few minutes
array2 = array1.slice(2);
console.log(array2);
array2[1].name = "Ramesh";
console.log(object1);
// by executing the above lines of code, the original object object1 got mutated, it's because
// when slice returns a brand new array it will return a shallow copy of that brand new array, by the word shallow copy means
// only the value for the object ref is copied or in other words only the address of an object is copied not the properties of an object
// If you have learnt about the shallow cloning in java then, it's the same concept here too
// when slice returned an array, in the elements of an array in place of object1 it just returned a reference rather than a cloned object which should have contain the same props as that of object1
// because of this reason the ref points to the same object1 object, so when you change the value in the returned array, it actually mutates the original array

// conclusion : that means slice function acts as a mutating function for the ref type elements and it acts as a non mutating function for the primitives

// Note 2 : concat method
// even this concat method of an array is also a shallow copy function
object2 = {
  gender: "male",
};
array3 = [1, 2, 3, object2];
array4 = [2, 3];
array5 = array3.concat(array4);
console.log("learning about concat");
console.log(array5);
array5[3].gender = "female";
console.log("logging in the object 2");
console.log(object2);
// output is : female, the explanation is same as the previous one, Just remember about this
// I would highly recommend learning the array functions from MDN

// Note 3 : Interesting example : map() methods behavior depends on how you implement it
object3 = {
  value: 1,
};
console.log(
  "learning about the map function and logging the object three before the map function execution "
);
console.log(object3);
array6 = [object3];
// below lines of implementation of the map method makes it to return a brand new array with shallow copies
// array7 = array6.map((element) => {
//   return element;
// });

// Lets make the map method to not return shallow copy rather return the deep copy of the object
array7 = array6.map((element) => {
  return { ...element };
});
array7[0].value = 2;
console.log(object3);
console.log(array7[0]);

// So map method can be a function which return the shallow object copies or it can return a deep object copy depending on
// how we implement it
