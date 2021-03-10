window.onload = function () {
// Botão add tarefa
    const adicionar = document.querySelector('#criar-tarefa');
    adicionar.addEventListener('click', addTarefa);
    function addTarefa(){
        let tarefa = document.querySelector('input').value;
        let ol = document.querySelector('#lista-tarefas');
        let li = document.createElement('li');
        li.innerHTML = tarefa;
        ol.appendChild(li);
        document.querySelector('input').value = '';
        li.addEventListener('click', listaSelect);
    }

// Item lista selecionado
    function listaSelect (liEmQuestao){
        let lis = document.querySelectorAll('#lista-tarefas li');
        let target = liEmQuestao.target;
        for(let i = 0; i < lis.length; i++){
            lis[i].classList.remove('selected');
        }
        target.classList.add('selected');
    }







}