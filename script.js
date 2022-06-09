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

// inicio del juego
// funcion updateScore **************************************
input.addEventListener("keyup", function (ev) {
  if (ev.keyCode == 13) {  // evento input
    if (input.value == palabra) {
      
      alert('match')
      
      //i = 10
      // tiempo = 10000
      // console.log(i)
      score++ // score
      segundos += 3
      // random()
      // return
    } else {
      console.log(input.value)
      alert('erró')
            
    }
    input.value = ''
    addToDOM()
  } else {
    //i--
  }  
})


// manipulación del tiempo
const probando = setInterval(function () {
  segundos--
  timeSpan_id.innerHTML = `${segundos}seg`

  if(segundos == 0){
    alert('Usted perdio')
    clearInterval(probando)
  }
  // i--
  // se ejecuta cada 1 segundo
}, 1000)
/*


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
*/
// funcion actualizarTiempo



// funcion gameOver
function gameOver() {
  end_game_container.innerHTML = `
  <h1>Tiempo excedido</h1>
  <p>puntaje final de la partida: ${j}</p>
  <button onclick="location.reload()">Volvé a empezar</button>`
}