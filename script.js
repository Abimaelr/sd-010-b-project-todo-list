//Crio a função do botão "Enviar", apagando o conteúdo da caixa de input e criando um item na lista de tarefas com o valor que o usuario digitou
let tarefa = document.getElementById("texto-tarefa");
let submit = document.getElementById("criar-tarefa");

submit.addEventListener("click", adicionaNaListaEApaga);

function adicionaNaListaEApaga() {
    let li = document.createElement("li");
    li.innerHTML = tarefa.value;
    document.getElementById("lista-tarefas").appendChild(li);
    tarefa.value = "";
}

let item = document.getElementsByTagName("li");
for (i=0; i<item.length; i++) {
    item[i].addEventListener("click", mudaCorDeFundo);
}

function mudaCorDeFundo() {
    this.style.backgroundColor = "rgb(128, 128, 128)";
}