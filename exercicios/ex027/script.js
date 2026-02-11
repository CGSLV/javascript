function tabuada() {
  let res = document.getElementById("res")
  let num = Number(document.getElementById("inum").value)

  res.innerHTML = ``
  res.innerHTML += `<h2>Tabuada de ${num}</h2>`

  for (let i = 1; i <= 10; i++) {
    res.innerHTML += `${num} x ${i} = <strong>${num*i}</strong> <br>`
  }
}