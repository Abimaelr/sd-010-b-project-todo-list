const button = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const input = document.getElementById('texto-tarefa');

function addActivity() {
  button.addEventListener('click', () => {
    const listItem = document.createElement('li');
    list.appendChild(listItem);
    listItem.innerHTML = input.value;
    input.value = '';
  });
}
addActivity();

window.onload = function defaultBackgroundList() {
  let backgroundColorList = list.style.backgroundColor;
  backgroundColorList = 'white';
  sessionStorage.setItem('colorList', backgroundColorList);
};

function selectActivity() {
  const listItem = document.getElementsByTagName('li');
  list.addEventListener('click', (event) => {
    const element = event;
    for (let index = 0; index < listItem.length; index += 1) {
      listItem[index].classList.remove('selected');
    }
    element.target.classList.add('selected');
  });
}
selectActivity();

function completeActivity() {
  list.addEventListener('dblclick', (event) => {
    const element = event;
    element.target.classList.toggle('completed');
  });
}
completeActivity();
