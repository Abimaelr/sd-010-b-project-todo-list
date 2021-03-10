const func = document.createElement('p');
func.id = 'funcionamento';
func.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
document.body.appendChild(func);

const text = document.createElement('input');// Fonte: https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLElement/input_event
text.id = 'texto-tarefa';
document.body.appendChild(text);

const taskList = document.createElement('ol');
taskList.id = 'lista-tarefas';
document.body.appendChild(taskList);

const button = document.createElement('button');
button.id = 'criar-tarefa';
button.innerHTML = 'Adicionar';
document.body.insertBefore(button, text.nextSibling);
button.addEventListener('click', function () {
  if (text.value !== '') { // Fonte: https://pt.stackoverflow.com/questions/21860/como-pegar-input-usando-html-e-javascript
    const newTask = document.createElement('li');
    newTask.innerHTML = text.value;
    taskList.appendChild(newTask);
    text.value = '';
  }
});

// Fonte: (PR do Vinicius Bodra) https://github.com/tryber/sd-010-b-project-todo-list/pull/33/files
const tasks = document.getElementById('lista-tarefas');
const list = document.getElementsByTagName('li');
tasks.addEventListener('click', function (event) {
  for (let index = 0; index < tasks.childNodes.length; index += 1) {
    list[index].classList.remove('selected');
  }
  if (event.target.tagName == 'LI') {
    event.target.className = 'selected';
  }
});
