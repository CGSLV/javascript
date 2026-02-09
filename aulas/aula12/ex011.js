var idade = 13

console.log(`Você tem ${idade} anos`)

if (idade < 16) {
  console.log('Não vota')
//   Se o minimo for idade >= 16 você nem precisa colocar por lógica
} else if (idade < 18 || idade > 65) {
  console.log('Voto Opcional')
} else {
  console.log('Voto Obrigatório')
}
