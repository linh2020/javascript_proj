//
document.getElementById("loaddata").addEventListener("click", getData);

function getData() {
  //
  document.getElementById("remotedata").innerHTML =
    '<img src="./images/spinner.gif" alt="" />';

  const fetchPromise = fetch(
    "https://cpe-web-assignments.ucdavis.edu/remotedata/data.php"
  );

  fetchPromise.then(function (response) {
    response.json().then(function (data) {
      //
      document.getElementById("remotedata").innerHTML = outputHTML(data);
      // console.log(data);
    });
  });
  //
}

function outputHTML(data) {
  //
  const html = `<div>
  <h2>${data.sleep_time} Seconds</h2>
  <p>${data.time_requested}</p>
  <p>${data.time_processed}</p>  
  </div>`;

  return html;
}
