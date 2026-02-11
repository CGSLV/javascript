function contar() {
  let res = document.getElementById("res")

  res.innerHTML += `<h2>Números pares de 1 até 10</h2>`

  for (let i = 2; i <= 10; i+= 2) {
    res.innerHTML += `${i} 👉 `
  }


  res.innerHTML += `🏁`
}


