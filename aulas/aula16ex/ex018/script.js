// array de numeros
let arrnum = []
let divres = document.getElementById('divres')


function adicionar() {
  let num = Number(document.getElementById('inumero').value)
  let resultado = document.getElementById('iresultado');


  // Verificando se o número digitado já existe, retorna o index se existir, retorna -1 se não existir
  let aux = arrnum.indexOf(num);

  if (num > 100 || num < 1 || aux !== -1) {
    window.alert('Valor inválido ou já encontrado na lista')
  } else {
    let opcao = document.createElement("option");
    opcao.text = `Valor ${num} adicionado`
    resultado.appendChild(opcao)
    arrnum.push(num)
    divres.innerText = ''

  }

}


function finalizar() {

  //Ele só dá problema se o input estiver vazio na primeira, depois ele pode aceitar vazio se os valores já terem sido colocados
  if (arrnum.length === 0) window.alert("Adicione valores antes de finalizar")
  else {

    // Reseta o conteúdo da div
    divres.innerText = ''

    //Paragrafos para auxiliar os outputs
    let paragrafo = document.createElement("p");


    //Quantidade de números cadastrados (tamanho do array)
    let tamanho = arrnum.length
    paragrafo.innerHTML = `Ao todo, temos ${tamanho} números cadastrados`
    divres.appendChild(paragrafo)



    //Coleta o maior e o menor valor juntos
    let maiorNum = arrnum[0]
    let menorNum = arrnum[0]

    for (let n in arrnum) {
      if (arrnum[n] > maiorNum) maiorNum = arrnum[n]
      if (arrnum[n] < menorNum) menorNum = arrnum[n]
    }

    // Cria outro paragrafo
    paragrafo = document.createElement("p");
    paragrafo.innerHTML = `O maior valor informado foi ${maiorNum}`
    divres.appendChild(paragrafo)

    paragrafo = document.createElement("p");
    paragrafo.innerHTML = `O menor valor informado foi ${menorNum}`
    divres.appendChild(paragrafo)



    //Soma dos valores
    let soma = 0
    for (let n in arrnum) {
      soma += Number(arrnum[n])
    }
    paragrafo = document.createElement("p");
    paragrafo.innerHTML = `Somando todos os valores, temos ${soma}`
    divres.appendChild(paragrafo)

    //Media dos valores
    let media = soma / arrnum.length
    paragrafo = document.createElement("p");
    paragrafo.innerHTML = `A média dos valores digitados é ${media}`
    divres.appendChild(paragrafo)
  }
}