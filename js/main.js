// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta,
// se il numero è presente nella lista dei numeri generati, la partita termina,
// altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// Ci sono 2 controlli che van fatti già di base per dar senso all’ex:
// i 16 numeri vietati/mina, devono essere tutti diversi, non possono esserci doppioni;
// l’utente non può inserire due volte lo stesso numero, ma sempre numeri diversi.

// creo i 16 numeri del comp e controllo che i 16 numeri sono tutti diversi tra loro
var numeri = [];
// ciclo che deve avere 16 numeri
while (numeri.length < 16) {
  var numRandom = getRandomIntInclusive(1,100);
  // controllo che il numero generato non venga ripetuto
  var controllo = controlliArray(numRandom,numeri);
  // creo la condizione per salvare il numero nell array se non presente
  if (controllo == false) {
    numeri.push(numRandom);
  }
}
console.log(numeri);


// creo array vuota
var numUtente = [];
// creo variabile con cui uscire dal ciclo nel momento in cui si verifica il contrario
var beccato = false;
// creo il ciclo e chiedo all utente di inserire un numero
// fino a quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
while (numUtente.length < 84 && beccato == false) {
  var numInse = parseInt(prompt("inserisci un numero da 1 a 100"));
  // con la funzione controllo i numeri inseriti dall utente non siano uguali a queli gia inseriti e poi lo verifico con la condizione
  var controlNumUT = controlliArray(numInse,numUtente);
  // con la funzione  controllo i numeri inseriti dall utente non si trovano nell array bomba e poi lo verifico con la condizione
  var contNumVie = controlliArray(numInse,numeri);
  // controllo se il numero che ho inserito sia vero  allora ripeto un altro numero e vado avanti
  if (controlNumUT == true) {
    alert("Hai già inserito questo numero " + numInse + " inserisci un altro numero e continua" );
      // controllo se  il numero vietato è vero allora ho perso e esco dal ciclo
  } else if (contNumVie == true) {
    beccato = true;
    alert(numInse + " questo numero è un numero bomba,hai perso");
    // se non ho perso allora pushio il numero inserito nell array dell utente
  } else if (controlNumUT == false && contNumVie == false) {
    numUtente.push(numInse);
    console.log(numUtente.length);
  } if (numUtente.length === 84) {
    console.log("Complimenti hai evitato tutte le bombe...HAI VINTO!!!");
  }
}
console.log(numUtente);
console.log("hai totalizzato " + numUtente.length + " punti");



// creo una funzione per generare 16 numeri casuali
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
}

// creo una funzione con il quale mi aiuto a fare i comtrolli
function controlliArray(valore,array) {
  var found = false;
  // creo ciclo while fino a quando found è falso e i < array.length
  var i = 0;
  while (found == false && i < array.length) {
    if (array[i] == valore) {
      found = true;
    }
    i++;
  }
  return found;
}
