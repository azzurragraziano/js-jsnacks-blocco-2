/* Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando
la somma degli elementi è minore di 50. */

// creo un array vuoto
const userNumbers = [];

let sum = 0;

// finché la somma è minore di 50
while (sum < 50) {
    // chiedo un numero all'utente e lo inserisco nell'array
    const userNumber = parseInt( prompt('Dimmi un numero') );
    userNumbers.push(userNumber);

    console.log(userNumbers);

    // sommo a 0 i numeri che mi dà l'utente
    sum += userNumber;
} 

// stampo il risultato in console
console.log(sum);