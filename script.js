// evaluación M02 C09

const palabra = [
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
const randomWord = document.querySelector("#randomWord")
const text = document.querySelector("#text") // input
const timeSpan = document.querySelector("#timeSpan")
const score = document.querySelector("#score")
const end_game_container = document.querySelector("#end-game-container")

let i = 10
let j = 1
let tiempo = 10000

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
// funcion randomWords
function random() {
  randomWord.value = palabra[Math.floor(Math.random() * palabra.length)]
  console.log(randomWord.value)
  randomWord.textContent = randomWord.value
}
random()

// manipulación del tiempo
setInterval(function () {
  setInterval(function () {
    console.log('tiempo excedido')
    gameOver()
  }, tiempo)
  i--
  timeSpan.textContent = i
  if (i == 0) {
    clearInterval(timeInterval)
  }
}, 1000)

// funcion updateScore **************************************
text.addEventListener("keyup", function (ev) {
  if (ev.keyCode == 13) {  // evento input
    if (text.value == randomWord.value) {
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
  } else { i-- }

})