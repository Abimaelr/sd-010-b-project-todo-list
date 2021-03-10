let botoncio = document.getElementById("criar-tarefa");
let textoDigitado = document.getElementById("texto-tarefa");
let listaTarefas = document.getElementById("lista-tarefas");


botoncio.addEventListener("click", criaItemLista);


function criaItemLista(){
    
        let itemLista = document.createElement("li");
        itemLista.innerHTML = textoDigitado.value;
        listaTarefas.appendChild(itemLista);
        textoDigitado.value = "";
}