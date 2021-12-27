//SACAR DE UNA API UN LISTADO, BUSCAR Y MOSTRAR RESULTADO

// 1º Traer del html lo que necesito
// 2º Hacer evento que quiero
// 3º Funcion fetch para la api
// 4º Funcion para mostrar los datos en el html.
// 5º Funcion del evento que llama a la funcion de mostrar

"use strict";
console.log("vamos alla");

// 1º Traigo del html lo que necesito para js

const listElement = document.querySelector(".js_list");
const searchInput = document.querySelector(".js_search");
console.log(searchInput);

// 3º funcion fetch para la api (que llama a la funcion de pintar html)

let data = [];
fetch("https://randomuser.me/api/?results=50")
  .then((Response) => Response.json())
  .then((dataApi) => {
    data = dataApi.results;
    render();
  });

// 4º funcion para pintar en el html

function render() {
  let userSearch = searchInput.value;

  const userFiltered = data
    .filter((user) => user.name.first.toLowerCase().includes(userSearch))
    .map((user) => user.name.first.toLowerCase());

  listElement.innerHTML = "";
  for (const item of userFiltered) {
    listElement.innerHTML += `<li> ${item}</li>`;
  }
}

// 5º funcion del evento
function handleKeyup(ev) {
  render();
}

// 2º evento

searchInput.addEventListener("keyup", handleKeyup);
