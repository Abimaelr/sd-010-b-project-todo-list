function addNewItemList() {
  const getInputButton = document.querySelector('#criar-tarefa');
  const getInputField = document.querySelector('#texto-tarefa');
  const getOl = document.querySelector('#lista-tarefas');

  getInputButton.addEventListener('click', function () {
    if (getInputField.value.length > 0) {
      const newLi = document.createElement('li');
      newLi.innerText = getInputField.value;
      //  newLi.className = 'selected';
      getOl.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  });
}

addNewItemList();

function changeColorItem() {
  const getOl = document.querySelector('#lista-tarefas');

  getOl.addEventListener('click', function (event) {
    let getLi = document.querySelector('.selected');
    if (getLi != null) {
      getLi.classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}

changeColorItem();

function lineThroughItem() {
  const getOl = document.querySelector('#lista-tarefas');
  getOl.addEventListener('dblclick', function (event) {
    let getLi = document.querySelector('.completed');
    if (getLi != null) {
      getLi.classList.remove('completed');
    }
    event.target.classList.add('completed');
  });
}

lineThroughItem();
