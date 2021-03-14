const addButton = document.getElementById('criar-tarefa');
const task = document.getElementById('texto-tarefa');
const oL = document.getElementById('lista-tarefas');
// const taskList = [];

function creatOL() {
  const taski = document.createElement('li');
  taski.className = 'task';
  taski.innerText = task.value;
  oL.appendChild(taski);
  // taskList.push(task.value);
  task.value = '';
}
addButton.addEventListener('click', creatOL);

function listenClick() {
  const clickList = document.getElementsByTagName('li');
  oL.addEventListener('click', (e) => {
    for (let i = 0; i < clickList.length; i += 1) {
      if (clickList[i].classList.contains('selected')) {
        clickList[i].classList.remove('selected');
      }
    }
    e.target.classList.add('selected');
  });
}
listenClick();

// Para as funções abaixo eu tive ajuda do colega Robson Cardoso //

function completedTask(parameter) {
  const completed = parameter;
  completed.classList.add('completed');
}

function removeCompleted(parameter) {
  const incompleted = parameter;
  incompleted.classList.remove('completed');
}

function taskCompleted() {
  document.addEventListener('dblclick', (e) => {
    if (e.target.classList.contains('completed')) {
      removeCompleted(e.target);
    } else {
      completedTask(e.target);
    }
  });
}
taskCompleted();

function eraseList() {
  const listItem = document.querySelectorAll('li');
  for (let index = 0; index < listItem.length; index += 1) {
    listItem[index].remove();
  }
}

document.getElementById('apaga-tudo').addEventListener('click', eraseList);

function eraseCompleted() {
  const completedTasks = document.querySelectorAll('.completed');
  for (let i = 0; i < completedTasks.length; i += 1) {
    completedTasks[i].remove();
  }
}

document.getElementById('remover-finalizados').addEventListener('click', eraseCompleted);

function removeSelected() {
  const eraseSelected = document.querySelector('.selected');
  eraseSelected.remove();
}

document.getElementById('remover-selecionado').addEventListener('click', removeSelected);
