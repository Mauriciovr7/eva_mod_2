// evaluación M02 C09

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
// etiquetas HTML
const palabraAleatoria = document.querySelector("#randomWord")
const input = document.querySelector("#text") // input
const timeSpan_id = document.querySelector("#timeSpan")
const score_id = document.querySelector("#score")
const end_game_container = document.querySelector("#end-game-container")

// variables globales
let segundos = 10 // segundos restantes
let score = 0 // 
let palabra; // palabra por adivinar

let tiempo = 10000 // 10 segundos

let seguir_jugando = true

// funcion randomWords
function randomWords() {
  const palabraAzar = words[Math.floor(Math.random() * words.length)]
  return palabraAzar
}

function addToDOM() {
  palabra = randomWords() // palabraAzar
  palabraAleatoria.innerHTML = palabra // variable global
  // segundos
  score_id.innerHTML = score
}
addToDOM()

// funcion updateScore **************************************

function updateScore() {
  score++
}

// inicio del juego

input.addEventListener("keyup", function (ev) {
  if (seguir_jugando) {
    if (ev.keyCode == 13) {  // evento input
      if (input.value == palabra) {
        updateScore()
        segundos += 3
      } else {
        console.log(input.value)
      }
      input.value = ''
      addToDOM()
    } else {
    }
  }
})


// manipulación del tiempo
const timeInterval = setInterval(function () {
  segundos--
  timeSpan_id.innerHTML = `${segundos}seg`

  if (segundos == 0) {
    clearInterval(timeInterval)
    gameOver()
  }
}, 1000)

// funcion actualizarTiempo



// funcion gameOver
function gameOver() {
  seguir_jugando = false
  end_game_container.innerHTML = `
  <h1>Tiempo excedido</h1>
  <p>puntaje final de la partida: ${score}</p>
  <button onclick="location.reload()">Volvé a empezar</button>`
}