function analisar() {
  let agora = new Date()
  let res = document.getElementById('res');

  // Retornar o dia da semana, pode usar um switch case ou um array agora que já aprendeu que é até mais fácil

  let diasSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]


  res.innerHTML = `
  <p>Dia:  <mark>${agora.getDate()}</mark></p>
  <p>Mês: <mark>${agora.toLocaleString('pt-BR', { month: 'short' })}</mark></p>
  <p>Ano: <mark>${agora.getFullYear()}</mark></p>
<!--  O retorno do .getDay que vai de 0-6 começando do domingo serve como índice para valor do dia no vetor-->
  <p>Dia da semana: <mark>${diasSemana[agora.getDay()]}</mark></p>  
  <p>Hora: <mark>${agora.getHours()}</mark></p>
  <p>Minutos: <mark>${agora.getMinutes()}</mark></p>
  <p>Segundos: <mark>${agora.getSeconds()}</mark></p>
  `
}