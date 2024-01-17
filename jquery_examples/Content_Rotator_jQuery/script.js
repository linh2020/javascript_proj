$(document).ready(function () {
  //
  let counter = 1;
  function contentRotator() {
    $(`#pet-container p:nth-child(${counter})`).fadeIn(2000, function () {
      //
      if ($(this).is("#pet-container p:last-child")) {
        setTimeout(() => {
          $(`#pet-container p:nth-child(${counter})`).fadeOut(
            2000,
            function () {
              //
              counter = 1;
              contentRotator();
            }
          );
        }, 7000);
      } else {
        setTimeout(() => {
          $(`#pet-container p:nth-child(${counter})`).fadeOut(
            2000,
            function (param) {
              //
              counter++;
              contentRotator();
            }
          );
        }, 7000);
      }
    });
  }
  contentRotator();
}, 7000);
