window.onload = function(){

    

    function createLi(){

        let ol = document.getElementById('lista-tarefas');
        let li = document.createElement('li');
        ol.appendChild(li); 

        //recuperando o elemento
        let textoTarefa = document.getElementById('texto-tarefa');   
        // recebendo o valor do elemento   
        let textInput = textoTarefa.value;
        //reatribuindo o valor do elemento
        textoTarefa.value = ""; 
        
          // essa parte do codigo está certa        
            li.innerText = textInput;
            li.classList.add("white");
            
            
    }

    let buttonInput = document.getElementById("criar-tarefa");
    buttonInput.addEventListener('click',function(){
        createLi();
        
    })    

    // event.target e sua sintaxe!!
    
    let orderList = document.getElementById('lista-tarefas');
    orderList.addEventListener('click', event => {
        const whiteList = document.querySelectorAll('#lista-tarefas li');

        for(let i = 0; i < whiteList.length; i += 1){

        whiteList[i].style.backgroundColor = '';

        }

        event.target.style.backgroundColor = 'rgb(128,128,128)';

    })

   

    

}
          

