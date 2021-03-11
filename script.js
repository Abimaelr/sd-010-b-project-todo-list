function getList() {
    let getButton = document.querySelector('#criar-tarefa')
    let getOl = document.querySelector('#lista-tarefas')
    let getInput = document.querySelector('#texto-tarefa')
        getButton.addEventListener('click', function() {
            let creationLi = document.createElement('li')
            getOl.appendChild(creationLi).innerHTML = getInput.value
            getInput.value = '';
    })
}
getList()