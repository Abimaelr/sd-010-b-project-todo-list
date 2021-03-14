let input = document.createElement('input')
input.id = 'texto-tarefa'
input.type = 'text'
input.value = ''
document.body.appendChild(input)

let botao = document.createElement('button')
botao.innerHTML = 'Add'
botao.id = 'criar-tarefa'
document.body.appendChild(botao)


let listaOrdenada = document.createElement('ol')
listaOrdenada.id = 'lista-tarefas'
document.body.appendChild(listaOrdenada)

botao.addEventListener('click', addlist)


//functions 

function addlist (){
    if (input.value === ''){
        alert('Você tem que digitar algo')
    } else {
        let createli = document.createElement('li')
        createli.className = 'lista'
        createli.innerText = document.getElementById('texto-tarefa').value;
        listaOrdenada.appendChild(createli)
        input.value = ''
    }
}