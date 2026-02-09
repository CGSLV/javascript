let res = document.querySelector('#res')
let estacao

function estacaoDoAno() {
  let mes = window.prompt("Digite o mês em extenso (ex: Setembro)")

  // Convertendo todos os caracteres para minusculos
  switch(mes.toLowerCase()) {
    case "dezembro":
    case "janeiro":
    case "fevereiro":
      estacao = "VERÃO"
      break

    case "março":
    case "abril":
    case "maio":
      estacao = "OUTONO"
      break

    case "junho":
    case "julho":
    case "agosto":
      estacao = "INVERNO"
      break

    case "setembro":
    case "outubro":
    case "novembro":
      estacao = "PRIMAVERA"
      break

    default:
      estacao = "INDEFINIDO"
      break
  }
  res.innerHTML = `<p>No mês de <mark>${mes}</mark>, estamos na estação <mark><strong>${estacao}</strong></mark></p>`
}


