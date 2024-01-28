//
$("#loaddata").click(function (e) {
  //
  $("#remotedata").html('<img src="./images/spinner.gif" alt="">');

  $.ajax({
    //
    url: "https://cpe-web-assignments.ucdavis.edu/remotedata/index.php",
    cache: false,
  }).done(function (data) {
    //
    $("#remotedata").html(data);
  });

  //
});
