const paragrafo = document.createElement('p');
paragrafo.innerText = "Clique duas vezes em um item para marcá-lo como completo";
paragrafo.id = 'funcionamento'
const body = document.querySelector('body');
body.appendChild(paragrafo);

const digitar = document.createElement('input');
digitar.id = 'texto-tarefa';
digitar.type = 'text';
body.appendChild(digitar);
