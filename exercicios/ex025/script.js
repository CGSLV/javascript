function contar() {
  let res = document.getElementById("res")
  let num = Number(document.querySelector('#ivalor').value)

  res.innerHTML += `<h2>Contando de 0 até ${num}</h2>`

  for (let i = 0; i <= num; i++) {
    res.innerHTML += `${i} 👉 `
  }

  res.innerHTML += `🏁`
}