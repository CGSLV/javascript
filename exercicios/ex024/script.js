function contar() {
  let res = document.getElementById("res")

  res.innerHTML += `<h2>Contagem Regressiva de 10 a 1</h2>`

  for (let i = 10; i > 0; i--) {
    res.innerHTML += `${i} 👉 `
  }


  res.innerHTML += `🏁`
}


