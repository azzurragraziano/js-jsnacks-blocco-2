/* Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while. */

// // VERSIONE CON IL FOR
// let sum = 0;

// chiedo per 5 volte
// for (let i = 0; i < 5; i++) {

//     // all'utente di inserire un numero
//     const userNumber = parseInt( prompt('dimmi un numero') );

//     // calcolo la somma dei numeri dati dall'utente
//     sum += userNumber; 
// }

// // stampo la somma dei numeri dati dall'utente
// console.log(sum);

// VERSIONE CON IL WHILE
let sum = 0;
let i = 0;

// chiedo per 5 volte
while(i < 5) {
    // all'utente di inserire un numero
    const userNumber = parseInt( prompt('dimmi un numero') );

    // incremento i
    i++;

    // calcolo la somma dei numeri dati dall'utente
    sum += userNumber; 
}

// stampo la somma dei numeri dati dall'utente
console.log('somma', sum);
    
