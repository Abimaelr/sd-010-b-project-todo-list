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

//Requisito 7 e 8
// Usei como referência o site https://developer.mozilla.org/pt-BR/docs/Web/API/Event/target.
let list = document.querySelector("#lista-tarefas");

list.addEventListener("click", function(event){
    
   let listItens = document.querySelectorAll("li");
   for (let i = 0; i < listItens.length; i += 1){
       listItens[i].style.backgroundColor = "white";
   }
   event.target.style.backgroundColor = "rgb(128, 128, 128)"
})

// Requisito 9
// Acontece o inverso quando clicado novamente. Tive dificuldade nesta quesão na hora de fazer o inverso, sendo assin eu busquei orientação na PR do meu colega Leandro Reis. Se você olhar ambos os códigos, eles estarão muito diferentes, porque basicamente o que eu peguei do código dele foi o "includes", propriedade que eu não conhecia até entaão. Link: https://github.com/tryber/sd-010-b-project-todo-list/pull/14/commits/94fe2d54724282687324e6ff6d1e8c49607fc7d2

list.addEventListener("dblclick", riscaNome);

function riscaNome(event){
    let listTarefas = document.querySelectorAll("li");
    for (let i = 0; i < listTarefas.length; i += 1){
        if (event.target.className.includes('completed')) {
            event.target.classList.remove('completed');
            event.target.style.textDecoration = "none"
          } else {
            event.target.classList.add('completed');
            event.target.style.textDecoration = "line-through solid rgb(0, 0, 0)"
          }
    }
   
}


//Exercício 10

let botaoLimparTudo = document.getElementById("apaga-tudo");

botaoLimparTudo.addEventListener("click", limparLista);

function limparLista(){
    let listTarefas = document.querySelectorAll("li")

    for (let i = 0; i < listTarefas.length; i +=1){
        listTarefas[i].remove()
    }
    
}

//Execício 11
let botaoLimparSelecionados = document.getElementById("remover-finalizados");

botaoLimparSelecionados.addEventListener("click", limparFinalizados);

function limparFinalizados(){
    let listTarefas = document.querySelectorAll("li")

    for (let i = 0; i < listTarefas.length; i +=1){
        if (listTarefas[i].className == "completed"){
            listTarefas[i].remove()
        }
    }  
}
