// Requisito 5: function que adiciona funcionalidades ao button com o id 'criar-tarefa'.
const button = document.querySelector('#criar-tarefa');

function generateTask() {
  const dataInserted = document.querySelector('#texto-tarefa');
  const listFather = document.querySelector('#lista-tarefas');
  const value = dataInserted.value;
  const listElements = document.createElement('li');
  listElements.className = 'item';
  listElements.innerText = value;

  // function que verifica se foi introduzido algo no input:
  function verifiesInput() {
    if (value !== '') {
      listFather.appendChild(listElements);
      dataInserted.focus();
    } else {
      alert('ERRO: CAMPO DE PREENCHIMENTO VAZIO!');
    }
    dataInserted.value = '';
  }
  verifiesInput();
}

// 7 e 8 Mudar a cor de fundo do item ao clicar nele Somente permitir um elemento selecionado por vez:
const background = 'rgb(128, 128, 128)';
const allElements = document.querySelector('#lista-tarefas');
const tasks = document.getElementsByTagName('li');

function setSelected() {
  allElements.addEventListener('click', function (event) {
    const actual = event.target;

    for (let index = 0; index < tasks.length; index += 1) {
      tasks[index].style.backgroundColor = '';
    }
      actual.style.backgroundColor = background;
  });
}

// 9. Ao clicar duas vezes no item, ele será riscado (e vice-e-versa):
function completedTasks(event) {
  const actual = event.target;

  for (let index = 0; index < tasks.length; index += 1) {
    if (actual.className === 'item') {
     actual.className = 'completed';
    } else {
    actual.className = 'item';
    }
  }
}
setSelected();
button.addEventListener('click', generateTask);
allElements.addEventListener('dblclick', completedTasks);
