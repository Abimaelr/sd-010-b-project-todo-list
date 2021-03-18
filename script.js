document.getElementById('#lista-tarefa')


function addNewTask() {
  let getInputField = document.querySelector('#texto-tarefa');
  let addInputButton = document.querySelector('#criar-tarefa');
  let getTaskList = document.querySelector('#lista-tarefas');

  addInputButton.addEventListener('click', function() {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } 
    
  })

  
};

addNewTask();

