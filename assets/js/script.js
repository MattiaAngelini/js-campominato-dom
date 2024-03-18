// Bonus
//Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:

//- con difficoltà 1 => 100 caselle, 
//- con difficoltà 2 => 81 caselle
//- con difficoltà 3 => 49 caselle

// 1) - L'utente clicca su un bottone che genererà una griglia di 
//     gioco quadrata.

// 2) - Ogni cella ha un numero progressivo, da 1 a 100.
//     ci saranno quindi 10 caselle per ognuna delle 10 righe.

// 3) - Quando l'utente clicca su ogni cella, 

// 4) - la cella cliccata si colora di azzurro 

// 5) - ed emetto un messaggio in console 
//     con il numero della cella cliccata.

//START

// 1) - CREARE UN BOTTONE CHE GENERERA' LA GRIGLIA:
//      creo un evento click in cui rimuovo la classe d-none.

//creo selettore per la griglia
const gridGame = document.querySelector("#grid-game");

//creo selettore per il tasto play 
const buttonPlay = document.querySelector("#button-play");

//creo evento al play che fa comparire la griglia
buttonPlay.addEventListener ('click', function (){ 
 
    //RESET dopo nuovo click
    gridGame.innerHTML = "";
//creo selettore difficoltà selezionata.
const choice = document.querySelector("#levels").value;
    
    
    let numbersOfSquare;
    let numbersOfCells;
// Creazione numero dei quadrati totali e numero quadrati per riga, in base scelta selezionata.
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

// la griglia compare al click, ora mi servono i quadrati.
// ho a disposizione il numero degli elementi al click in base alla difficoltà.
// devo creare una funzione che crea un numero di div pari a numbersOfsquare.

  // Ciclo for che genera un div tante volte quanto il numero degli squares.
  for (let i = 1; i <= numbersOfSquare; i++) {
    const newSquare = createDiv(i);
    gridGame.append(newSquare); 
}

});


// FUNCTIONS
// Funzione che genera un div
   function createDiv (number) {
   let newDiv = document.createElement('div');
   newDiv.classList.add('square');
   newDiv.innerHTML = number; // Aggiungo il numero al contenuto del div
   return newDiv; 
}



