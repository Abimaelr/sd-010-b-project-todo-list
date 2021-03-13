let textoTarefa = document.querySelector('#texto-tarefa');
let listaTarefas = document.querySelector('#lista-tarefas');

textoTarefa.style.backgroundColor = 'yellow';
textoTarefa.style.border = 'solid 3px rgb[123, 123, 123]';
textoTarefa.style.padding = '3px';

listaTarefas.childNodes = textoTarefa;
