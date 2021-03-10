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
};
adicionaTarefa();

const selecionaItem = document.querySelector('#lista-tarefas');
selecionaItem.addEventListener("click", function (event) {
  const evento = event.target;
  const tarefas = document.getElementsByTagName('li');
  for (let index = 0; index < tarefas.length; index += 1) {
    tarefas[index].style.backgroundColor = '';
  };
  evento.style.backgroundColor = 'rgb(128, 128, 128)';
})

const tarefas = document.getElementsByTagName('li');
selecionaItem.addEventListener("dblclick", function (event) {
  const evento = event.target;
  evento.classList.toggle ('completed');  
})
