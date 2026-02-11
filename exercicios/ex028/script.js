function fatorial() {
  let res = document.getElementById('res')
  let num = Number(document.getElementById('inum').value)
  let fat = 1

  res.innerHTML += `<h2>Calculando ${num}!</h2>`

  for (let i = num; i > 1; i--) {
    res.innerHTML += `${i} x `
    fat *= i
  }

  res.innerHTML += `1 = <strong>${fat.toLocaleString('pt-BR')}</strong>`
}