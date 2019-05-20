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
function number_generator(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var player_codes = [];

// creo una funcione per generare un Giocatore
function generate_player() {

  var player_code = '';
  do {
    player_code = '';
    // genero 3 lettere e le concateno al codice del giocatore
    for (var i = 0; i < 3; i++) {
      var char_position = number_generator(0,25);
      var char = characters.charAt(char_position);
      player_code += char;
    }
    // genero 3 cifre e le concateno al codice del giocatore
    for (var i = 0; i < 3; i++) {
      player_code += number_generator(0,9);
    }
  } while(player_codes.includes(player_code));

  player_codes.push(player_code);

  // genero numero di punti, rimbalzi e Falli
  var punti = number_generator(0, 40);
  var rimbalzi = number_generator(0,200);
  var falli = number_generator(0,5);

  // genero le percentuali per i tiri da 2 e 3 punti
  var perc_2 = (number_generator(0,1000) / 10).toFixed(1);
  var perc_3 = (100 - perc_2).toFixed(1);

  // costruisco un oggetto giocatore
  var player = {
    'codice': player_code,
    'punti': punti,
    'rimbalzi': rimbalzi,
    'falli': falli,
    'perc_2': perc_2,
    'perc_3': perc_3
  }

  return player;

}
var players = [];
// genero 100 oggetti giocatore
for (var i = 0; i < 100; i++) {
  var player = generate_player();
  players.push(player);
}
// for (var i = 0; i < players.length; i++) {
var player_code = player.codice

var template_html = $('#codes_template').html();
var template_function = Handlebars.compile(template_html);
var variabile={
  'codice':player_codes
}
 var html_finale = template_function(variabile);
 console.log(html_finale);
 $('#player_list').append(html_finale)
// }
