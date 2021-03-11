// ouvindo o botão add
document.getElementById('criar-tarefa').addEventListener('click', addItem)

function addItem(){
    let text = document.getElementById('texto-tarefa');
    let list = document.getElementById('lista-tarefas');
    let li = document.createElement('li');
    li.innerText = text.value;
    li.className = 'item';
    text.value = "";
    list.appendChild(li);
}   

function changeColor(event){
    const itemList = document.querySelectorAll('ol li')
    for (let index = 0; index < itemList.length; index++ ) {
        console.log('xablau')
            itemList[index].style.backgroundColor = 'white';
      }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)'

}

function itensListener(){
    const itemList = document.querySelectorAll('ol')
    for(let index = 0; index < itemList.length; index++){
    itemList[index].addEventListener('click', changeColor)
    }
}

itensListener()

