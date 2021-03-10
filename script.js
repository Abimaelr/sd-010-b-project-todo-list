//Crio a função do botão "Enviar", apagando o conteúdo da caixa de input e criando um item na lista de tarefas com o valor que o usuario digitou
let tarefa = document.getElementById("texto-tarefa");
let enviar = document.getElementById("criar-tarefa");

enviar.addEventListener("click", adicionaNaListaEApaga);

function adicionaNaListaEApaga() {
    let li = document.createElement("li");
    li.innerHTML = tarefa.value;
    document.getElementById("lista-tarefas").appendChild(li);
    tarefa.value = "";
}

/*   
    Acessei o repositório de Ana Luiza Machado Salgado, onde compreendi a ideia de adicionar uma classe ao invés do backgroundColor direto.
    Source: https://github.com/tryber/sd-09-project-todo-list/tree/analuizams-todo-list-project.

    Acessei o blog de David Walsh para compreender melhor o uso da delegação de um evento ao elemento que o causou utilizando a propagação bubbling. 
    Source: https://davidwalsh.name/event-delegate.
*/

//Seleciono o elemento da minha lista (não dos itens) e determino um event listener para que ao ser clicada, ela mude a classe do elemento que foi o gatilho da ativação do evento.
var lista = document.getElementById("lista-tarefas");
lista.addEventListener("click", atribuiClasseSelected);

function atribuiClasseSelected(element) {
    apagaClasse();
    if (element.target.tagName == "LI") {
        element.target.className = "selected";
    }
}

//Apago a classe selected dos demais elementos para garantir que apenas o atual elemento clicado estará em highlight.
function apagaClasse() {
    let itens = lista.childNodes;
    for (i=0; i<itens.length; i++) {
        itens[i].classList.remove("selected");
    } 
}