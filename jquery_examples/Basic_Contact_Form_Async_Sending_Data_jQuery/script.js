// //
// let formDataURL =
//   "https://cpe-web-assignments.ucdavis.edu/formprocessing/processor.php";

// $("#formdata").load(formDataURL);

// $("#myForm").validate();

// $("#myForm").submit(function (e) {
//   e.preventDefault();

//   if ($("#myForm").valid() == true) {
//     let dataString = $(this).serialize();
//     // console.log(dataString);
//     $.ajax({
//       type: "POST",
//       url: formDataURL,
//       data: dataString,
//       success: function (data) {
//         $("#formdata").html(data);
//         $("#myForm").clearForm();
//       },
//     });
//   }
// });

// //
// $.fn.clearForm = function () {
//   //
//   return this.each(function (e) {
//     //
//     let type = this.type;
//     let tag = this.tagName.toLowerCase();

//     if (tag == "form") {
//       return $(":input", this).clearForm;
//     }

//     if (
//       type == "text" ||
//       type == "password" ||
//       type == "email" ||
//       type == "url" ||
//       type == "textarea"
//     ) {
//       this.value = "";
//     } else if (type == "checkbox" || type == "radio") {
//       this.checked = false;
//     } else if (type == "select") {
//       this.selectIndex = -1;
//     }
//   });
// };

// Async / Await Version
// (function () {
//
"use strict";

const formProcessorUrl =
  "https://cpe-web-assignments.ucdavis.edu/formprocessing/processor.php";

const contactForm = document.getElementById("myForm");
contactForm.addEventListener("submit", validateForm);

function validateForm(e) {
  //
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const url = document.getElementById("url").value;
  const comments = document.getElementById("comments").value;

  const reName = /^[a-zA-Z]+(([\'\,\.\- ][a-zA-Z ])?[a-zA-Z]*)*$/;
  const reEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const reURL = /^[a-zA-Z0-9\-\.]+\.(com|org|net|mil|edu|COM|ORG|NET|MIL|EDU)$/;

  const allLabels = document.querySelectorAll("label");

  allLabels.forEach((eachLabel) => {
    eachLabel.style.color = "black";
  });

  let errors = 0;

  if (!reName.test(name)) {
    document.getElementById("name-label").style.color = "red";
    errors++;
    //
  } else if (!reEmail.test(email)) {
    document.getEleEmailById("email-label").style.color = "red";
    errors++;
    //
  } else if (url !== "" && !reURL.test(url)) {
    document.getEurlById("url-label").style.color = "red";
    errors++;
    //
  } else if (comments == "") {
    document.getElementById("comments-label").style.color = "red";
    errors++;
    //
  } else if (errors === 0) {
    sendData();
  }

  //
}

async function sendData() {
  //
  const data = new FormData(contactForm);
  const fetchPromise = await fetch(formProcessorUrl, {
    method: "POST",
    body: data,
  });

  const content = await fetchPromise.text();
  document.getElementById("formdata").innerHTML = content;
  const fields = document.querySelectorAll(".data");
  fields.forEach((eachField) => {
    eachField.value = "";
  });
}

//
// });
