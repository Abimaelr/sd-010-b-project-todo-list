let header = document.createElement('header');
header.innerHTML = 'Minha Lista de Tarefas';
header.setAttribute('id', 'header');
document.body.appendChild(header);

let par = document.createElement('p');
par.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';;
par.id = 'funcionamento';
header.appendChild(par);