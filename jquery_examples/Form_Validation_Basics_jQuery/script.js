document.getElementById("myform").onsubmit = validateFrom;

function validateFrom() {
  let reName = /^[a-zA-Z]+(([\'\,\.\- ][a-zA-Z ])?[a-zA-Z]*)*$/;
  let reEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  let reURL =
    /^(ftp:\/\/|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;

  document.getElementById("name-err").innerHTML = "";
  document.getElementById("email-err").innerHTML = "";
  document.getElementById("url-err").innerHTML = "";
  document.getElementById("comments-err").innerHTML = "";

  let counter = 0;

  if (!reName.test(document.getElementById("name").value)) {
    fixForm(document.getElementById("name"), "Please provide a proper name");
    counter++;
  }

  if (!reEmail.test(document.getElementById("email").value)) {
    fixForm(
      document.getElementById("email"),
      "Please type add a valid email address"
    );
    counter++;
  }

  let url = document.getElementById("url");
  if (url.value == "" && !reURL.test(url.value)) {
    fixForm(url, 'Please type a valid URL in the form of "http://example.com"');
    counter++;
  }
  if (document.getElementById("comments").value == "") {
    fixForm(
      document.getElementById("comments"),
      "Please provide some comments"
    );
    counter++;
  }

  if (counter > 0) return false;
  else return true;

  //
}

function fixForm(field, message) {
  let errorMessage = field.id + "-err";
  document.getElementById(errorMessage).innerHTML = message;
  document.getElementById(errorMessage).style.color = "red";
  document.getElementById(field.id).focus();
}
