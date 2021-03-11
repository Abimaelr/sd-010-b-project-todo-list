// criando uma terfa

createTaskButton = document.querySelector("#criar-tarefa");
inputTask = document.querySelector("#texto-tarefa");
listTask = document.querySelector("#lista-tarefas");

window.onload = function() {
    let listArrayStorage = JSON.parse(localStorage.getItem("listArrayStorage"));
    let listArrayClasses = JSON.parse(localStorage.getItem("listArrayClasses"));
    if(listArrayClasses !== null){
    
        for(let index = 0; index < listArrayStorage.length; index++){
            let li = document.createElement('li');
            li.innerHTML = listArrayStorage[index];
            if(listArrayClasses[index] == 1){
                li.className = 'completed'
            } 
            listTask.appendChild(li);
        }
        changeBackgroundColor();
        riscaTask();
        buttonApaga();
        buttonFinalizados();  
        buttonSalvar();
        buttonSelecionadosRemover();

    }
} 

function buttonSelecionadosRemover(){
    
    let buttonSelecionado = document.querySelector("#remover-selecionado");

    buttonSelecionado.addEventListener('click', function(){
        // let task = document.querySelector('.selected');
        eventX.remove();
    })     
}

function changeBackgroundColor(){

    let listArray = document.querySelector("ol").childNodes;

    for(let index = 0; index < listArray.length; index++){
      
        listArray[index].addEventListener('click', function(event){
            
            if(event.target.style.backgroundColor !== 'rgb(128, 128, 128)'){
                event.target.style.backgroundColor = 'rgb(128, 128, 128)';
                eventX = event.target;
                            
            }
            else{ 
                
            }
            for(let index1 = 0; index1 < listArray.length; index1++){
                if(listArray[index1] !== event.target){
                    listArray[index1].style.backgroundColor = 'white';
                    
                }
            }
            
        })
    }    
}

function buttonFinalizados(){
    
    let buttonApaga = document.querySelector("#remover-finalizados");
    buttonApaga.addEventListener('click', function(){
        let listArray = document.querySelectorAll(".completed");
        for(let index = 0; index < listArray.length; index++){
            listArray[index].remove();
                
        }
     })     
}

function riscaTask(){
    
    let listArray = document.querySelector("ol").childNodes;

    for(let index = 0; index < listArray.length; index++){
        listArray[index].addEventListener('dblclick', function(event){
            
            if(event.target.classList.contains('completed')){
                event.target.classList.remove('completed');
                event.target.classList.add('notcompleted');
                
            }
            else{ 
                event.target.classList.add('completed');
                event.target.classList.remove('notcompleted');
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

function buttonSalvar(){
    
    let buttonrSalvar = document.querySelector("#salvar-tarefas");
    let listArray = document.querySelector("ol").childNodes;

    
    buttonrSalvar.addEventListener('click', function(event){
        let array = []
        let arrayClasses = []
        for(let index = 0; index < listArray.length; index++){
            array.push(listArray[index].innerHTML)
            if(listArray[index].classList.contains("completed")){
                arrayClasses.push(1);
            }
            else{
                arrayClasses.push(0);
            }
        }
        localStorage.setItem('listArrayStorage', JSON.stringify(array));
        localStorage.setItem('listArrayClasses', JSON.stringify(arrayClasses));
    })     
}


createTaskButton.addEventListener("click", function(){
    if(inputTask.value == ''){
        alert("Invalid Task");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputTask.value;
        li.className = 'notcompleted'
        listTask.appendChild(li);
        inputTask.value = '';
        changeBackgroundColor();
        riscaTask();
        buttonApaga();
        buttonFinalizados();  
        buttonSalvar();
        buttonSelecionadosRemover();
    }
    
})



