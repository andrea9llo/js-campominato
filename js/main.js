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


// chiedo all utente di inserire un numero
// fino a quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
var numUtente = [];

var j = 0;
while (j < 5 && contNumVie == false) {
  var numInse = parseInt(prompt("inserisci un numero da 1 a 100"));
  // controllo se non inserisco 2 numeri uguali
  var controlNumUT = controlliArray(numInse,numUtente);
  if (controlNumUT == false) {
    numUtente.push(numInse);
  } else {
    alert("Hai già inserito questo numero " + numInse + " inserisci un altro numero e continua" );
    j--;
  }
  // controllo se non inserisco un numero vietato
  var contNumVie = controlliArray(numInse,numeri);
  var found = false;
  if (contNumVie == false) {
    numUtente.push(numInse);
  } else {
    alert(numInse + " questo numero è un numero bomba,hai perso");
  }
  j++;

}
console.log(numUtente);


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
