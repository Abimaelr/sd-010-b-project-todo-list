// inserindo o primeiro parágrafo 
let firstParagraph = document.createElement('p')
document.body.appendChild(firstParagraph)
firstParagraph.id = 'funcionamento'
firstParagraph.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo'

// inserindo o campo para preenchimento
let fieldOfListItem = document.createElement('input')
document.body.appendChild(fieldOfListItem)
fieldOfListItem.id = 'texto-tarefa'

// inserindo uma lista ordenada
let toDoList = document.createElement('ol')
document.body.appendChild(toDoList)
toDoList.id = 'lista-tarefas'