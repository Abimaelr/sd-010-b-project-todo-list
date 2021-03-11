let text = document.querySelector('#texto-tarefa'); //local digitar tarefa
const addButton = document.querySelector('#criar-tarefa'); //btn add tarefa na minha lista
const listOl = document.querySelector('#lista-tarefas'); //ol para criação da minha li


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


window.onload = () => {
creatTask();


}