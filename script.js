const listaTarefas = document.getElementById('lista-tarefas').getElementsByTagName('li');

function clickItem() {
  for (let i = 0; i < listaTarefas.length; i +=1) {
    listaTarefas[i].addEventListener('click', function () {
      for (let j = 0; j < listaTarefas.length; j += 1) {
        if (listaTarefas[j].style.backgroundColor === 'rgb(128, 128, 128)') {
          listaTarefas[j].style.backgroundColor = 'white';
        }
      }
      listaTarefas[i].style.backgroundColor = 'rgb(128, 128, 128)';
    })
  }
}

function dblClickItem() {
  for (let i = 0; i < listaTarefas.length; i += 1) {
    listaTarefas[i].addEventListener('dblclick', function () {
      console.log(listaTarefas[i]);
      if (listaTarefas[i].className === 'completed') {
        listaTarefas[i].classList.remove('completed');
      } else {
        listaTarefas[i].className = 'completed';
      }     
    })
  }
}

function clear() {
  for (let i = 0; i < listaTarefas.length; i += 1) {
    document.getElementById('apaga-tudo').addEventListener('click', function () {
      listaTarefas[i].remove();
    })    
  }
}

function removeFinalized(){
  for (let i = 0; i < listaTarefas.length; i += 1) {
    document.getElementById('remover-finalizados').addEventListener('click', function () {
      if (listaTarefas[i].className === 'completed') {
        listaTarefas[i].remove();
      }     
    })    
  }
}

function removeSelectd() {
  for (let i = 0; i < listaTarefas.length; i += 1) {
    document.getElementById('remover-selecionado').addEventListener('click', function () {
      if (listaTarefas[i].style.backgroundColor === 'rgb(128, 128, 128)') {
        listaTarefas[i].remove();
      }     
    })    
  }
}

function createTask() {
  const button = document.getElementById('criar-tarefa');
  const ol = document.getElementById('lista-tarefas');
  const input = document.getElementById('texto-tarefa');
  button.addEventListener('click', function creatLi() {
    const li = document.createElement('li');
    li.innerText = input.value;
    ol.appendChild(li);
    input.value = '';
    clickItem();
    dblClickItem();
    clear();
    removeFinalized();
    removeSelectd();
  })
}
createTask();
