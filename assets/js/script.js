//START

//VARIABILI:
//selettore della griglia
const gridGame = document.querySelector("#grid-game");

//selettore per il tasto play 
const buttonPlay = document.querySelector("#button-play");

//selettore delle caselle
const buttonSquare = document.querySelector(".square");

//selettore dello score
const points = document.querySelector(".points");

//Immagine bomba
const bombImg = '<img class="img-fluid" src="./assets/img/bomb.jpg" alt="bomb">';

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
// con un range da 1 a max ('numero dei quadrati').
let bombs = generateNonRepeatedNumbers(numbersOfSquare);
console.log(bombs)

  // Ciclo che genera un certo numero di div in base alla scelta dell'utente (easy-medium-hard).
  for (let i = 1; i <= numbersOfSquare; i++) {
    const newSquare = createDiv(i, numbersOfCells);  
    gridGame.append(newSquare); 
    
    //TASTO PLAY
    newSquare.addEventListener('click', function (){  

        numbersOfSelections++;        
            if (bombs.includes(parseInt(newSquare.innerHTML))) {
                newSquare.innerHTML = bombImg          
                alert(`HAI PERSO! HAI OTTENUTO UNO SCORE DI: ${points.innerHTML}`);
                gridGame.innerHTML = "";
                numbersOfSelections = 0;
            } else {
                newSquare.classList.add('styles-selection');             
            }             
             points.innerHTML= numbersOfSelections;          
            //aggiungo condizione in caso di vittoria.
             if (numbersOfSelections === (numbersOfSquare - 16)){
                alert("HAI VINTO!")
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

