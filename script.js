//Requisito 5
//Busquei orientação no repo do meu colega Daniel Ceci. Link:https://github.com/tryber/sd-010-b-project-todo-list/pull/91/commits/c99e38d5fea72bb8da16609b1e2caed592877c49
let botao = document.getElementById("criar-tarefa");
let listaPai = document.getElementById("lista-tarefas");
let textoTarefa = document.getElementById("texto-tarefa");


botao.addEventListener("click", adicionatarefa);

function adicionatarefa(){
    let criaListaTarefas = document.createElement("li");
    criaListaTarefas.innerHTML = textoTarefa.value;
    listaPai.appendChild(criaListaTarefas);
    textoTarefa.value="";
}


