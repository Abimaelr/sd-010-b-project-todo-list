let getTaskList = document.getElementById('lista-tarefas');
let taskText = document.getElementById('texto-tarefa');


let addTask = document.getElementById('criar-tarefa');
addTask.addEventListener('click', function () {
    let taskLi = document.createElement('li');
    getTaskList.appendChild(taskLi);
    taskLi.innerText = taskText.value;
    taskText.value = '';
    taskLi.addEventListener('click', function () {
      for (child = 0; child < getTaskList.children.length; child += 1){
        getTaskList.children[child].classList.remove('selected');
        }
        taskLi.classList.add('selected');
    });
  });



