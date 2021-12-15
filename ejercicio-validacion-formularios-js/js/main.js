"use strict";
console.log("bla bla bla");

let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  email = id("email"),
  password = id("password"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

  

//FUNCION DE VALIDACION DEL FORMULARIO
//id: dentificador
//serial: apunta a todas las clases(error,succes y failure icons)
//mensaje: imprime en mensaje dentro de la clase error
//id.value.trim() : va a borrar todos los espacios extra del valor que el usuario ingresa
let engine = (id, serial, message) => {
    if (id.value.trim() === "") {
      errorMsg[serial].innerHTML = message;
      id.style.border = "2px solid red";
  
      // icons
      failureIcon[serial].style.opacity = "1";
      successIcon[serial].style.opacity = "0";
    } else {
      errorMsg[serial].innerHTML = "";
      id.style.border = "2px solid green";
  
      // icons
      failureIcon[serial].style.opacity = "0";
      successIcon[serial].style.opacity = "1";
    }
  };

//EVENTO DE ENVIAR

form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    engine(username, 0, "Username cannot be blank");
    engine(email, 1, "Email cannot be blank");
    engine(password, 2, "Password cannot be blank");
  });
