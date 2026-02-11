function contar() {
  let res = document.getElementById("res");
  let valInicio = Number(document.getElementById("iinicial").value)
  let valFinal = Number(document.getElementById("ifinal").value)


  if (valInicio === valFinal) {
    res.innerHTML += `<h2>Contando de ${valInicio} até ${valFinal}</h2>`
    res.innerHTML += `Não é possível contar, pois os números são iguais `
  }
  else if (valInicio < valFinal) {
    res.innerHTML += `<h2>Contando de ${valInicio} até ${valFinal}</h2>`
    for (let i = valInicio; i <= valFinal; i++) {
      res.innerHTML += `${i} 👉`
    }


  } else {
    res.innerHTML += `<h2>Contando de ${valFinal} até ${valInicio}</h2>`
    for (let i = valFinal; i >= valInicio; i--) {
      res.innerHTML += `${i} 👉`
    }

  }

  res.innerHTML += `🏁`


}