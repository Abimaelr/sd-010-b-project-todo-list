
const botaoTarefa = document.getElementById("criar-tarefa");
const botaoLimpa = document.getElementById("apaga-tudo");
const botaoLimpaEnd = document.getElementById("remover-finalizados");
const botaoSalvar = document.getElementById("salvar-tarefas");
const listaMae = document.getElementById("lista-tarefas");
const tarefas = document.getElementsByClassName("tarefa");
const input = document.getElementById("texto-tarefa");
const completados = document.getElementsByClassName("completed");

// let selectedElement = 0;

openSave();

botaoTarefa.addEventListener("click", criarTarefa);

botaoLimpa.addEventListener("click", clearList);

botaoLimpaEnd.addEventListener("click", clearListEnd);

botaoSalvar.addEventListener("click", save);

listaMae.addEventListener("click", function(event) {
    index = event.target.id
    // selectedElement = index;
    chageColor(index - 1);
})

listaMae.addEventListener("dblclick", function(event) {
    index = event.target.id
    // selectedElement = index;
    selecionar(index - 1);
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

function chageColor(pos) {
    for (let index = 0; index < tarefas.length; index+= 1) {
        if (tarefas[index].style.backgroundColor ===  "rgb(128, 128, 128)") {
            tarefas[index].style.backgroundColor =  "";
        }
    }
    tarefas[pos].style.backgroundColor = "rgb(128, 128, 128)";
}

function selecionar(pos) {
    if (tarefas[pos].classList.contains("completed")) {
        tarefas[pos].classList.remove("completed");
    } else {
        tarefas[pos].classList.add("completed");
    }
}

function clearList() {
    listaMae.innerHTML = "";
}

function clearListEnd() {
     for (let index = (completados.length - 1); index >= 0; index--) {
         completados[index].remove();
     }
     
     for (let index = 0; index < tarefas.length; index++) {
             tarefas[index].id = index + 1;
    }
}

function save() {
    let lista = listaMae.innerHTML;
    localStorage.setItem("lista-tarefas-salva", lista);
}

function openSave() {
    listaMae.innerHTML = localStorage.getItem("lista-tarefas-salva");
}