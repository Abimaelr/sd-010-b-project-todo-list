let textoInput = document.getElementById('texto-tarefa');
let botao = document.getElementById('criar-tarefa');
let lista = document.getElementById('lista-tarefas');


botao.addEventListener('click', function () {
    let novaLista = document.createElement('li');
    lista.appendChild(novaLista).innerText = textoInput.value;
    textoInput.value = '';
})

