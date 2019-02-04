var resultat = "<ul>";
var compte = 0

for (var i = -12728 ; i < 16857 ; i += 17) {
  if (i % 23 == 0) {
    compte ++;
    resultat += "<li>" + i;

  resultat += "<ul>";
  for (var j = 0 ; j < 11 ; j++){
    resultat += "<li>" + j + "</li>";
    }
    resultat += "</ul>";
    resultat += "</li>";
  }
}

resultat += "</ul>";

document.write(resultat);
alert(compte);
