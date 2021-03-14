function criaTarefa () {
    let entrada = document.getElementById('texto-tarefa');
    if(entrada.value == ""){
        alert('Insira uma tarefa!');
    } else {
        criaLi(entrada.value);
        entrada.value = "";
    }
}

function criaLi (valor) {
    let ul = document.getElementById('lista-tarefas');

    let cria = document.createElement('li');
    cria.innerText = valor;
    cria.className = 'item';
    ul.append(cria);
}