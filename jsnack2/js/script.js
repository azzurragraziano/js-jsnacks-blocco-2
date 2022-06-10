/* calcola la somma e la media dei primi 10 numeri */

let sum = 0;
let media = 0;

// Scriviamo tutti i numeri da 1 a 10
for(let i = 1; i <= 10; i++) {

    // calcoliamo la somma dei numeri
    sum += i;

    // calcoliamo la media dei numeri
    media = sum / 10;
   
}

// stampo il risultato in console
console.log(sum);
console.log(media);

