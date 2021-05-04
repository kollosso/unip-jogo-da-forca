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

// Contador de falhas visual
const hangmanPics = [
  ` 
    +---+
    |   |
        |
        |
        |
        |
  =========`,

  ` 
    +---+
    |   |
    O   |
        |
        |
        |
  =========`,

  ` 
    +---+
    |   |
    O   |
    |   |
        |
        |
  =========`,

  ` 
    +---+
    |   |
    O   |
   /|   |
        |
        |
  =========`,

  ` 
    +---+
    |   |
    O   |
   /|\\  |
        |
        |
  =========`,

  ` 
    +---+
    |   |
    O   |
   /|\\  |
   /    |
        |
  =========`,

  ` 
    +---+
    |   |
    O   |
   /|\\  |
   / \\  |
        |
  =========`]


const readline = require('readline');

// Ler input do usuário no console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'adivinhe> '
});

rl.on('line', (line) => {
  checkWord(line);
}).on('close', () => {
  process.exit(0);
});


// Iniciar jogo
function init() {
  console.log('Bem-vindo ao jogo da forca, você precisa adivinhar qual sera a palavra escondida do tema sugerido.');

  const options = ['frutas', 'marcas', 'animais'];
  const select = options[getRandom(3)];
  targetWord = categories[select][getRandom(getRandom(categories[select].length))];
  dArray = Array(targetWord.length);
  failCount = 0;

  console.log('A categoria é ' + select + '\n' + dArray.join('_ ') + '_');
  rl.prompt();
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

  tick ? tick = false : failCount++;

  // Se falhar em 10 tentativas perde
  if (failCount === 10) {
    console.log(hangmanPics[failCount]);
    console.log('Game over, você perdeu');
    console.log('A palavra era ', targetWord);
    init();
    return;
  } else {
    console.log(hangmanPics[failCount]);
  }
  dArray.includes('_') ? rl.prompt() : console.log('Você ganhou !!');
  console.log(dArray.join(' '));
}

function getRandom(max) {
  return Math.floor(Math.random() * (max));
}

init();