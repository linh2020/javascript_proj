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

  let sliderInterval = setInterval(() => {
    //
    counter++;
    if (counter == imageCount) counter = 0;

    leftPosition = `-${counter * imageWidth}px`;
    $("#slider ul").animate({ left: leftPosition }, 700, "easeInQuad");
  }, 2000);

  $("#slider ul").css("width", totalWidth);

  const slider = document.querySelector("#slider ul li img");

  // slider.addEventListener("mouseout", function (e) {
  //   //
  //   clearInterval(sliderInterval);
  // });

  slider.addEventListener("mouseover", function (e) {
    //
    clearInterval(sliderInterval);
  });

  // slider.addEventListener("mouseleave", function (e) {
  //   //
  //   () => sliderInterval();
  // });

  // /////////////////////////////////////////////////////////////

  //   next button
  // $("#next").click(function (e) {
  //   e.preventDefault();

  //   counter++;
  //   if (counter == imageCount) counter = 0;

  //   leftPosition = `-${counter * imageWidth}px`;
  //   $("#slider ul").animate({ left: leftPosition }, 700, "easeInQuad");
  // });

  //   previous button
  // $("#previous").click(function (e) {
  //   e.preventDefault();

  //   counter--;
  //   if (counter < 0) counter = imageCount - 1;
  //   leftPosition = `-${counter * imageWidth}px`;
  //   $("#slider ul").animate({ left: leftPosition }, 700, "easeInQuad");
  //   console.log(211);
  // });

  //
});
