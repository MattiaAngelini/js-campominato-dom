//Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: 
//le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba,
// perciò nell’array delle bombe non potranno esserci due numeri uguali.

//START

//selettore della griglia
const gridGame = document.querySelector("#grid-game");

//selettore per il tasto play 
const buttonPlay = document.querySelector("#button-play");

const buttonSquare = document.querySelector(".square");

let numbersOfSquare;
let numbersOfCells;
//evento al play che fa comparire la griglia
buttonPlay.addEventListener ('click', function (){ 
 
    //RESET dopo ogni nuovo click
    gridGame.innerHTML = "";

//creo selettore difficoltà selezionata.
const choice = document.querySelector("#levels").value;
    
// Condizione per la creazione numero dei quadrati in base al valore dell'input 
// selezionato dall'utente.
if (choice === 'easy') {
    numbersOfSquare = 100;
    numbersOfCells = 10;
} else if (choice === 'medium') {
    numbersOfSquare = 81;
    numbersOfCells = 9;
} else if (choice === 'hard') {
    numbersOfSquare = 49;
    numbersOfCells = 7;
}

//variabile contente la funzione che genera i 16 numeri casuali,
// con un range da 1 a 'numero dei quadrati'.

let bombs = generateNonRepeatedNumbers(numbersOfSquare);
console.log(bombs);

  // Ciclo che genera un certo numero di div in base alla scelta dell'utente (easy-medium-hard).
  for (let i = 1; i <= numbersOfSquare; i++) {
    const newSquare = createDiv(i, numbersOfCells);  
    gridGame.append(newSquare); 
    
    //evento click al premere degli square, se un numero casuale di bombs 
    // è incluso tra i numeri generato in new square: aggiungiamo o rimuoviamo classe (bg-color)
    // per stabilire errore.
    
    newSquare.addEventListener('click', function (){       
            if (bombs.includes(parseInt(newSquare.innerHTML))) {
                newSquare.classList.add('bomb');
            } else {
                newSquare.classList.add('styles-selection');
            }   
        })   
}
});

// FUNCTIONS
// Funzione che genera un div con classe square di dimensioni proporzionate al numero delle celle.
function createDiv(number, numbersOfCells) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('square');
    newDiv.innerHTML = number; // Aggiungo il numero al contenuto del div
    newDiv.style.width = `calc(100% / ${numbersOfCells})`;
    newDiv.style.height = `calc(100% / ${numbersOfCells})`;
    return newDiv;
  }
  
  //funzione che genera un numer random da 1 a max.
  function generateNonRepeatedNumbers(max) {
    if (max < 16) {
        return [];
    }
    let numbers = [];
    let randomNumber;

    while (numbers.length < 16) {
        randomNumber = Math.floor(Math.random() * max) + 1;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    return numbers;
}
