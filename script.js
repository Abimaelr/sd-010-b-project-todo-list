const button = document.getElementById('criar-tarefa');
const ol = document.getElementById('lista-tarefas');
const textos = document.getElementById('texto-tarefa');
console.log(textos)
function creatElement() {
  button.addEventListener('click', () => {
    const newElement = document.createElement('li');
    newElement.innerText = textos.value;
    ol.appendChild(newElement);
  });
}
creatElement();
