// evaluación M02 C09

// array de palabras
const words = [
  'californication',
  'plataforma5',
  'black',
  'summer',
  'flea',
  'aeroplane',
  'peppers',
  'unlimited',
  'arcadium',
  'love',
  'getaway',
  'stadium',
  'quixoticelixer',
  'quarter',
  'snow',
  'dylan',
  'zephyr',
  'funky',
  'chili'
]

// variables de etiquetas HTML
const palabraAleatoria = document.querySelector("#randomWord")
const input = document.querySelector("#text") // input
const timeSpan_id = document.querySelector("#timeSpan")
const score_id = document.querySelector("#score")
const end_game_container = document.querySelector("#end-game-container")

// variables globales
let segundos = 10 // segundos restantes
let score = 0 // record
let palabra; // palabra por adivinar

let seguir_jugando = true

// funcion randomWords que elige una plabra al azar dentro del array words
function randomWords() {
  const palabraAzar = words[Math.floor(Math.random() * words.length)]
  return palabraAzar
}

// función para escribir en el DOM
function addToDOM() {
  palabra = randomWords() // palabraAzar
  palabraAleatoria.innerHTML = palabra // variable global
  score_id.innerHTML = score // puntaje del juego
}
addToDOM() //invocando a la funcion addToDom

// funcion updateScore que suma el puntaje si acierta 
function updateScore() {
  score++
}

// inicio del juego
input.addEventListener("keyup", function (ev) {
  if (seguir_jugando) { // condicion para seguir jugando
    if (ev.keyCode == 13) {  // evento del teclado para el input al presionar el enter 
      if (input.value == palabra) { // condicion si palabra ingresada es igual a aleatoria
        updateScore() //se invoca funcion para el puntaje 
        segundos += 3 // se suman tres segundo al tiempo restante 
      } 
      input.value = '' //para limpiar el input
      addToDOM() // invocar a la funcion para que arroje otra palabra aleatoria
    } 
  }
})

// manipulación del tiempo
const timeInterval = setInterval(function () { //funcion que sirve para contar el tiempo usando la palabra reservada setInterval
  segundos--  //disminuir segundos de uno en uno
  timeSpan_id.innerHTML = `${segundos}seg` // se escriben en el html/Dom usando backsticks

  if (segundos == 0) { // si se acaba el tiempo o llega a cero
    clearInterval(timeInterval) // se pide detener la funcion del tiempo usando la palabra reservada clearInterval
    gameOver() //se invoca la funcion para terminar el juego
  }
}, 1000) //corresponde a 1 segundo

// funcion gameOver se termina el juego
function gameOver() { 
  seguir_jugando = false // para prohibir continuar jugando
  end_game_container.innerHTML = `
  <h1>Tiempo excedido</h1>
  <p>puntaje final de la partida: ${score}</p>
  <button onclick="location.reload()">Volvé a empezar</button>` //se insertan nuevas etiquetas al html para el puntaje y un boton que reinicia el juego, tambien con backstick.
}
