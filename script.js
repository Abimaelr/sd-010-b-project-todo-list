let task = document.getElementById('texto-tarefa');
let addTask = document.getElementById('criar-tarefa');
let list = document.getElementById('lista-tarefas');
let clickItem = document.getElementsByClassName('listItem');

addTask.addEventListener('click', function(){  
  let newTask = document.createElement('li');
  newTask.classList.add('listItem');
  list.appendChild(newTask).innerHTML = task.value;
  task.value = '';  
  changeColor();  
});

function changeColor() {
  for (let index= 0; index < clickItem.length; index += 1) {
    clickItem[index].addEventListener('click', function() {
      for (let idx = 0; idx < clickItem.length + 1; idx += 1) {
        if(clickItem[idx]) {
          clickItem[idx].classList.remove('color');
        }
        event.target.classList.add('color');   
      }
    });
  }
}
