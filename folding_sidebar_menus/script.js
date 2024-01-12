const subMenu = document.querySelectorAll("nav ul li ul");
hideSubMenu();

const mainMenu = document.querySelectorAll(".menuLink");
mainMenu.forEach((e) => {
  e.addEventListener("click", function (event) {
    event.preventDefault();

    const classNameSubMenu = event.target.nextElementSibling;
    if (classNameSubMenu.className == "hide-menu") {
      hideSubMenu();
      classNameSubMenu.className = "show-menu";
    } else {
      classNameSubMenu.className = "hide-menu";
    }
  });
});

function hideSubMenu() {
  subMenu.forEach((e) => (e.className = "hide-menu"));
}
