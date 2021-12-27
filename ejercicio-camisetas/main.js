"use strict";

console.log(">> Ready :)");

const shirtsListSection = document.querySelector(".js_shirtlist");
const cartListSection = document.querySelector(".js_cartlist");

// Variables globales

let data = [];
let dataCart = [];

// Parte global (se ejecuta cuando se carga/refresca la página)

fetch("https://beta.adalab.es/ejercicios-extra/api/eshop/v2/cart.json")
  .then((response) => response.json())
  .then((dataFromAPI) => {
    //console.log(dataFromAPI);
    data = dataFromAPI.cart.items;

    renderAllArticles();
  });

// Funciones fetch/mostrar la lista de artículos

function renderArticle(dataArticle) {
  // const dataArticle = {...};
  //console.log({dataArticle});

  shirtsListSection.innerHTML += `
    <article class="card">
      <img
        src="${dataArticle.imageUrl}"
        class="card__img"
        alt="Producto: ${dataArticle.name}"
      />
      <h3 class="card__title">${dataArticle.name}</h3>
      <p class="card__description">${dataArticle.price} €</p>
      <button class="card__btn js_add_shirt" data-name="${dataArticle.name}" title="Añadir este producto a la cesta">Añadir a la cesta</button>
    </article> `; //data-name es un gancho que lo interpolamos
}

function renderAllArticles() {
  shirtsListSection.innerHTML = "";

  /* for(  let i = 0  ;  i < data.length  ;  i++  ) {
    renderArticle( data[i] );
  }*/

  for (const eachShirtData of data) {
    console.log(eachShirtData.name);
    renderArticle(eachShirtData);
  }
  //se usa un bucle para el evento porque hay varios botones y se hace un queryselectorall.
  const addToCartButtonList = document.querySelectorAll(".js_add_shirt");

  for (const addToCartButton of addToCartButtonList) {
    addToCartButton.addEventListener("click", handleAddToCart);
  }
}

// Funciones Añadir al carrito

function handleAddToCart(event) {
  const selectedShirtName = event.currentTarget.dataset.name;

  // console.log(`Añadiendo al carrito "${selectedShirtName}"`);

  // console.log(data);

  const selectedShirtData = data.find((row) => row.name === selectedShirtName);

  // console.log(selectedShirtData);

  dataCart.push(selectedShirtData);

  renderCart();
}

function renderCart() {
  cartListSection.innerHTML = "";

  /*
  for( let i=0; i<dataCart.length; i++ ) {
    // datacart[i] === cartItem
    renderCartItem(dataCart[i]);
  }
  */

  for (const cartItem of dataCart) {
    renderCartItem(cartItem);
  }
}

function renderCartItem(cartItem) {
  cartListSection.innerHTML += `
    <tr>
      <td>${cartItem.name}</td>
      <td>${cartItem.price} €</td>
      <td>
        <button class="card__btn" title="Quitar una unidad más de este producto">-</button>
        1
        <button class="card__btn" title="Añadir una unidad más de este producto">+</button><button class="card__btn fas fa-trash" title="Eliminar este producto de la cesta"></button>
      </td>
      <td class="text-align-right">39 €</td>
    </tr>
  `;
}
