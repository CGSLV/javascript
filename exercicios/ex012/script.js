function parImpar() {
  let num = Number(window.prompt("Digite um número:"))
  let res = document.querySelector("#res")

  // Se o resto da divisão por 2 for 0 então o número é par
  if (num % 2 === 0) {
    res.innerHTML = `<p>O número ${num} que foi digitado é <strong>PAR!</strong></p>`
  } else {
    res.innerHTML = `<p>O número ${num} que foi digitado é <strong>ÍMPAR!</strong></p>`
  }
}
