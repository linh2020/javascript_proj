//
//
//

let btn = document.getElementById("cd-btn");
let res = document.getElementById("res");

btn.addEventListener("click", () => {
  let miles = document.getElementById("input-value").value;

  if (isNaN(miles)) {
    res.innerHTML = "Please enter number!";
  } else {
    let km = miles * 1.609344;
    res.innerHTML = `${miles} mile(s) = ${km} Km(s)`;
  }
});
