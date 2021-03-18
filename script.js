






function addNewTask() { //cria lista de tarefas apertando botao
  const getInputField = document.querySelector('#texto-tarefa'); 
  const addInputButton = document.querySelector('#criar-tarefa');
  const getTaskList = document.querySelector('#lista-tarefas');

  addInputButton.addEventListener('click', function() {
    if (getInputField.value.length > 0) {
      const newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } 
    
  })

  
};

addNewTask();



let listaBonita = document.querySelector('#lista-tarefas')
function listMudaCor() {
  for (let i = 0; i < listaBonita.length; i += 1) {

    listaBonita[i].addEventListener('click', function() {
      let newColor = 'rgb(128,128,128)';
      if( listaBonita[i].style.backgroundColor === newColor) {
          listaBonita[i].style.backgroundColor = backgroundColor;

      }
      else {listaBonita[i].style.backgroundColor === newColor
      }
      
    })
  }
}

//function changeBackground() {
 // let getListasTarefas = document.querySelector('#listas-tarefas');
  //let getClassItem = 
  //let backgroundColor = 'rgb(255, 128, 128)';
  //let setColor = 'rgb(128, 128, 128';
