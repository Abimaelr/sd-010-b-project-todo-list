// criando uma terfa

createTaskButton = document.querySelector("#criar-tarefa");
inputTask = document.querySelector("#texto-tarefa");
listTask = document.querySelector("#lista-tarefas");


function changeBackgroundColor(){

    let listArray = document.querySelector("ol").childNodes;

    for(let index = 0; index < listArray.length; index++){
        // console.log(document.querySelectorAll(".list-task")[index])

        listArray[index].addEventListener('click', function(event){
            if(event.target.style.backgroundColor !== 'rgb(128, 128, 128)'){
                event.target.style.backgroundColor = 'rgb(128, 128, 128)';
            }
            else{ 
            }
            for(let index1 = 0; index1 < listArray.length; index1++){
                console.log("aqui")
                if(listArray[index1] !== event.target){
                    listArray[index1].style.backgroundColor = 'white';
                }
            }
        })
    }    
}

function buttonFinalizados(){
    
    let buttonApaga = document.querySelector("#remover-finalizados");
    let listArray = document.querySelectorAll(".completed");
    console.log(listArray);

    buttonApaga.addEventListener('click', function(event){
        for(let index = 0; index < listArray.length; index++){
            listArray[index].remove();
                
        }
     })     
}

function riscaTask(){
    
    let listArray = document.querySelector("ol").childNodes;

    for(let index = 0; index < listArray.length; index++){
        listArray[index].addEventListener('dblclick', function(event){
            console.log(event.target);
            console.log(event.target.className);
            if(event.target.className !== 'completed'){
                event.target.className = 'completed';
                buttonFinalizados(); 
            }
            else{ 
                event.target.classList.remove('completed');
            }
        })
    }  
}

function buttonApaga(){
    
    let buttonrApaga = document.querySelector("#apaga-tudo");
    let listArray = document.querySelector("ol").childNodes;

    buttonrApaga.addEventListener('click', function(event){
        for(let index = 0; index < listArray.length; index++){
            listArray[index].remove();
                
        }
     })     
}



createTaskButton.addEventListener("click", function(){
    if(inputTask.value == ''){
        alert("Invalid Task");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputTask.value;
        listTask.appendChild(li);
        inputTask.value = '';
        changeBackgroundColor();
        riscaTask();
        buttonApaga();
        buttonFinalizados();  
    }
    
})
