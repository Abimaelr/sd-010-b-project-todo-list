function addTask() {
  const button = document.getElementById('criar-tarefa');
  const input = document.getElementById('texto-tarefa');
  const lista = document.getElementById('lista-tarefas');
  button.addEventListener('click', function createTask() {
    const newTask = document.createElement('li');
    newTask.innerText = input.value;
    lista.appendChild(newTask);
    input.value = '';
    backgroundReset ();
  });
}

addTask();

function changeItem () {
  const list = document.getElementById('lista-tarefas');
  list.addEventListener('click', function backTask(event) {
    event.target.style.backgroundColor = 'rgb(128,128,128)';
  });
}

changeItem();

function backgroundReset () {
  const itemList = document.getElementsByTagName('li');
  for (let index = 0; index < itemList.length; index += 1) {
    itemList[index].addEventListener('click', function () {
      for (let index2 = 0; index2 < itemList.length; index2 += 1) {
        if (index2 !== index) {
          itemList[index2].style.backgroundColor = '';
        }
      }
    });
  }
}

backgroundReset();

function overline () {
  const list = document.getElementById('lista-tarefas');
  list.addEventListener('dblclick', function (event) {
    if(event.target.className === 'completed') {
      event.target.className = '';
    } else {
      event.target.className = 'completed';
    }
  });
}

overline();

function clear() {
const cleanButton = document.getElementById('apaga-tudo');
cleanButton.addEventListener('click', function () {
  const list = document.getElementById('lista-tarefas');
  while (list.firstChild) {
    list.removeChild(list.lastChild);
  }
});
}

clear();
