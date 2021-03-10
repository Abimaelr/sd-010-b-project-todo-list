const button = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const input = document.getElementById('texto-tarefa');

function addActivity() {
  button.addEventListener('click', () => {
    const listItem = document.createElement('li');
    listItem.className = 'activity';
    list.appendChild(listItem);
    listItem.innerHTML = input.value;
    input.value = '';
  });
}
addActivity();

window.onload = function changeBackgroundListItem() {
  const backgroundColorList = list.style.backgroundColor = 'white';
  sessionStorage.setItem('colorList', backgroundColorList);
};

list.addEventListener('click', function(event){
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
})

/* const listAll = document.querySelectorAll('#lista-tarefas');

for (let index = 0; index < listAll.length; index += 1) {

  listAll[index].addEventListener('click', (event) => {
    const element = event;
    if (element.target.style.backgroundColor !== 'rgb(128, 128, 128)') {
      element.target.className += ' selected';
      element.target.style.backgroundColor = 'rgb(128, 128, 128)';
    } else {

  });
}
 */