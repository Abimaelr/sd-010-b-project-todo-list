let text = document.querySelector('#texto-tarefa'); //local digitar tarefa
const addButton = document.querySelector('#criar-tarefa'); //btn add tarefa na minha lista
const listOl = document.querySelector('#lista-tarefas'); //ol para criação da minha li
const buttonClean = document.querySelector('#apaga-tudo')// btn apaga tudo
const btnRemoveFinalizados =document.querySelector("#remover-finalizados")

const  creatTask = () => {
 addButton.addEventListener('click',function(){
 let createElementLi = document.createElement('li');
 addTaskStyle(createElementLi);

 listOl.appendChild(createElementLi);
 text.value = "";

 })
}
const addTaskStyle = (createElementLi) => {
  createElementLi.innerText = text.value;
  createElementLi.classList.add("task");
}


const addSelectedTask =() => {
listOl.addEventListener('click', function(event) {
let selectedTask = document.querySelector('.selected');
  if(selectedTask && event.target.classList.contains('task') ){
  selectedTask.classList.remove('selected');
  }
  if(event.target.classList.contains('task')){
    event.target.classList.add('selected');
  }
})
}

const addCompletedTask = ( ) => {
  listOl.addEventListener('dblclick', function(event){
  if(event.target.classList.contains('completed') ) {
    event.target.classList.remove('completed')
  }
  else {
    event.target.classList.add('completed');

  }
  })
}

const buttonCleanList = () => {
 buttonClean.addEventListener('click', function(){
 listOl.innerHTML = '';
 })

}

const buttonCleanCompleted = () => {
  btnRemoveFinalizados.addEventListener('click' , function(){
    let completeds = document.querySelectorAll('li.completed')
      for(index = 0; index < completeds.length; index += 1){
        listOl.removeChild(completeds[index]);
      }
          // completeds.forEach((key)=>{
          //   listOl.removeChild(key);
          // })
  })
}




window.onload = () => {
creatTask();
addSelectedTask();
addCompletedTask();
buttonCleanList();
buttonCleanCompleted();

}