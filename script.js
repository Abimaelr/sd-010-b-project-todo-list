function addNewItemList() {
  let getInputButton = document.querySelector('#criar-tarefa');
  let getInputField = document.querySelector('#texto-tarefa');
  let getOl = document.querySelector('#lista-tarefas');

  getInputButton.addEventListener('click', function () {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;
      getOl.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  });
}

addNewItemList();
