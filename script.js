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

function selectItem() {
  let notSelected = document.getElementsByTagName('li');
  let gray = 'rgb(128, 128, 128)';
  for(let index = 0; index < notSelected.length; index += 1) {
    notSelected.target.classList.add('selected');
  }
  if(notSelected.classList.contains('selected')) {
    this.style.backgroundColor = gray;
  }
}

document.getElementById('criar-tarefa').addEventListener('click', addItems);
document.getElementsByTagName('li').addEventListener('click', selectItem);