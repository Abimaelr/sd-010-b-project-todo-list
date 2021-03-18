const textoTarefa = document.querySelector('#texto-tarefa');

// eslint-disable-next-line max-lines-per-function
function createNewItem() {
  const newTask = document.createElement('li');
  const list = document.querySelector('#lista-tarefas');
  newTask.innerHTML = textoTarefa.value;
  // eslint-disable-next-line max-lines-per-function
  function corFundo() {
    const cont = document.querySelectorAll('.selected');
    if (cont.length === 0) {
      newTask.className += ' selected';
      newTask.style.backgroundColor = 'rgb(128,128,128)';
    } else {
      const ant = document.querySelector('.selected');
      ant.classList.remove('selected');
      ant.style.backgroundColor = 'white';
      newTask.className += ' selected';
      newTask.style.backgroundColor = 'rgb(128,128,128)';
    }
  }
  function riskItemOrNot() {
    const conta = document.querySelectorAll('.completed');
    if (conta.length === 0) {
      newTask.className += ' completed';
      newTask.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
      newTask.addEventListener('dblclick', riskItemOrNot);
    } else {
      const anta = document.querySelector('.completed');
      anta.classList.remove('completed');
      newTask.style.textDecoration = '';
    }
  }
  newTask.addEventListener('click', corFundo);
  newTask.addEventListener('dblclick', riskItemOrNot);
  list.appendChild(newTask);
  newTask.className += 'created';
}

function eraseItem() {
  textoTarefa.value = '';
}

const theButton = document.querySelector('#criar-tarefa');
theButton.addEventListener('click', createNewItem);
theButton.addEventListener('click', eraseItem);
