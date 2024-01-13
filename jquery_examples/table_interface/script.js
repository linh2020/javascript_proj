$(document).ready(function (event) {
  $("#tabs ul li a").click(function (param) {
    $("#tabs ul li a").css({
      background: "#a2a2a2",
      color: "#cecece",
    });

    $(this).css({
      background: "#eaeaea",
      color: "#333",
    });

    const thisTab = $(this).attr("href");

    $("#tabs > div:visible").fadeOut(200, function () {
      $(thisTab).fadeIn(200);
    });
  });
});
