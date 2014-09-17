function faireChoix(){
  $("#choix").hide();
  if (Math.random() < 0.5){
    $("#resultat").html('Infect!');
    $("#image").attr("src", "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=213724&type=card");
    $("#image").show();
    
  }
  else{
    $("#resultat").html('Red deck win!!');
    $("#resultat").css('color', 'red');
    $("#image").attr("src", "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=380410&type=card");
    $("#image").show();
  }
}
