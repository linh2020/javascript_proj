//
document.getElementById("loaddata").addEventListener("click", getData);

function getData() {
  //
  document.getElementById("remotedata").innerHTML =
    '<img src="./images/spinner.gif" alt="">';

  const fetchPromise = fetch(
    "https://cpe-web-assignments.ucdavis.edu/remotedata/index.php"
  );

  // console.log(fetchPromise);

  fetchPromise.then(function (response) {
    //
    // console.log(response.text());
    response.text().then(function (text) {
      //
      document.getElementById("remotedata").innerHTML = text;
    });
  });
}
