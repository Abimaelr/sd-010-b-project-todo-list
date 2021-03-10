const task = document.getElementById('texto-tarefa');
const saveButton = document.getElementById('criar-tarefa');
const orderedlist = document.getElementById('lista-tarefas'); 
const deleteAll = document.getElementById('apaga-tudo');
const deleteComplete = document.getElementById('remover-finalizados')
const listItem = document.getElementsByTagName('li');

saveButton.addEventListener('click', save);

function save() {
  const createListItem = document.createElement('li');
  createListItem.className = 'list'
  createListItem.innerText = task.value;
  orderedlist.appendChild(createListItem);
  task.value = '';  
  select(); 
  completed(); 
}

function select() {
  for (let i = 0; i < listItem.length; i += 1) {
    listItem[i].addEventListener('click', () => {  
      for (let j = 0; j < listItem.length; j += 1) {        
        listItem[j].classList.remove('selected');
      }
      listItem[i].classList.add('selected');      
    });
  }
}

function completed(){
  for (let i = 0; i < listItem.length; i += 1) {
    listItem[i].addEventListener('dblclick', () => {  
      if (listItem[i].classList.contains('completed') == true) {
        listItem[i].classList.remove('completed'); 
        console.log('oi')     
      } else {
        listItem[i].classList.add('completed');      
        console.log('ola')     
      }
    });
  }
}



















