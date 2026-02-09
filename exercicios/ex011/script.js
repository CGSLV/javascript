function calcular() {
  let nome = window.prompt("Qual é o nome do aluno?")
  let n1 = Number(window.prompt(`Qual foi a primeira note de ${nome}?`))
  let n2 = Number(window.prompt(`Além de ${n1}, qual foi a outra nota de ${nome}?`))
  let res = document.getElementById("res")
  let media = (n1+n2) / 2

  res.innerHTML = (`
  <p>Calculando a média final de ${nome}</p>
  <p>As notas obtidas foram ${n1} e ${n2}</p>
  <p>A média final será ${media}</p>
  `)

  if (media >= 6) {
    res.innerHTML += (`<p>A mensagem que temos é <strong style="color: red">Meus parabéns!</strong></p>`)
  } else {
    res.innerHTML += (`<p>A mensagem que temos é <strong style="color: red">Estude um pouco mais!</strong></p>`)
  }

}