// document.addEventListener("DOMContentLoaded", () => {
//   let alertButton = document.querySelector("#alert");
//   alertButton.addEventListener("click", () => {
//     alert("you just clicked me ...");
//   });
// });

// let alertButton = document.querySelector("#alert");
// alertButton.addEventListener("click", () => {
//   alert("you just clicked me ...");
// });

// let alertButton = document.getElementById("alert");
// alertButton.addEventListener("click", () => {
//   alert("you just clicked me ...");
// });

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}
