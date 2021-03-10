function adicionaTarefa() {
  let getInputField = document.querySelector('#texto-tarefa');
  let addInputButton = document.querySelector('#criar-tarefa');
  let getTaskList = document.querySelector('#lista-tarefas');

  addInputButton.addEventListener('click', function() {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else if (getInputField.value.length = 0) {
      alert('Error: Digite ao menos 1 caractere.');
    }
  })

  getInputField.addEventListener('keyup', function() {
    if (event.keyCode === 13 && getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  });
};
adicionaTarefa();