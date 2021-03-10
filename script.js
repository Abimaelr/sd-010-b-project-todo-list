const inputField = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');
const btn = document.getElementById('criar-tarefa');

btn.addEventListener ('click',function(){
    const listItem = document.createElement('li');
    listItem.innerText = inputField.value;
    inputField.value = "";
    list.appendChild(listItem);
})
