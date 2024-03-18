
//In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - 
//abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
// Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

//La partita termina quando il giocatore clicca su una bomba o 
//quando raggiunge il numero massimo possibile di numeri consentiti 
//(ovvero quando ha rivelato tutte le celle che non sono bombe).


//Al termine della partita il software deve comunicare il punteggio, 
//cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba

//START

//VARIABILI

//selettore della griglia
const gridGame = document.querySelector("#grid-game");

//selettore per il tasto play 
const buttonPlay = document.querySelector("#button-play");

//selettore delle caselle
const buttonSquare = document.querySelector(".square");

//selettore dello score
const points = document.querySelector("#points");


//variabile che tiene traccia del numero di click sulle caselle.
let numbersOfSelections = 0;

// variabili con il numero dei quadrati e delle celle in base a livello selezionato.
let numbersOfSquare;
let numbersOfCells;


//TASTO PLAY
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

  // Ciclo che genera un certo numero di div in base alla scelta dell'utente (easy-medium-hard).
  for (let i = 1; i <= numbersOfSquare; i++) {
    const newSquare = createDiv(i, numbersOfCells);  
    gridGame.append(newSquare); 
    
    //evento click al premere degli square, se un numero casuale di bombs 
    // è incluso tra i numeri generato in new square: aggiungiamo o rimuoviamo classe (bg-color)
    // per stabilire errore.

    //TASTO PLAY
    newSquare.addEventListener('click', function (){  
        numbersOfSelections++;        
            if (bombs.includes(parseInt(newSquare.innerHTML))) {
                newSquare.classList.add('bomb');
                alert("HAI PERSO!")
            } else {
                newSquare.classList.add('styles-selection');
            }   
            
             points.innerHTML= numbersOfSelections;
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
