function carregar() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("imagem");
  var data = new Date()
  // var hora = data.getHours();
var hora = 22
//   Mudando a mensagem
  msg.innerHTML = `Agora são ${hora} horas`;

// Mudando a imagem dependendo da hora atual
  if (hora >= 0 && hora < 12) {
    // BOM DIA!
    img.src = "fotomanha.png"
    window.document.body.style.backgroundColor = "#FABA9F";
  } else if (hora >= 12 && hora <= 18) {
    // BOA TARDE!
    img.src = "fototarde.png"
    window.document.body.style.backgroundColor = "#E08513";
  } else {
    img.src = "fotonoite.png"
    window.document.body.style.backgroundColor = "#282F39";
    // BOA NOITE!
  }
}