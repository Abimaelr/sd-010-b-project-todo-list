const buttonAdd = document.getElementById('criar-tarefa');
let listaTarefas = document.getElementById('lista-tarefas');
buttonAdd.addEventListener('click', function (evento) {
  evento.preventDefault();
  let tarefas = document.querySelector('#tarefas');
  let textUser = tarefas.texto.value;
  let listaLi = document.createElement('li');
  listaLi.textContent = textUser;
  listaTarefas.appendChild(listaLi);
  listaLi.className = ('listada');
  tarefas.reset();
})
//verifiquei a escrita do Carlos Vieira - t10-B pra entender que a minha variavel listada deveria ser li e dentro da função
function choose(clickado) {
  let listada = document.querySelectorAll('li');
  for (index = 0; index < listada.length; index += 1) {
    if (listada[index].classList.contains('listada')) {
      listada[index].classList.remove('grayScale');
    }
  }
  clickado.target.classList.add('grayScale');
}

listaTarefas.addEventListener('click', choose);

listaTarefas.addEventListener('dblclick', function (riscado) {
  riscado.target.classList.toggle('completed');
})
const buttonRem = document.getElementById('apaga-tudo')

buttonRem.addEventListener('click', eraseAll)

function eraseAll() {
  const apagaLista = document.querySelectorAll('li')
  for (let index = 0; index < apagaLista.length; index+=1) {
    apagaLista[index].remove();    
  }
}
const buttonRemSel = document.getElementById('remover-finalizados')

function eraseSel(evento) {
  evento.preventDefault();
  const apagaLista = document.querySelectorAll('.completed');
  for (let index = 0; index < apagaLista.length; index+=1) {
  apagaLista[index].remove();
}
}
buttonRemSel.addEventListener('click', eraseSel);

const buttonGraySel = document.getElementById('remover-selecionado')

function eraseGraySel(evento) {
  evento.preventDefault();
 const apagaLista = document.querySelector('.grayScale')
 apagaLista.remove();
}
buttonGraySel.addEventListener('click', eraseGraySel);