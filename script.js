// criando uma terfa

createTaskButton = document.querySelector("#criar-tarefa");
inputTask = document.querySelector("#texto-tarefa");
listTask = document.querySelector("#lista-tarefas");


function changeBackgroundColor(){
    for(let index = 0; index < document.querySelectorAll(".list-task").length; index++){
        console.log(document.querySelectorAll(".list-task")[index])
        document.querySelectorAll(".list-task")[index].addEventListener('click', function(event){
            console.log("aqui")
            event.target.style.backgroundColor = 'rgb(128, 128, 128)';
        })
    }    
}

createTaskButton.addEventListener("click", function(){
    if(inputTask.value == ''){
        alert("Invalid Task");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputTask.value;
        li.className = 'list-task';
        listTask.appendChild(li);
        inputTask.value = '';
        changeBackgroundColor();
    }
    
})
