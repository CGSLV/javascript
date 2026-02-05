let num = [4, 8, 9, 2, 1]

console.log(`Nosso array é ${num}`)
console.log(num) //Quando printamos apenas a variável ele já coloca os colchetes\

console.log(`O vetor tem ${num.length} posições`)
console.log(`O vetor ordenado é ${num.sort()}`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(3)

if (pos === -1) {
  console.log(`O valor não foi encontrado`)
} else {
  console.log(`O valor 8 está na posição ${pos}`)
}
