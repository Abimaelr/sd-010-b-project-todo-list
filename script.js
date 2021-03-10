let inputTask = document.getElementById('texto-tarefa');
let orderedList = document.getElementById('lista-tarefas');
let buttonCreateTask = document.getElementById('criar-tarefa');
let buttonCleanList = document.getElementById('apaga-tudo');
let buttonRemoveFinishedTasks = document.getElementById('remover-finalizados');

buttonCreateTask.addEventListener('click', function () {
  let task = document.createElement('li')
  task.innerHTML = inputTask.value;
  inputTask.value = '';
  orderedList.appendChild(task);
})

function changeListItemColor() {
  orderedList.addEventListener('click', function (event) {
      for (i = 0; i < orderedList.children.length; i += 1) {
        orderedList.children[i].style.backgroundColor = '';
      }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  })
}
changeListItemColor();

function scratchTask() {

    orderedList.addEventListener('dblclick', function (event){
        if (event.target.className === 'completed'){
            event.target.className = ""
        } else {
            event.target.className = "completed"
        }

    })
}
scratchTask();


function cleanList(){
    buttonCleanList.addEventListener('click', function(){
        orderedList.textContent = '';
    })
}
cleanList();

function removeFinishedTasks(){
    buttonRemoveFinishedTasks.addEventListener('click', function(event){
        let CompletedTasks = document.getElementById('lista-tarefas');
        for (i = CompletedTasks.children.length - 1; i >= 0; i -= 1){
            let task = CompletedTasks.children[i]
            if (task.className === "completed") {
                CompletedTasks.removeChild(CompletedTasks.children[i])
            }
        }
    })
}
removeFinishedTasks();