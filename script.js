window.onload = function(){

    function createLi(){

    let ol = document.getElementById('lista-tarefas');
    let li = document.createElement('li');
    ol.appendChild(li);

    }

    let buttonInput = document.getElementById("criar-tarefa");
    buttonInput.addEventListener('click',function(){
        //criando tarefas
        createLi();
    })

}
          

