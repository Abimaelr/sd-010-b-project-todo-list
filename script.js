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
  }
}
document.getElementById('criar-tarefa').addEventListener('click', addItems);