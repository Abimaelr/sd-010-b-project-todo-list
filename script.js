window.onload = function(){

    function createLi(){

        let ol = document.getElementById('lista-tarefas');
        let li = document.createElement('li');
        ol.appendChild(li); 

        //esta parte do codigo precisa ser melhorada
        let textoTarefa = document.getElementById('texto-tarefa');      
        let textInput = textoTarefa.value;
        textoTarefa.value = "";
        
    // essa parte do codigo está certa        
            li.innerText = textInput;
            
            
    }

    let buttonInput = document.getElementById("criar-tarefa");
    buttonInput.addEventListener('click',function(){
        createLi();
        
    })

    
    

    

    

}
          

