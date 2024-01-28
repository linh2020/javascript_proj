//
// Fetch and Promise with JSON
document.getElementById("loaddata-1").addEventListener("click", getDataFP);
function getDataFP() {
  //
  document.getElementById("remotedata-1").innerHTML =
    '<img src="./images/spinner.gif" alt="" /><hr>';

  const fetchPromise = fetch(
    "https://cpe-web-assignments.ucdavis.edu/remotedata/data.php"
  );

  fetchPromise.then(function (response) {
    response.json().then(function (data) {
      //
      document.getElementById("remotedata-1").innerHTML = outputHTML(data);
      // console.log(data);
    });
  });
  //
}

// Async and Await with JSON
document.getElementById("loaddata-2").addEventListener("click", getDataAA);

async function getDataAA() {
  //
  document.getElementById("remotedata-2").innerHTML =
    '<img src="./images/spinner.gif" alt="" /><hr>';

  const fetchPromise = await fetch(
    "https://cpe-web-assignments.ucdavis.edu/remotedata/data.php"
  );

  const data = await fetchPromise.json();
  document.getElementById("remotedata-2").innerHTML = outputHTML(data);
  //
}

function outputHTML(data) {
  //
  const html = `<div>
  <h2>${data.sleep_time} Seconds</h2>
  <p>${data.time_requested}</p>
  <p>${data.time_processed}</p>
  <hr>  
  </div>`;

  return html;
}
