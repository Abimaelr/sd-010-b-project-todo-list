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

function printActivity() {
  const item = document.querySelectorAll('#lista-tarefas');
  for (let index = 0; index < item.length; index += 1) {
    item[index].addEventListener('click', (event) => {
      const element = event;
      element.target.style.backgroundColor = 'rgb(128, 128, 128)';
    });
  }
}
printActivity();

function SelectActivity() {
  const listItem = document.getElementsByTagName('li');
  list.addEventListener('click', (event) => {
    const element = event;
    for (let index = 0; index < listItem.length; index += 1) {
      listItem[index].classList.remove('activity.selected');
      element.target.classList.add('activity.selected');
    }
  });
}
SelectActivity();
