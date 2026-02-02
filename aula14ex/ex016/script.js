function contar() {
  // Coleta o valor dos elementor (por ID) -> Transforma eles de string para number -> Atribui o valor a variável
  var txtini = document.getElementById('ini').value
  var ini = Number(txtini);
  var txtfim = document.querySelector('#fim').value
  var fim = Number(txtfim);
  var txtpas = document.querySelector('#pas').value
  var pas = Number(txtpas);

  // Seleciona a parte da div res como uma variavel para facilitar o código
  var res = document.getElementById('res');



  // Consigo fazer o tratamento de nao numeros colocando na condicao: || isNaN(ini) que nao recusa se o input nao for um numero
  if (txtini === "") { // Verifico se o input de Inicio (txt inicio) está vazio, se estiver não posso continuar
    res.innerHTML = `Impossível contar!`
  } else {

    if (pas === 0) { //Nao posso pular de 0 em 0, precisa ser pelo menos 1
      window.alert(`Passo inválido! Considerando PASSO 1`)
      pas = 1
    }

    res.innerHTML = "<p>Contando:</p>"

    for (var i = ini; i <= fim; i += pas) {
      res.innerHTML += `${i}👉`
    }
    res.innerHTML += `🏁`
  }

}