"use strict";

//DECLARACIÓN DE VARIABLES GLOBALES
const palettesContainer = document.querySelector (".js-palettes-container");


let palettes = []; //defino un array vacío porque estoy viendo en el servidor que es un array con objetos

//1. Pintar una paleta:

const getData = function(){
	fetch ("https://beta.adalab.es/ejercicios-extra/js-ejercicio-de-paletas/data/palettes.json") //solo con cambiar la url que nos dan ya tenemos más paletas
		.then(function(response){
			//console.log(response);
			return response.json();
		})
		.then(function(data){
			//console.log(data);
			//console.log(data.version);
			//console.log(data.palettes);
			palettes = data.palettes;
			//console.log(palettes);
			paintPalettes(); //Mando pintar aquí las paletas, invocando la función, porque me interesa que sea en el momento de haber recogido los datos del servidor y habiéndolos transformado con JSON. No puedo pintar paletas hasta que el servidor no me de una respuesta
			//gracias al for de paintPalettes, pinta todas automáticamente que trae del servidor
			listenPalette(); //lo ideal es ponerla aquí para que cada función haga una cosa. también podríamos ponerlo en paint pero es peor
		})
}



//podríamos pintar el HTML dentro de la funcion getData, en el 2º then, pero mejor separar por funcionalidades

function paintPalettes(){ 
	let html = " "; //en la primera iteración va a estar vacío, pero en las posteriores va a tener ya contenido
	//hago un for porque cada vez que quiera coger algo de palettes que es un array, tengo que individualizar


	//TRANSFORMAMOS EL FOR OF EN UN FOR CLÁSICO PARA CREAR UNA I QUE VA CRECIENDO Y SE LO ASOCIAMOS A LA ID (un identificador único a cada li que sea dinámico).

/* for (let i=0; i<palettes.length; i++){
	const element= palettes [i];
	console.log(element); //para ver si me recorre el elemento
} */ //se que funciona así que lo modifico por el de abajo, por el for of

for (const palette of palettes){
			//Es bueno pintar cómo quedaría en HTML, en dicho archivo y así luego comparar ocn elements

		html += `<li class= "js-palette-item">`;
		html += `<h2 class= "palettes__name">${palette.name}</h2>`;
		html += `<div class= "palettes__colors">`;

		//los colores están en otro array, por lo que tengo que hacer otro for. En este caso for anidado.
		for (const color of palette.colors){
			html += `<div class="palettes__color" style="background-color: #${color}"></div>`
		}
		html += "</div>";
		html += "</li>";
	}
	//console.log(html);
	palettesContainer.innerHTML = html;
	//console.log ("pintar");
	//console.log ("palette"); Me va a decir que no está definida, porque está dentro del for
}

//Voy haciendo clases de css y luego se las meto en js (palettes__name, palettes__colors, palette__color)

const favoritesPalette = function(ev){
	console.log("escucho evento");
	const clicked = ev.currentTarget;
	console.log(clicked);
}


function listenPalette(){
	const palettesItem = document.querySelectorAll (".js-palette-item"); //la ponemos aquí y no como constante global apaorque aún no habría cogido la info del servidor
	for (const paletteItem of palettesItem){
		paletteItem.addEventListener("click", favoritesPalette);
	}
		
}


getData(); //esta da igual dónde la pongas porque una vez que ha llamado al servidor ya estaría
listenPalette();