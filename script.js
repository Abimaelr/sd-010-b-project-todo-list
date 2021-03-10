const inputField = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');
const btn = document.getElementById('criar-tarefa');

btn.addEventListener ('click',function(){
    const listItem = document.createElement('li');
    listItem.innerText = inputField.value;
    listItem.className = 'li'
    inputField.value = "";
    list.appendChild(listItem);
})

function itemSelection(evt){
    //limpar os outros Itens
    const listItem = document.querySelectorAll('.li')

    for (let index = 0; index < listItem.length; index += 1){
       listItem[index].className = 'li'
    }


    evt.target.className = 'li selected'
}

list.addEventListener('click',itemSelection,false)