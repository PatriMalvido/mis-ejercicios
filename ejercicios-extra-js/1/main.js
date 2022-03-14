"use strict";

console.log("Alla vamos");

const textName = document.querySelector("js_form_label");
const inputName = document.querySelector("js_form_input");
const resultName = document.querySelector("js_result");

let data = [];

fetch(
  "https://beta.adalab.es/ejercicios-extra/js-funciones-y-parametros-desde-cero/data.json"
)
.then(response => response.json())
.then (dataFromApi => {
    console.log(dataFromApi);
    data=dataFromApi.results;
    showAllText();
})

function showAllText (){
    for (const eachText of data){
        console.log(eachText);
        
      
    }
}