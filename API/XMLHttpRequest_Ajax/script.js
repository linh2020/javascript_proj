const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");

const sendHttpRequest = (method, url, data) => {
  //
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    if (data) xhr.setRequestHeader("Content-Type", "application/json");

    xhr.responseType = "json"; // convert json string to json object
    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };

    xhr.onerror = () => reject("Something went wrong");

    xhr.send(JSON.stringify(data));
  });

  return promise;
};

// "https://reqres.in/api/users"
const getData = () =>
  sendHttpRequest("GET", "https://reqres.in/api/users").then((responseData) =>
    console.log(responseData)
  );

// https://reqres.in/api/register
const sendData = () =>
  sendHttpRequest("POST", "https://reqres.in/api/register", {
    email: "eve.holt@reqres.in",
    // password: "pistol",
  })
    .then((responseData) => console.log(responseData))
    .catch((err) => console.log(err));

getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", sendData);
