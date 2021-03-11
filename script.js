// ouvindo o botão add
document.getElementById('criar-tarefa').addEventListener('click', addItem)
// ouvindo o botão remove
document.getElementById('apaga-tudo').addEventListener('click', deleteAll)

function addItem(){
    let text = document.getElementById('texto-tarefa');
    let list = document.getElementById('lista-tarefas');
    let li = document.createElement('li');
    li.innerText = text.value;
    li.className = 'item';
    text.value = "";
    list.appendChild(li);
}   

function completeTask(event){
   /* const itemList = document.querySelectorAll('ol li')
    for (let index = 0; index < itemList.length; index++ ) {
            if (itemList[index].classList.contains('completed')) {
                itemList[index].classList.remove('completed');
            }
      }*/
            if (event.target.classList.contains('completed')) {
                event.target.classList.remove('completed');
            } else { event.target.classList.add('completed');}
}

function changeColor(click){
    const itemList = document.querySelectorAll('ol li')
    for (let index = 0; index < itemList.length; index++ ) {
            itemList[index].style.backgroundColor = 'rgb(256, 256, 256)';
      }
    click.target.style.backgroundColor = 'rgb(128, 128, 128)'
}

function itensListener(){
    const itemList = document.querySelectorAll('ol')
    for(let index = 0; index < itemList.length; index++){
    itemList[index].addEventListener('click', changeColor)
    itemList[index].addEventListener('dblclick', completeTask)
    }
}

itensListener()

function deleteAll() {
    const itemList = document.querySelectorAll('.item')
    for (let index = 0; index < itemList.length; index++ ) {
        itemList[index].remove()
      }

}
