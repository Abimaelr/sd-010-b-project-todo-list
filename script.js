let tamanhoDaLista = []
// **************Armazena o texto****************
let entradaDeTarefa;
const caixaDeEntrada = document.getElementById('texto-tarefa');
caixaDeEntrada.addEventListener('keyup', tarefa);
function tarefa() {
  entradaDeTarefa = caixaDeEntrada.value;
}// **************Adciona o texto na lista****************
const paiDaLista = document.getElementById('lista-tarefas');
const botão = document.getElementById('criar-tarefa');
botão.addEventListener('click', vaiPraLista); 
function vaiPraLista() {
  const li = document.createElement('li');
  li.innerText = entradaDeTarefa;
  caixaDeEntrada.value = '';
  paiDaLista.appendChild(li);
  tamanhoDaLista=document.querySelectorAll('li');
  açoes();
}// ***********risca o texto ao clicar duas vezes*********
function risca() {
  paiDaLista.addEventListener('dblclick', function(event){
    event.target.classList.toggle('completed');
  });
}// ***********Pinta de cinza o item selecionado***************
function açoes() {
for (let cont = 0; cont < tamanhoDaLista.length; cont += 1) {
  // ***********seleciona o texto ao clicar************
  tamanhoDaLista[cont].addEventListener('click', function() {
    let apagaACor = document.querySelector('.grey')
    if(apagaACor !== null){
      apagaACor.classList.remove('grey');
    }
    this.classList.add('grey');
    });
    risca();
  }
}
// ***********Apaga tudo****************************
const botãoApaga = document.getElementById('apaga-tudo');
botãoApaga.addEventListener('click', function(){
  let list = document.getElementById("lista-tarefas")
  for(cont = 0; 0 < (list.childElementCount); cont += 1){
  list.removeChild(list.childNodes[0]);
  }
})
