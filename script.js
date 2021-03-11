
let tamanhoDaLista =[]

// **************Armazena o texto****************

let entradaDeTarefa;
let caixaDeEntrada = document.getElementById('texto-tarefa');
caixaDeEntrada.addEventListener('keyup', tarefa);

function tarefa()  {
 entradaDeTarefa = caixaDeEntrada.value;
}
// **************Adciona o texto na lista****************
let paiDaLista = document.getElementById('lista-tarefas');
let botão = document.getElementById('criar-tarefa');
botão.addEventListener('click', vaiPraLista); 

function vaiPraLista() {
  let li = document.createElement('li');
  li.innerText = entradaDeTarefa;
  caixaDeEntrada.value = '';
  paiDaLista.appendChild(li);
  tamanhoDaLista=document.querySelectorAll('li')
  teste()
}
// ***********Pinta de cinza o item selecionado***************
function teste(){
for (let cont = 0; cont < tamanhoDaLista.length; cont += 1) {
  tamanhoDaLista[cont].addEventListener('click',function() {
      let apagaACor = document.querySelector('.grey')
      if(apagaACor !== null){
      apagaACor.classList.remove('grey')
    } 
      this.classList.add('grey');
  });
  }
}


