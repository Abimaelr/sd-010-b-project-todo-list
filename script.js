function clearInput() {
  document.getElementById('texto-tarefa').value = '';
}

function addItems() {
  let inputed = document.getElementById('texto-tarefa');
  let list = document.getElementById('lista-tarefas');
  let listItem = document.createElement('li');
  if(inputed.value === "") {
    alert("Campo vazio!");
  } else {
    listItem.innerText = inputed.value;
    list.appendChild(listItem);
    clearInput();
    listItem.addEventListener('click', selectItem);
  }
}

function removeSelect() {
  const selected = document.querySelector('.selected');
  if(selected)
  selected.classList.remove('selected');
}

function selectItem(selected) {
  removeSelect();
  const newSelected = selected.target;
  newSelected.classList.add('selected');
}

document.getElementById('criar-tarefa').addEventListener('click', addItems);