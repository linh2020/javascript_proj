// Best version
let images = [1, 2, 3, 4, 5];
let currentImg = 0;

let myImg = document.getElementById("img");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

// myImg.setAttribute("src", `./images/${images[0]}.jpg`);

prev.addEventListener("click", () => {
  currentImg--;
  if (currentImg < 0) currentImg = images.length - 1;
  myImg.setAttribute("src", `./images/${images[currentImg]}.jpg`);
});

next.addEventListener("click", () => {
  currentImg++;
  if (currentImg > images.length - 1) currentImg = 0;
  myImg.setAttribute("src", `./images/${images[currentImg]}.jpg`);
});

// Another version
// let images = [1, 2, 3, 4, 5];

// let myImg = document.getElementById("img");
// let prev = document.getElementById("prev");
// let next = document.getElementById("next");

// myImg.setAttribute("src", `./images/${images[0]}.jpg`);

// prev.addEventListener("click", () => {
//   let n = myImg.getAttribute("src").substring(9, 10);
//   --n;
//   if (n < 1) {
//     n = 5;
//   }
//   myImg.setAttribute("src", `./images/${images[--n]}.jpg`);
// });

// next.addEventListener("click", () => {
//   let n = myImg.getAttribute("src").substring(9, 10);
//   n++;
//   if (n > 5) {
//     n = 1;
//   }
//   myImg.setAttribute("src", `./images/${images[--n]}.jpg`);
// });
