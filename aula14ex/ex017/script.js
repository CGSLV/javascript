function calcular() {
  let txtnum = document.getElementById("inum")
  let tabu = document.getElementById("lstabuada")

  if (txtnum.value.length === 0) {
    window.alert('Por favor, digite um número!')
  } else {

    let num = Number(txtnum.value)
    // Resetando o output, se não fizer isso ele acumula toda vez que for clicar
    tabu.innerHTML = ``;

    // calculo tabuada
    for (let i = 1; i <= 10; i++) {
      let res = num * i
      tabu.innerHTML += `<option> ${num} x ${i} = ${res} </option>`;
    }
  }
}