let detailsForm = document.querySelector("#vacation");

detailsForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  let destName = event.target.elements["destination_name"].value;
  let destLocation = event.target.elements["location"].value;
  let destPhoto = event.target.elements["photo"].value;
  let destDesc = event.target.elements["description"].value;

  let remove_current = document.getElementById("destination_container");
  remove_current.replaceChildren();

  // for (let i = 0; i < detailsForm.length; i++) {
  //   detailsForm.elements[i] = "";
  //   console.log(detailsForm.elements[i]);
  // }

  let destCard = createDestinationCard(
    destName,
    destLocation,
    destPhoto,
    destDesc
  );

  console.log(destCard);

  //   Create a card
  // let wishListContainer = document.getElementById("main-content");
  // if (wishListContainer.children.length === 0) {
  //   document.getElementById("title").innerHTML = "My Wish List";
  // }

  // document.querySelector("#destination_container").appendChild(destCard);
  document.querySelector("#right-container").appendChild(destCard);
}

function createDestinationCard(name, location, photoURL, description) {
  document.getElementById("r_title").innerText = "My Wish List";

  let card = document.createElement("div");
  // card.setAttribute("className", "card");
  card.setAttribute("class", "destination_container rounded");
  card.setAttribute("style", "background-color: #bbb");

  let img = document.createElement("img");
  img.setAttribute("class", "w-100 object-fit-cover p-3");
  img.setAttribute("alt", name);

  if (photoURL.length === 0) img.setAttribute("src", "./images/img-01.jpg");
  else img.setAttribute("src", photoURL);

  card.appendChild(img);

  //   Card body
  let cardBody = document.createElement("div");
  cardBody.setAttribute("class", "details text-start p-3 pt-0 mb-3");

  let destName = document.createElement("h3");
  destName.innerText = name;
  cardBody.appendChild(destName);

  let destLocation = document.createElement("h4");
  destLocation.innerText = location;
  cardBody.appendChild(destLocation);

  let destDesc = document.createElement("p");
  destDesc.innerText = description;
  cardBody.appendChild(destDesc);

  let btnRemove = document.createElement("button");
  btnRemove.innerText = "Remove";
  btnRemove.setAttribute("class", "btn btn-primary btn-sm");
  cardBody.appendChild(btnRemove);

  btnRemove.addEventListener("click", handleRemoveDestination);

  card.appendChild(cardBody);

  return card;
}

function handleRemoveDestination(event) {
  let card = event.target.parentElement.parentElement;
  card.remove();
}
