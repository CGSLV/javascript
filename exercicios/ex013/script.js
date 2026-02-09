function getMaiorV() {
  let res = document.querySelector("#res")
  let n1 = Number(window.prompt("Digite um número:"))
  let n2 = Number(window.prompt("Digite outro número:"))

  let maiorVal
  if (n1 > n2) {
    maiorVal = n1
  } else {
    maiorVal = n2
  }

  res.innerHTML = `<p>Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor é <strong>${maiorVal}</strong></p>`

}