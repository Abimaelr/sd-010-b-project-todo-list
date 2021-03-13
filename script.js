// Requisito 5: function que adiciona funcionalidades ao button com o id 'criar-tarefa'.
const button = document.querySelector('#criar-tarefa');

function generateTask() {
  const dataInserted = document.querySelector('#texto-tarefa');
  const listFather = document.querySelector('#lista-tarefas');
  const value = dataInserted.value;
  const listElements = document.createElement('li');
  listElements.id = 'item';
  // Criar o EventListener durante a criação dinámica do elemento aprendida no link 'https://ultimatecourses.com/blog/attaching-event-handlers-to-dynamically-created-javascript-elements':
  listElements.addEventListener('click', changeBackground);
  listElements.style.backgroundColor = 'white';
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

// 7. Mudar a cor de fundo do item ao clicar nele:
function changeBackground(event) {
  const element = event.target;

  if (element.style.backgroundColor === 'white') {
    element.style.backgroundColor = 'rgb(128, 128, 128)';
  } else {
    element.style.backgroundColor = 'white';
  }
}

button.addEventListener('click', generateTask);
