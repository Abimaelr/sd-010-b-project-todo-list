function novaTarefa() {

  let lista = document.getElementById("lista-tarefas");

  let tarefa = document.getElementById("texto-tarefa").value;

  if (tarefa !== "") {

    let li = document.createElement("li");
		
    li.className = "tarefa";

    li.innerText = tarefa;

    lista.appendChild(li);

    document.getElementById('texto-tarefa').value = "";

		li.addEventListener('click', selecionarTarefa);
		
  }
}

function selecionarTarefa(evento) {

	let selTarefa = evento.target;
	let listaDeTarefas = document.getElementsByClassName("tarefa");

	for (let index = 0; index < listaDeTarefas.length; index++) {

		listaDeTarefas[index].classList.remove("cinza");
	
	}
	
	selTarefa.classList.add("cinza");
}

