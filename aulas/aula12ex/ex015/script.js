function verificar(){
  var data = new Date()
  var ano = data.getFullYear()  //Coleta o ano do sistema


  var txtano = document.getElementById("txtano");
  var res = document.querySelector('div#res')


//   Analisando se o ano inserido é valido, não é válido se o ano for menor ou igual a 0 OU maior que o ano atual
  if (txtano.value.length == 0 || txtano.value > ano) {
    window.alert("[ERRO] Tente novamente! Insira um ano válido");

  } else {
    var fsex = document.getElementsByName("radsex");
    // Já que você não converteu o valor para number em outra variavel tem que colocar no number no inicio
    var idade = ano - Number(txtano.value)
    var genero = ''

    // Criando imagem dinamicamente e colocando um id nela:

    var img = document.createElement('img');
    img.setAttribute('id', 'foto')

    if (fsex[0].checked) {
      genero = 'Homem'

      if (idade >=0 && idade < 10) {
        //Criança
        img.setAttribute('src', 'imagens/foto-bebe-m.jpg');
      } else if (idade < 21) {
        // Jovem
        img.setAttribute('src', 'imagens/foto-jovem-m.jpg');
      } else if (idade < 50) {
        //adulto
        img.setAttribute('src', 'imagens/foto-adulto-m.jpg');
      } else {
        //Idoso
        img.setAttribute('src', 'imagens/foto-idoso-m.jpg');
      }

    } else if (fsex[1].checked) {
      genero = 'Mulher'

      if (idade >=0 && idade < 10) {
        //Criança
        img.setAttribute('src', 'imagens/foto-bebe-f.jpg');
      } else if (idade < 21) {
        // Jovem
        img.setAttribute('src', 'imagens/foto-jovem-f.jpg');
      } else if (idade < 50) {
        //adulto
        img.setAttribute('src', 'imagens/foto-adulto-f.jpg');
      } else {
        //Idoso
        img.setAttribute('src', 'imagens/foto-idoso-f.jpg');
      }
    }

  //   Resultado centralizado
    res.style.textAlign = "center"
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
  }
}