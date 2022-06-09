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
const palabraAleatoria = document.querySelector("#randomWord")
const text_id = document.querySelector("#text") // input
const timeSpan_id = document.querySelector("#timeSpan")
const score_id = document.querySelector("#score")
const end_game_container = document.querySelector("#end-game-container")

let i = 10
let j = 1
let tiempo = 10000 // 10 segundos

// funcion randomWords
function randomWords() {
  palabraAleatoria.value = words[Math.floor(Math.random() * words.length)]
  console.log(palabraAleatoria.value)
palabraAleatoria.textContent = palabraAleatoria.value
}
randomWords()

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

// manipulación del tiempo

const probando = setInterval(function () {
  setInterval(function () {
    console.log('tiempo excedido')
    gameOver()
  }, tiempo) //10 seguntos
  i--  // desminuyendo 1 seg
  timeSpan.textContent = i
  if (i == 0) {
    clearInterval(probando)
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