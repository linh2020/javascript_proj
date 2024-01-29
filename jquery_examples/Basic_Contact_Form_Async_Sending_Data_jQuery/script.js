//
let formDataURL =
  "https://cpe-web-assignments.ucdavis.edu/formprocessing/processor.php";

$("#formdata").load(formDataURL);

$("#myForm").validate();

$("#myForm").submit(function (e) {
  e.preventDefault();

  if ($("#myForm").valid() == true) {
    let dataString = $(this).serialize();
    // console.log(dataString);
    $.ajax({
      type: "POST",
      url: formDataURL,
      data: dataString,
      success: function (data) {
        $("#formdata").html(data);
        $("#myForm").clearForm();
      },
    });
  }
});

//
$.fn.clearForm = function () {
  //
  return this.each(function (e) {
    //
    let type = this.type;
    let tag = this.tagName.toLowerCase();

    if (tag == "form") {
      return $(":input", this).clearForm;
    }

    if (
      type == "text" ||
      type == "password" ||
      type == "email" ||
      type == "url" ||
      type == "textarea"
    ) {
      this.value = "";
    } else if (type == "checkbox" || type == "radio") {
      this.checked = false;
    } else if (type == "select") {
      this.selectIndex = -1;
    }
  });
};
