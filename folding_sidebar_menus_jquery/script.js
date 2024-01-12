// const subMenu = document.querySelectorAll("nav ul li ul");
// hideSubMenu();

// const mainMenu = document.querySelectorAll(".menuLink");
// mainMenu.forEach((e) => {
//   e.addEventListener("click", function (event) {
//     event.preventDefault();

//     const classNameSubMenu = event.target.nextElementSibling;
//     if (classNameSubMenu.className == "hide-menu") {
//       hideSubMenu();
//       classNameSubMenu.className = "show-menu";
//     } else {
//       classNameSubMenu.className = "hide-menu";
//     }
//   });
// });

// function hideSubMenu() {
//   subMenu.forEach((e) => (e.className = "hide-menu"));
// }

// jQuery
$(document).ready(function (event) {
  $("nav ul li ul").hide();

  $(".menuLink").click(function (e) {
    let subMenu = $(this).next("ul");
    $("nav ul li ul").not(subMenu).hide();

    subMenu.toggle();
  });
});
