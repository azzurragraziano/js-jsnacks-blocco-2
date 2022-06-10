/* Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro. */

// creo due array con un numero diverso di elementi
const array1 = [0, 2, 4, 6, 8, 10];
const array2 = [1, 3, 5,];

// finché le lunghezze dei due array sono diverse
while (array1.length !== array2.length) {

    // prendo un numero random da 1 a 10
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber)

    // lo inserisco nell'array2
    array2.push(randomNumber);
}

// stampo il risultato
console.log(array2)