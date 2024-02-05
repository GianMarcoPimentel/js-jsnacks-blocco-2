/* 
Snack 1
Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50
*/

//creo un array vuoto
let array = [];
let tentativi = 0;

//chiedo all'utente dei numeri da inserire nell'array SINCHE' gli elementi sono 50
do{
    let numero = Number(prompt("Inserisci un numero"));
    if(numero != null || isNaN(numero)){
        array.push(numero);
    }
    tentativi ++;
}while(array.length < 50);

document.getElementById("array").innerHTML = `L'array finale è composta da array = [${array}]`;

