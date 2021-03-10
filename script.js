let maeTitulo = document.getElementById("corpo");
let header = document.createElement("header");
header.id = "titulo";
header.innerText = "Minha Lista de Tarefas";
maeTitulo.appendChild(header);
///////////////////////////////////////////////////////////////////

let maeParagrafo = document.getElementById("titulo");
let paragrafo = document.createElement("p");
paragrafo.id = "funcionamento";
paragrafo.innerText = "Clique duas vezes em um item para marcá-lo como completo";
maeParagrafo.appendChild(paragrafo);
////////////////////////////////////////////////////////////////////

let maeInput = document.getElementById("corpo");
let label = document.createElement("label");
label.innerText = "Digite o item";
let input = document.createElement("input");
input.id = "texto-tarefa";
maeInput.appendChild(label);
maeInput.appendChild(input);
////////////////////////////////////////////////////////////////////////

let maeListaOrdenada = document.getElementById("corpo");
let listaOrdenada = document.createElement("ol");
listaOrdenada.id = "lista-tarefas";
maeListaOrdenada.appendChild(listaOrdenada);

