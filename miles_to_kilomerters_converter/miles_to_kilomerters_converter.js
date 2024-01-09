let convertType = "mile";
let title = document.getElementById("title");
let desc = document.getElementById("desc");

document.addEventListener("keydown", (e) => {
  let key = e.code;
  // alert(key);
  if (key === "KeyK") {
    convertType = "km";
    title.innerHTML = "MILES TO KILOMETERS CONVERTER";
    desc.innerHTML =
      "Type in a number of miles and click the button to convert the distance to kilometers.";
  } else if (key === "KeyM") {
    convertType = "mile";
    title.innerHTML = "KILOMETERS TO MILES CONVERTER";
    desc.innerHTML =
      "Type in a number of kilometers and click the button to convert the distance to miles.";
  }
});

document.getElementById("convert").addEventListener("submit", (e) => {
  e.preventDefault();

  const distance = parseFloat(document.getElementById("distance").value);
  const result = document.getElementById("result");

  if (!distance) {
    result.innerHTML = "Please provide a number!";
  } else {
    if (convertType === "mile") {
      const mile = (distance * 0.621371).toFixed(3);
      result.innerHTML = `${distance} Km(s) = ${mile} Mile(s)`;
    } else {
      const km = (distance * 1.609344).toFixed(3);
      result.innerHTML = `${distance} Mile(s) = ${km} Km(s)`;
    }
  }
});
