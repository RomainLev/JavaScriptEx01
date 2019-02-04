var resultat = "<ul>";

for (var i = -500 ; i <= 724 ; i += 10) {
  if (i % 13 == 0) {
  resultat += "<li>" + i + "</li>";
  }
}

resultat = resultat +"</ul>";

document.write(resultat);
