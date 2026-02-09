// Para escrever na tela em um arquivo .js não se usa o document.write do HTML, se usa:
console.log('O console funcionou corretamente')

var vel = 12
console.log(`A velocidade do seu carro é ${vel}Km/h`)

if (vel > 60) { //Condição simples!
  // O código está para "dentro" pois está com indentação
  // Esse comando só acontece se a condicao for verdadeira
  console.log(`Você ultrapassou a velocidade permitida. MULTADO!`)
}
console.log(`Dirija sempre usando cinto de segurança!`)