//
//
//

const tabs = document.querySelectorAll("#tabs > ul > li > a");
tabs.forEach((element) => {
  element.addEventListener("click", selectTab);
});

function selectTab(event) {
  event.preventDefault();

  tabs.forEach((element) => {
    element.removeAttribute("class");
  });

  event.target.className = "active";

  const thisTab = event.target.getAttribute("href");

  const oldContent = document.querySelector(".visible");
  oldContent.className = "hidden";

  const thisContent = document.querySelector(thisTab);
  thisContent.className = "visible";
}
