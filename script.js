// Criando a tag HEADER com o conteudo de H1 com o titulo
const header = document.createElement('header');
document.body.append(header);
const title = document.createElement('h1');
title.innerHTML = 'Minha Lista de Tarefas';
header.append(title);
