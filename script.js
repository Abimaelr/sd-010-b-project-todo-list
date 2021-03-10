let inputTask = document.getElementById('texto-tarefa');
let orderedList = document.getElementById('lista-tarefas');
let buttonCreateTask = document.getElementById('criar-tarefa');

buttonCreateTask.addEventListener('click', function () {
  let task = document.createElement('li')
  task.innerHTML = inputTask.value;
  inputTask.value = '';
  orderedList.appendChild(task);
})

function changeListItemColor() {
  orderedList.addEventListener('click', function (event) {
      console.log(orderedList.children.length)
      for (i = 0; i < orderedList.children.length; i += 1) {
        orderedList.children[i].style.backgroundColor = '';
      }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  })
}
changeListItemColor();
