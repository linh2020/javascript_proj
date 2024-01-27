//
document.getElementById("loaddata").addEventListener("click", getData);

// AJAX Getting Data
function getData() {
  //
  const req = new XMLHttpRequest();
  const url = "https://cpe-web-assignments.ucdavis.edu/remotedata/index.php";

  req.onreadystatechange = function (param) {
    //
    useResponse(req);
  };

  req.open("GET", url, true);
  req.send();
}

//   AJAX Processing Data
function useResponse(req) {
  //
  if (req.readyState == 4) {
    if (req.status == 200) {
      document.getElementById("remotedata").innerHTML = req.responseText;
    }
  } else {
    document.getElementById("remotedata").innerHTML =
      '<img src="./images/spinner.gif"/>';
  }
}
