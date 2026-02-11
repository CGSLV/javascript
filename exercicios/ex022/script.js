function contar() {
  let res = document.getElementById("res")

  res.innerHTML += `<h2>Contando de 1 até 10</h2>`

  for (let i = 1; i <= 10; i++) {
    // Verifica se o i é par
    if (i % 2 === 0) {
      res.innerHTML += `<strong><mark>${i} </mark></strong>👉`
    } else {
      res.innerHTML += `${i} 👉 `
    }
  }


  res.innerHTML += `🏁`
}


