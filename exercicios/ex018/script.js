// Gera o número aleatório logo ao carregar a página
let randomNum = Math.floor(Math.random() * 100) + 1

let res = document.getElementById('res')
let botao = document.getElementById('ibotao')

function adivinhar() {
  let palpNum = Number(window.prompt("Qual é o seu palpite?"))

  if (palpNum === randomNum) {
    res.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o valor ${randomNum}!</p>`
    botao.setAttribute('style', 'visibility: hidden;')
  } else if (palpNum > randomNum) {
    res.innerHTML += `<p>Você falou ${palpNum}. Meu número é <strong>MENOR</strong>!</p>`
  } else {
    res.innerHTML += `<p>Você falou ${palpNum}. Meu número é <strong>MAIOR</strong>!</p>`
  }
}