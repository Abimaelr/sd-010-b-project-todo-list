const listaTarefas = document.getElementById('lista-tarefas').getElementsByTagName('li');

function createTask() {
  const button = document.getElementById('criar-tarefa');
  const ol = document.getElementById('lista-tarefas');
  const input = document.getElementById('texto-tarefa');
  button.addEventListener('click', function creatLi() {
    const li = document.createElement('li');
    li.innerText = input.value;
    ol.appendChild(li);
    input.value = '';
    li.addEventListener('click', clickItem, false);
    li.addEventListener('dblclick', dblClickItem, false);
    clear();
  })
}
createTask();

function clickItem(li) {
  for (let i = 0; i < listaTarefas.length; i +=1) {
    listaTarefas[i].addEventListener('click', function (){
      for (let j = 0; j < listaTarefas.length; j += 1) {
        if (listaTarefas[j].style.backgroundColor === 'rgb(128, 128, 128)') {
          listaTarefas[j].style.backgroundColor = 'white';
        }
      }
      listaTarefas[i].style.backgroundColor = 'rgb(128, 128, 128)';
    })    
  }
}

function dblClickItem(li) {
  if (li.target.className === 'completed') {
    li.target.className = '';
  } else {
    li.target.className = 'completed';
  }
}

function clear() {
  for (let i = 0; i < listaTarefas.length; i += 1) {
    document.getElementById('apaga-tudo').addEventListener('click', function (){
      listaTarefas[i].remove();
    })    
  }
}
