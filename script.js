// Requisito 5: function que adiciona funcionalidades ao button com o id 'criar-tarefa'.
const button = document.querySelector('#criar-tarefa');

function generateTask() {
  const dataInserted = document.querySelector('#texto-tarefa');
  const listFather = document.querySelector('#lista-tarefas');
  const value = dataInserted.value;
  const listElements = document.createElement('li');
  listElements.id = 'item';
  listElements.innerText = value;

  //function que verifica se foi introduzido algo no input:
  function verifiesInput() {
    if (value !== '') {
      listFather.appendChild(listElements);
    } else {
      alert('ERRO: CAMPO DE PREENCHIMENTO VAZIO!');
    }
    dataInserted.value = '';
  }
  verifiesInput()
}

button.addEventListener('click', generateTask);
