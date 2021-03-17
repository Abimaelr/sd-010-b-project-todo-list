function novaTarefa() {

  let lista = document.getElementById("lista-tarefas");

  let tarefa = document.getElementById("texto-tarefa").value;

  console.log(tarefa);
  if (tarefa !== "") {
    let li = document.createElement("li");
    li.className = "tarefa";
    li.innerText = tarefa;

    lista.appendChild(li);

    document.getElementById('texto-tarefa').value = "";

  }

}
