window.onload = function (){
//Botão add tarefa
    let adicionar = document.querySelector('#criar-tarefa');
    adicionar.addEventListener('click', addTarefa);
    function addTarefa(){
        let tarefa = document.querySelector('input').value;
        let ol = document.querySelector('#lista-tarefas');
        let li = document.createElement('li');
        li.innerHTML = tarefa;
        ol.appendChild(li);
        document.querySelector('input').value = '';
    }







}