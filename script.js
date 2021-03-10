function adicionaTarefa() {
  const getInputField = document.querySelector('#texto-tarefa');
  const addInputButton = document.querySelector('#criar-tarefa');
  const getTaskList = document.querySelector('#lista-tarefas');
  addInputButton.addEventListener('click', function () {
    if (getInputField.value.length > 0) {
      const newLi = document.createElement('li');
      newLi.innerText = getInputField.value;
      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('ERROR: Informe a tarefa a ser adicionada!');
    }
  });
}
adicionaTarefa();

const selecionaItem = document.querySelector('#lista-tarefas');
const tarefas = document.getElementsByTagName('li');
selecionaItem.addEventListener('click', function (event) {
  const evento = event.target;
  for (let index = 0; index < tarefas.length; index += 1) {
    tarefas[index].style.backgroundColor = '';
  }
  evento.style.backgroundColor = 'rgb(128, 128, 128)';
});

selecionaItem.addEventListener('dblclick', function (event) {
  const evento = event.target;
  evento.classList.toggle('completed');
});

const botaoApaga = document.querySelector('#apaga-tudo');
botaoApaga.addEventListener('click', function () {
  selecionaItem.innerText = '';
});

const botaoRemoveFinalizados = document.querySelector('#remover-finalizados');
botaoRemoveFinalizados.addEventListener('click', function () {
  for (let index = 0; index < tarefas.length; index += 1) {
    if (tarefas[index].classList.contains('completed')) {
      selecionaItem.removeChild(tarefas[index]);
      index -= 1;
    }
  }
});

const botaoSalvar = document.querySelector('#salvar-tarefas');
botaoSalvar.addEventListener('click', function () {  
  const itens = [];
  if (tarefas !== null) {
    for (let index = 0; index < tarefas.length; index += 1) {
      itens.push(tarefas[index].innerHTML);
    }
    localStorage.setItem('todoList', JSON.stringify(itens));
  }
})

function recuperaItens() {
  const recupera = JSON.parse(localStorage.getItem('todoList'));
  if (recupera !== null) {
    for (let index = 0; index < recupera.length; index += 1) {
      let itemRecupera = document.createElement('li');
      itemRecupera.innerHTML = recupera[index];
      selecionaItem.appendChild(itemRecupera);
    }    
  }
}

const botaoRemoveSelecionado = document.querySelector('#remover-selecionado');
botaoRemoveSelecionado.addEventListener('click', function () {
  for (let index = 0; index < tarefas.length; index += 1) {
    if (tarefas[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      selecionaItem.removeChild(tarefas[index]);
    }
  }
});

recuperaItens();