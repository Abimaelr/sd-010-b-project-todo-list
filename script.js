const button = document.getElementById('criar-tarefa');
const ol = document.getElementById('lista-tarefas');
const textos = document.getElementById('texto-tarefa');
console.log(textos);

function creatElement() {
  button.addEventListener('click', () => {
    const newElement = document.createElement('li');
    newElement.innerText = textos.value;
    newElement.className = 'tasks';
    ol.appendChild(newElement);
    textos.value = '';
    textos.focus();
  });
}
creatElement();
const li = document.getElementsByClassName('tasks');

function changeLi() {
  for (let index = 0; index < li.length; index += 1) {
    li[index].addEventListener('click', (event) => {
      event.target.style.backgroundColor = 'rgb(128,128,128)';
    });
  }
}

button.addEventListener('click', changeLi);


const reset = document.getElementById('apaga-tudo');

let listaTarefas = document.getElementById('lista-tarefas')
function removeTask() {

  for (let index = li.length; index >=  0; index -= 1) {
    listaTarefas.lastChild.remove();
  }

}
reset.addEventListener('click', removeTask)
