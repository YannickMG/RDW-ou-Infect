function faireChoix(){
  var choix = Math.random() < 0.5 ? 'Infect!' : 'Red deck win!';
  $("#resultat").html(choix);
}
