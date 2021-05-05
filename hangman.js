// Jogo da forca

let targetWord = '';
let dArray = [];
let failCount = 0;

// Categorias e palavras do disponíveis no jogo
const categories = {
  frutas: ['Abacate', 'Morango', 'Banana', 'Maça', 'Pera', 'Tomate', 'Maracujá', 'Melancia'],
  marcas: ["MC donald's", 'BurgueKing', "Bobs", "Lacta"],
  animais: ["Gato", "Hipopótamo", "Leão", "Girafa", "Pantera", "Vaca", "Cavalo", "Aranha", "Morcego"],
}

// Iniciar jogo
function init() {
  document.getElementById('begin-world').innerHTML = 'Bem-vindo ao jogo da forca, você precisa adivinhar qual sera a palavra escondida da categoria sugerida.'

  const options = ['frutas', 'marcas', 'animais'];
  const select = options[getRandom(3)];
  targetWord = categories[select][getRandom(getRandom(categories[select].length))];
  dArray = Array(targetWord.length);
  failCount = 0;

  document.getElementById('category').innerHTML = `A categoria é ${select}`
  document.getElementById('target-guess').innerHTML = `Adivinhe: ${dArray.join('_ ') + '_'}`

}

function handleSubmit() {
  const targetChar = document.getElementById('target-word').value
  document.getElementById('btn-send').addEventListener('click', checkWord(targetChar))
}

// Checar se caractere existe na palavra
function checkWord(letter) {
  let tick;
  for (let i = 0; i < targetWord.length; i++) {
    if (targetWord[i].toLowerCase() === letter) {
      dArray[i] = targetWord[i];
      tick = true;
    } else if (dArray[i] === undefined) {
      dArray[i] = '_';
    }
  }

  tick ? tick = false : failCount++

  // Se falhar em 10 tentativas perde
  if (failCount === 10) {
    document.getElementById('target-guess').innerHTML = `Game over, você perdeu, a palavra era, ${targetWord}`
    return
  } else {
    document.getElementById('lb-fail').innerHTML = `Você errou ${failCount}`
  }
  // document.getElementById('lb-win').innerHTML = `${dArray.includes('_')}`
  dArray.includes('_') ? rl.prompt() : console.log('Você ganhou !!')
  document.getElementById('target-guess').innerHTML = `Você ganhou !! ${dArray.join(' ')}`
}

function getRandom(max) {
  return Math.floor(Math.random() * (max))
}

module.exports = {
  init: init,
  handleSubmit: handleSubmit
}