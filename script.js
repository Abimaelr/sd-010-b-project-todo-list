function addItem(){
    let item = document.getElementById('texto-tarefa')
    let list = document.getElementById('lista-tarefas')
    let li = document.createElement('li');
    li.innerText = item.value
    item.value = "";
    list.appendChild(li)

}   

let createButton = document.getElementById('criar-tarefa')
createButton.addEventListener('click', addItem)