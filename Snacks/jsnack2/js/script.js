/* 
Genera un numero casuale tra 1 e 100 e poi chiedi all'utente di indovinare il numero. Il programma poi deve far comparire un messaggio "il numero è troppo alto" oppure "il numero è troppo basso" nel momento in cui il numero detto dall'utente non è perfettamente uguale al numero estratto in modo casuale.
Quando l'utente trova il numero, fateglielo sapere!
*/

// Genera un numero casuale dsa 1 a 100;

// Chiedi all'utente di indovinare il numero

// Il programma deve dire 'il numero è troppo alto'  o 'il numero è troppo basso' 

// Oppure deve dire 'il numero è esatto'


const computerNumber = Math.floor(Math.random() * 100 + 1);
console.log(computerNumber);
/* document.getElementById("computer").innerHTML = computerNumber; */

let userNumber = prompt("Indovina il numero scelto dal computer");
console.log(userNumber);
document.getElementById("user").innerHTML = userNumber;

if ( computerNumber > userNumber ) {
    document.getElementById("result").innerHTML = `Il numero ${userNumber} è troppo piccolo. Ritenta sarei più fortunato`;
} else if ( computerNumber < userNumber ){
    document.getElementById("result").innerHTML = `Il numero ${userNumber} è troppo grande.Ritenta sarei più fortunato`;

} else {
    document.getElementById("result").innerHTML = `Il numero ${userNumber} è esattamente uguale.Hai vinto`;

}