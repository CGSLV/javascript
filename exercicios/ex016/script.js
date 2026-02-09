function calcular() {
  let anoNas = window.prompt("Em que ano você nasceu?")
  let res = document.getElementById("res");
  let anoAtual = new Date().getFullYear()

  let idade = anoAtual - anoNas

  res.innerHTML = `<p>Quem nasceu em ${anoNas} vai completar <strong>${idade}</strong> anos em ${anoAtual}</p>`
}