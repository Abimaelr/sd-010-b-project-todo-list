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
    } 
  });
  getInputField.addEventListener('keyup', function (event) {
    evento = event;
    if (evento.keyCode === 13 && getInputField.value.length > 0) {
      const newLi = document.createElement('li');
      newLi.innerText = getInputField.value;
      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } 
  })
};
adicionaTarefa();

const selecionaItem = document.querySelector('#lista-tarefas');
selecionaItem.addEventListener("click", function (event) {
  let evento = event.target;
  let tarefas = document.getElementsByTagName('li');
  for (index = 0; index < tarefas.length; index += 1) {
    tarefas[index].style.backgroundColor = '';
  }
  evento.style.backgroundColor = 'rgb(128, 128, 128)';
})
