function getHora() {
  let divtxt = document.getElementById('txthora');
  let hora = new Date().toString();

  divtxt.innerHTML = `<p>O que eu recebi do sistema foi <mark>${hora}</mark></p>`
}