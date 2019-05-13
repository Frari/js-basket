// Il software deve generare casualmente le statistiche di gioco di 100 giocatori di basket per una giornata di campionato.
// In particolare vanno generate per ogni giocatore le seguenti informazioni, facendo attenzione che il numero generato abbia senso:
// - Codice Giocatore Univoco (formato da 3 lettere maiuscole casuali e 3 numeri)
// - Numero di punti fatti
// - Numero di rimbalzi
// - Falli
// - Percentuale di successo per tiri da 2 punti
// - Percentuale di successo per tiri da 3 punti
// Tutti i giocatori verranno visualizzati tramite il loro codice (in una select, una lista, …).
// Una volta cliccato sul codice giocatore, nel corpo principale verranno visualizzate le statistiche corrispondenti.

// creo oggetto Giocatore
var lista_giocatori=[];

function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}
// var rString = randomString(6, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ');
// console.log(rString);


for(i=0;i<100;i++){

  var giocatore = {
    'codice':'',
    'punti':0,
    'rimbalzi':0,
    'falli':0,
    'percSucc2punti':0,
    'percSucc3punti':0
  };

  giocatore.punti=Math.floor(Math.random()*50)+1;

  giocatore.codice = randomString(6, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ');

  giocatore.rimbalzi=Math.floor(Math.random()*50)+1;
  giocatore.falli=Math.floor(Math.random()*50)+1;
  giocatore.percSucc2punti=Math.floor(Math.random()*100)+1+'%';
  giocatore.percSucc3punti=Math.floor(Math.random()*100)+1+'%';

  lista_giocatori.push(giocatore);

  // for(var field in giocatore){
  //   console.log(giocatore[field]);
  // }
  $('.codici').addClass('item');
  var codice = giocatore.codice;
  console.log(codice);
  $('.codici.item').append(codice);

}

// for(i=0;i<100;i++){
//   var valore=$(codice).val();
//   $('.codici').append(valore);
// }
