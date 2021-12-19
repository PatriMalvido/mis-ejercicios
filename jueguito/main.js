//----------------------------------

//ESTÁ SIN TERMINAR

//-----------------------------------

const squares = document.querySelectorAll(".square");
const cat = document.querySelectorAll(".cat");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");

let result = 0;
let hitPosition;
let currentTime = 10;
let timerId = null;

//Funcion para generar el movimiento aleatorio
function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("cat");
  });

  let randomSquare = squares[Math.floor(Math.random() * 9)];
  randomSquare.classList.add("cat");

  hitPosition = randomSquare.id;
}
//Evento del click del raton al tocar el square y sumar la puntuacion del marcador
squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id === hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
    }
  });
});

//Funcion para el tiempo del movimiento
function moveCat() {
  clearInterval(timerId);
  timerId = setInterval(randomSquare, 1000);
}

moveCat();

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;
  if (currentTime === 0) {
    clearInterval(countDownTimerId);
    alert("GAME OVER! Your final score is" + result);
    currentTime = 10;
    result = 0;
    moveCat();
  }
}

let countDownTimerId = setInterval(countDown, 1000);
