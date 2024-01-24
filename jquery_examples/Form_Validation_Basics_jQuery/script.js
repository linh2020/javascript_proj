//
$(document).ready(function () {
  //
  $("#myform").submit(function (e) {
    //
    let reName = /^[a-zA-Z]+(([\'\,\.\- ][a-zA-Z ])?[a-zA-Z]*)*$/;
    let reEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let reURL =
      /^(ftp:\/\/|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;

    //
    let name = $("#name").val();
    let email = $("#email").val();
    let url = $("#url").val();
    let comments = $("#comments").val();

    $("#myform span").html("").css("color", "red");
    let counter = 0;

    if (!reName.test(name)) {
      $("#name-err").html("Please enter a valid name");
      counter++;
    }

    if (!reEmail.test(email)) {
      $("#email-err").html("Please enter a valid email");
      counter++;
    }

    if (!reURL.test(url)) {
      $("#url-err").html("Please enter a valid URL");
      counter++;
    }

    if (comments == "") {
      $("#comments-err").html("Please give me a comment!");
      counter++;
    }

    if (counter > 0) e.preventDefault();
  });
  //
});
