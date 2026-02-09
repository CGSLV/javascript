function calcular() {
  let res = document.getElementById('res');
  let n1 = Number(window.prompt("Primeiro valor:"))
  let n2 = Number(window.prompt("Segundo valor:"))
  let op = window.prompt
  (`Valores informador: ${n1} e ${n2}
O que vamos fazer?
[1] Somar
[2] Subtrair
[3] Multiplicar
[4] Dividir`);

  res.innerHTML = `<h2>Calculando...</h2>`

  switch (op) {
    case "1":
      res.innerHTML += `<p>${n1} + ${n2} = <strong>${n1 + n2}</strong></p>`
      break
    case "2":
      res.innerHTML += `<p>${n1} - ${n2} = <strong>${n1 - n2}</strong></p>`
      break
    case "3":
      res.innerHTML += `<p>${n1} x ${n2} = <strong>${n1 * n2}</strong></p>`
      break
    case "4":
      res.innerHTML += `<p>${n1} / ${n2} = <strong>${n1 / n2}</strong></p>`
      break
    default:
      res.innerHTML += `<p>OPÇÃO INVÁLIDA! Você digitou ${n1} e ${n2}, mas não sei o que fazer com eles</p>`

  }
}
