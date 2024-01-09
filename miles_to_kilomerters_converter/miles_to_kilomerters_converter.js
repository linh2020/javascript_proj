//
//
//

let form = document.getElementById("convert");
let res = document.getElementById("res");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let distance = document.getElementById("distance").value;

  if (isNaN(distance)) {
    res.innerHTML = "Please enter number!";
  } else {
    let km = distance * 1.609344;
    res.innerHTML = `${distance} mile(s) = ${km} Km(s)`;
  }
});
