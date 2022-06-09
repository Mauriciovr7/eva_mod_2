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
let i = 10 // segundos restantes
let score = 0 // 
let palabra; // palabra por adivinar

let tiempo = 10000 // 10 segundos

// funcion randomWords
function randomWords() {
  const palabraAzar = words[Math.floor(Math.random() * words.length)]
  return palabraAzar;
}

function addToDOM() {
  palabra = randomWords()
  palabraAleatoria.innerHTML = palabra;
}
// inicio del juego
addToDOM()
// manipulación del tiempo

const probando = setInterval(function () {
  // se ejecuta cada 1 segundo
}, 1000)
// funcion actualizarTiempo

// funcion gameOver
function gameOver() {
  end_game_container.innerHTML = `
  <h1>Tiempo excedido</h1>
  <p>puntaje final de la partida: ${j}</p>
  <button onclick="location.reload()">Volvé a empezar</button>`
}

// funcion updateScore

// funcion addToDOM (llama a randomWords y agrega al DOM)




// funcion updateScore **************************************
text.addEventListener("keyup", function (ev) {
  if (ev.keyCode == 13) {  // evento input
    if (input.value == randomWord.value) {
      text.value = ''
      console.log(text.value)
      alert('match')

      i = 10
      tiempo = 10000
      console.log(i)
      score.textContent = j++ // score
      random()
      // return
    } else {
      alert('erró')
    }
  } else {
    i--
  }

})