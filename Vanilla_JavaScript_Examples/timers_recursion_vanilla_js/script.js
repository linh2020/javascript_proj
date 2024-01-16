$(document).ready(function () {
  //
  //
  let theDiv = document.getElementById("thediv");
  let content = "<p>adding another paragraph</p>";

  let timer = setInterval(() => {
    theDiv.innerHTML += content;
  }, 1500);

  document.getElementById("stop").addEventListener("click", function () {
    clearInterval(timer);
  });
});
