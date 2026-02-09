// Declaração fora da função para não resetar
let cont = 0
let res = document.getElementById("res");

function clicar() {
  // Incrementa cada vez que clica
  cont++
  res.innerHTML = `<p>O contador está com <mark>${cont}</mark> cliques.</p>`

}

function zerar() {
  // Se quiser resetar com a mensagem aparecendo
  res.innerHTML = `<!-- <p>O contador está com <mark>0</mark> cliques.</p>-->`
  cont = 0
}