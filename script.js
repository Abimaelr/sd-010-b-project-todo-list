const button = document.getElementById('criar-tarefa');
const ol = document.getElementById('lista-tarefas');
let textos = document.getElementById('texto-tarefa');
console.log(textos)
function creatElement() {
  button.addEventListener('click', () => {
    const newElement = document.createElement('li');
    newElement.innerText = textos.value;
    newElement.className = 'tasks';
    ol.appendChild(newElement);
    textos.value = ''
    textos.focus()
  });
}
creatElement();

const li = document.getElementById