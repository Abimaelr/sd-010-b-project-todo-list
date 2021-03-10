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

