let res = document.getElementById('res')

function gerarNum() {
  let num = Math.floor(Math.random() * 100) + 1
  // .random -> gera um numero aleatorio entre 0 e 1
  // * 100 -> 0 a 99.999
  // .floor -> arredonda para 0 a 99
  //ajusta para 1 a 100
  res.innerHTML += `<p>Acabei de pensar no número <mark>${num}</mark>!</p>`
}

function limpar() {
  res.innerHTML = ""
}