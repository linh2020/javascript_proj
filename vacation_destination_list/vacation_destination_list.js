const detailsForm = document.querySelector("#vacation");

detailsForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const destName = event.target.elements["destination_name"].value;
  const destLocation = event.target.elements["location"].value;
  const destPhoto = event.target.elements["photo"].value;
  const destDesc = event.target.elements["description"].value;

  // for (let i = 0; i < detailsForm.length; i++) {
  //   detailsForm.elements[i].value = "";
  // }

  for (let i of detailsForm) i.value = "";

  const remove_current = document.getElementById("destination_container");
  remove_current.replaceChildren();

  const destCard = createDestinationCard(
    destName,
    destLocation,
    destPhoto,
    destDesc
  );

  //   Create a card
  document.querySelector("#right-container").appendChild(destCard);
}

function createDestinationCard(name, location, photoURL, description) {
  document.getElementById("r_title").innerText = "My Wish List";

  const card = document.createElement("div");
  card.setAttribute("class", "destination_container rounded");
  card.setAttribute("style", "background-color: #bbb");

  const img = document.createElement("img");
  img.setAttribute("class", "w-100 object-fit-cover p-3 rounded-4");
  img.setAttribute("alt", name);
  if (photoURL.length === 0) img.setAttribute("src", "./images/img-01.jpg");
  else img.setAttribute("src", photoURL);
  card.appendChild(img);

  //   Card body
  const cardBody = document.createElement("div");
  cardBody.setAttribute("class", "details text-start p-3 pt-0 mb-3");

  const destName = document.createElement("h3");
  destName.innerText = name;
  cardBody.appendChild(destName);

  const destLocation = document.createElement("h4");
  destLocation.innerText = location;
  cardBody.appendChild(destLocation);

  const destDesc = document.createElement("p");
  destDesc.innerText = description;
  cardBody.appendChild(destDesc);

  const btnRemove = document.createElement("button");
  btnRemove.innerText = "Remove";
  btnRemove.setAttribute("class", "btn btn-primary btn-sm");
  cardBody.appendChild(btnRemove);
  btnRemove.addEventListener("click", handleRemoveDestination);

  card.appendChild(cardBody);

  return card;
}

function handleRemoveDestination(event) {
  const card = event.target.parentElement.parentElement;
  card.remove();
}
