//
$(window).on("load", function () {
  //
  "use strict";
  //
  const imageCount = $("#slider ul li").length;
  const imageWidth = $("#slider ul li img").first().width();
  const totalWidth = imageCount * imageWidth + "px";

  let leftPosition = 0;
  let counter = 0;

  $("#slider ul").css("width", totalWidth);

  // timer - solution 1
  // setInterval(() => {
  //   counter++;
  //   if (counter == imageCount) counter = 0;
  //   leftPosition = `-${counter * imageWidth}px`;
  //   $("#slider ul").animate({ left: leftPosition }, 700, "easeInQuad");
  // }, 3000);

  // timer - solution 2
  let mySlider = setInterval(slider, 3000);

  function slider() {
    counter++;
    if (counter == imageCount) counter = 0;
    leftPosition = `-${counter * imageWidth}px`;
    $("#slider ul").animate({ left: leftPosition }, 700, "easeInQuad");
  }

  document
    .getElementById("slider")
    .addEventListener("mouseover", function (param) {
      clearInterval(mySlider);
    });

  document
    .getElementById("slider")
    .addEventListener("mouseout", function (param) {
      mySlider = setInterval(slider, 3000);
    });

  //
});
