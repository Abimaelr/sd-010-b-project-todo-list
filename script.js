const addButton = document.getElementById('criar-tarefa');
const task = document.getElementById('texto-tarefa');
const oL = document.getElementById('lista-tarefas');
let taskList = [];

function creatOL() {   
  const taski = document.createElement('li');
  taski.className = 'task';
  taski.innerText = task.value;
  oL.appendChild(taski);  
  taskList.push(task.value);
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

// function dbclick