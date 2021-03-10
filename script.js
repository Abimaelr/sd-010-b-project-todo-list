// criando uma terfa

createTaskButton = document.querySelector("#criar-tarefa");
inputTask = document.querySelector("#texto-tarefa");
listTask = document.querySelector("#lista-tarefas");

console.log(createTaskButton );


createTaskButton.addEventListener("click", function(){
    if(inputTask.value == ''){
        alert("Invalid Task");
    }
    else{
        li = document.createElement('li');
        li.innerHTML = inputTask.value;
        listTask.appendChild(li);
        inputTask.value = '';
    }
})