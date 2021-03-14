let tamanhoDaLista = []
const paiDaLista = document.getElementById('lista-tarefas');
const botão = document.getElementById('criar-tarefa');
botão.addEventListener('click', vaiPraLista); 
const botãoApaga = document.getElementById('apaga-tudo');
// **************Adciona o texto na lista****************
function vaiPraLista() { //função do botão vaiPraLista
  let entradaDeTarefa = document.getElementById('texto-tarefa').value;
  const li = document.createElement('li');
  li.innerText = entradaDeTarefa;
  entradaDeTarefa.value = '';
  li.addEventListener('click',  seleciona);
  // ***********risca o texto ao clicar duas vezes*********
  li.addEventListener('dblclick', function(event) {
    console.log('ola');
    event.target.classList.toggle('completed');
  })
  paiDaLista.appendChild(li);
}// ***********seleciona o texto ao clicar************
function seleciona() {
  let apagaACor = document.querySelector('.grey');
  if (apagaACor !== null) {
    apagaACor.classList.remove('grey');
  }
  this.classList.add('grey');
};// ***********Apaga tudo***************************
botãoApaga.addEventListener('click', function() {
  let list = document.getElementById("lista-tarefas");
  for (cont = 0; 0 < (list.childElementCount); cont += 1) {
  list.removeChild(list.childNodes[0]);
  }
})// ***********Apaga Riscados**********************
const botãoApagaRiscados = document.getElementById('remover-finalizados');
botãoApagaRiscados.addEventListener('click', function () {
  const riscados = document.getElementsByClassName('completed');
  for (let index = 0; index < riscados.length; index = 0) {
    riscados[0].parentNode.removeChild(riscados[0]);
  }
});// ***************Salva************************
//https://warcontent.com/localstorage-javascript/
let botãoSalvar = document.getElementById('salvar-tarefas');
botãoSalvar.addEventListener('click', salvar); 
function salvar() {
  let itensASalvar = paiDaLista.innerHTML;
  localStorage.setItem('Salvo', itensASalvar);
  //por innerHTMH pois o localStorageso salva texto
}
window.onload = function () {
  paiDaLista.innerHTML = localStorage.getItem ('Salvo');
}
