
const botaoTarefa = document.getElementById("criar-tarefa");
const listaMae = document.getElementById("lista-tarefas");
const tarefas = document.getElementsByClassName("tarefa");
const input = document.getElementById("texto-tarefa");


botaoTarefa.addEventListener("click", criarTarefa);

listaMae.addEventListener("click", function(event) {
    index = event.target.id
    chageColor(index - 1);
})


function criarTarefa() {
    let tarefa = document.createElement("li");
    tarefa.className = "tarefa";
    tarefa.id = tarefas.length + 1;
    tarefa.innerText = getInputValor();
    listaMae.appendChild(tarefa);
    clearInput();
}

function clearInput() {
    input.value = "";
}

function getInputValor() {
    valor = input.value;
    return valor;
}

function chageColor(index) {
    tarefas[index].style.backgroundColor = "rgb(128, 128, 128)";
}