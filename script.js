function getList() {
    let getButton = document.querySelector('#criar-tarefa')
    let getOl = document.querySelector('#lista-tarefas')
    let getInput = document.querySelector('#texto-tarefa')
        getButton.addEventListener('click', function() {
            let creationLi = document.createElement('li')
            getOl.appendChild(creationLi).innerHTML = getInput.value
            getInput.value = '';
    })
    let getLi = document.querySelectorAll('ol')
    for(let index = 0; index < getLi.length; index+=1){
        getLi[index].addEventListener('click', function(evt) {
            evt.target.style.color='yellow';
            evt.target.style.backgroundColor='rgb(128, 128, 128)';
        })
    }
}
getList()