document.getElementById("button").addEventListener("click", loadText);

function loadText() {
  // Create XHR Object
  let xhr = new XMLHttpRequest();
  console.log(
    "before open: ",
    "readyState ",
    xhr.readyState,
    "status ",
    xhr.status,
    "status text ",
    xhr.statusText
  ); // before open:  readyState  0 status  0 status text

  //   Open - type, url/file async
  xhr.open("GET", "sample.txt", true);
  console.log(
    "after open: ",
    "readyState ",
    xhr.readyState,
    "status ",
    xhr.status,
    "status text ",
    xhr.statusText
  ); // after open:  readyState  1 status  0 status text

  // OPTIONAL - used for loaders
  xhr.onprogress = function (param) {
    //
    console.log(
      "after onprogress: ",
      "readyState ",
      xhr.readyState,
      "status ",
      xhr.status,
      "status text ",
      xhr.statusText
    ); // after open:  readyState  1 status  0 status text
  };

  xhr.onreadystatechange = function () {
    //
    console.log(
      "after onreadystatechange: ",
      "readyState ",
      xhr.readyState,
      "status ",
      xhr.status,
      "status text ",
      xhr.statusText
    ); // after open:  readyState  1 status  0 status text

    if (this.readyState == 4 && this.status == 200) {
      console.log(
        "after if: ",
        "readyState ",
        xhr.readyState,
        "status ",
        xhr.status,
        "status text ",
        xhr.statusText
      ); // after open:  readyState  1 status  0 status text
      document.getElementById("content").innerHTML = this.responseText;
      //   ;
    } else {
      console.log(
        "-------------after else =====>>>: ",
        "readyState ",
        xhr.readyState,
        "status ",
        xhr.status,
        "status text ",
        xhr.statusText
      ); // after open:  readyState  1 status  0 status text
    }

    //
  };

  //   xhr.onload = function (param) {
  //     //
  //     if (this.status == 200) {
  //       console.log(
  //         "after if - onload: ",
  //         "readyState ",
  //         xhr.readyState,
  //         "status ",
  //         xhr.status,
  //         "status text ",
  //         xhr.statusText
  //       ); // after if - onload:  readyState  4 status  200 status text  OK

  //       document.getElementById("content").innerHTML = xhr.responseText;

  //       //
  //     } else {
  //       console.log(
  //         "after else - onload: ",
  //         "readyState ",
  //         xhr.readyState,
  //         "status ",
  //         xhr.status,
  //         "status text ",
  //         xhr.statusText
  //       ); // after else - onload:  readyState  4 status  404 status text  Not Found
  //     }
  //   };

  console.log(
    "before send: ",
    "readyState ",
    xhr.readyState,
    "status ",
    xhr.status,
    "status text ",
    xhr.statusText
  ); // before send:  readyState  1 status  0 status text

  xhr.send();

  console.log(
    "after send: ",
    "readyState ",
    xhr.readyState,
    "status ",
    xhr.status,
    "status text ",
    xhr.statusText
  ); // after send:  readyState  1 status  0 status text

  //
}

// Get Json Object
document.getElementById("button2").addEventListener("click", loadUser);

function loadUser() {
  //
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "user.json", true);
  xhr.onload = function (param) {
    //
    if (this.status == 200) {
      console.log(typeof xhr.responseText); // String
      document.getElementById("content-2").innerHTML =
        xhr.responseText + "<br/><br/>";

      let strToObj = JSON.parse(xhr.responseText);
      console.log(typeof strToObj); // Object
      document.getElementById("content-2").innerHTML = xhr.responseText;

      //
      let output = "";

      output += `
      <ul>
        <li>Id: ${strToObj.id}</li>
        <li>Name: ${strToObj.name}</li>
        <li>Email: ${strToObj.email}</li>
      </ul>
      `;

      document.getElementById("content-2").innerHTML += output;
    }
  };

  xhr.send();
}

// Load Users
document.getElementById("button3").addEventListener("click", loadUsers);

function loadUsers() {
  //
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "users.json", true);

  xhr.onload = function (param) {
    //
    if (this.status == 200) {
      //
      console.log(typeof this.responseText); // String
      document.getElementById("content-3").innerHTML =
        this.responseText + "<br/><br/>";

      let strToObj = JSON.parse(this.responseText);
      console.log(typeof strToObj); // Object

      let output = "";
      strToObj.forEach((e) => {
        output += `
        <ul>
            <li>Name: ${e.id}</li>
            <li>Id: ${e.name}</li>
            <li>Email: ${e.email}</li><br/>
        </ul>`;
      });

      document.getElementById("content-3").innerHTML += output;

      //
    }
  };

  xhr.send();
}
