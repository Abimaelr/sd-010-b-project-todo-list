// ouvindo o botão add
document.getElementById('criar-tarefa').addEventListener('click', addItem)
// ouvindo o botão  todos
document.getElementById('apaga-tudo').addEventListener('click', deleteAll)
// ouvindo o botão remove concluidos
document.getElementById('remover-finalizados').addEventListener('click', deleteDone)
// ouvindo o botão save
document.getElementById('salvar-tarefas').addEventListener('click', save)

function addItem(){
    let list = document.getElementById('lista-tarefas');
    let li = document.createElement('li');
    li.innerText = document.getElementById('texto-tarefa').value;
    li.className = 'item';
    document.getElementById('texto-tarefa').value = "";
    list.appendChild(li);
}   

function completeTask(event){
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

function deleteDone(){
    const itemList = document.querySelectorAll('.completed')
    for (let index = 0; index < itemList.length; index++ ) {
        itemList[index].remove()
      }
}

function save(){
    let listOl = document.getElementById('lista-tarefas').innerHTML;
    localStorage.itens = listOl;
    alert('Lista salva');
}


function load() {
    if (localStorage.itens) {
      document.getElementById('lista-tarefas').innerHTML = localStorage.itens;
    }
  }
  
  load();