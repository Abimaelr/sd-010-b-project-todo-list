let tarefa = document.getElementById("texto-tarefa");

let submit = document.getElementById("criar-tarefa");
submit.addEventListener("click" ,adicionaNaListaEApaga);

function adicionaNaListaEApaga() {
    let li = document.createElement("li");
    li.innerHTML = tarefa.value;
    document.getElementById("lista-tarefas").appendChild(li);
    tarefa.value = "";
}