const bgColor = 'rgb(128, 128, 128)';
const selectionOl = document.getElementById('lista-tarefas');
const inputText = document.getElementById('texto-tarefa');
inputText.focus();

function newTask() {
  if (inputText.value === '') {
    alert('Digite uma Tarefa');
    inputText.focus();
  } else {
    const newLi = document.createElement('li');
    newLi.innerText = inputText.value;
    selectionOl.appendChild(newLi);
    inputText.value = '';
    inputText.focus();
  }
}
// count.style.backgroundColor = 'rgb (128, 128, 128)';
// Escutador de Eventos
const addTask = document.getElementById('criar-tarefa');
addTask.addEventListener('click', newTask);
const selectTask = document.getElementById('lista-tarefas');
selectTask.addEventListener('click', (element) => {
  element.target.style.background = bgColor;
});
