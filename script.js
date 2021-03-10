// Cria tag header com titulo
let maeTitulo = document.getElementById("corpo");
let header = document.createElement("header");
header.id = "titulo";
header.innerText = "Minha Lista de Tarefas";
maeTitulo.appendChild(header);

///////////////////////////////////////////////////////////////////

// Cria paragrafo
let maeParagrafo = document.getElementById("titulo");
let paragrafo = document.createElement("p");
paragrafo.id = "funcionamento";
paragrafo.innerText = "Clique duas vezes em um item para marcá-lo como completo";
maeParagrafo.appendChild(paragrafo);

////////////////////////////////////////////////////////////////////

// Cria input
let maeInput = document.getElementById("corpo");
let label = document.createElement("label");
label.innerText = "Digite o item";
let input = document.createElement("input");
input.id = "texto-tarefa";
maeInput.appendChild(label);
maeInput.appendChild(input);

////////////////////////////////////////////////////////////////////////

// Cria lista ordenada
let maeListaOrdenada = document.getElementById("corpo");
let listaOrdenada = document.createElement("ol");
listaOrdenada.id = "lista-tarefas";
maeListaOrdenada.appendChild(listaOrdenada);

//////////////////////////////////////////////////////////////////////////

// Cria botão
let maeBotao = document.getElementById("corpo");
let botao = document.createElement("button");
botao.innerText = "Click para adicionar tarefa";
botao.id = "criar-tarefa";
maeBotao.appendChild(botao);

//////////////////////////////////////////////////////////////////////////////

// Pega valor Input
let pegaValorInput = document.getElementById("texto-tarefa");
let adicionaOl = document.getElementById("lista-tarefas");
let botaoAdiciona = document.getElementById("criar-tarefa");

function adicionaItem (){
    let lista = document.createElement("li");
    lista.id = "item";
    lista.innerText = pegaValorInput.value;
    if (pegaValorInput.value == ""){
       alert("ERRO 404")
    }
    pegaValorInput.value = "";

    adicionaOl.appendChild(lista)
  }
  botaoAdiciona.addEventListener("click", adicionaItem);

///////////////////////////////////////////////////////////////////////////////////////////////

// muda fundo dos itens

let pegaUl = document.querySelector("#lista-tarefas");

    pegaUl.addEventListener("click", mudaFundo );

    function mudaFundo (evento){
        console.log("xablau")
        let aux = evento.target;

        if (aux.style.backgroundColor !== 'rgb(128, 128, 128'){
            aux.style.backgroundColor = 'rgb(128, 128, 128'; 
            
        } else {
            aux.style.color = "white";
        }  
}

