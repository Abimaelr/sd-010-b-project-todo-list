const func = document.createElement('p');
func.id = 'funcionamento';
func.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
document.body.appendChild(func);

const text = document.createElement('input');
text.id = 'texto-tarefa';
document.body.appendChild(text);

const taskList = document.createElement('ol');
taskList.id = 'lista-tarefas';
document.body.appendChild(taskList);
