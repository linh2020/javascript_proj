//
//
const rows = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "r",
  "s",
  "t",
];

// left side
let html = "";
let counter = 1;

rows.forEach((row) => {
  //
  html += `<div class="alpha"><div class="label">${row}</div></div>`;

  for (let i = 0; i < 3; i++) {
    html += `<div id="${row + counter}">${counter}</div>`;
    counter++;
  }
  counter += 12;
});

document.getElementById("left").innerHTML = html;

// right side
// html = "";
// counter = 1;

// rows.forEach((row) => {
//   //
//   counter += 12;
//   for (let i = 0; i < 3; i++) {
//     html += `<div id="${row + counter}">${counter}</div>`;
//     counter++;
//   }
//   html += `<div class="label">${row}</div>`;
// });

// document.getElementById("left").innerHTML = html;
