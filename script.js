const button = document.querySelector('#criar-tarefa');

function criarLista() {
    const caixaTexto = document.querySelector('#texto-tarefa');
    const lista = document.querySelector('#lista-tarefas');
    button.addEventListener('click', function (){
        const li = document.createElement('li');
        lista.appendChild(li);
        li.innerHTML = caixaTexto.value;
        caixaTexto.value = '';
    })
}

criarLista()
