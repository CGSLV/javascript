let valores = [8, 1, 7, 4, 2, 9]

valores.sort()

// let c = 0
// while (c < valores.length) {
//   console.log(`A posição ${c} tem o valor ${valores[c]}`)
//   c++
// }

//  Versão em for
// for (let c = 0; c < valores.length; c++) {
//   console.log(valores[c])
// }

for (let pos in valores) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}