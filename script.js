function criaHeader (){
    // Cria tag header com titulo
    let maeTitulo = document.getElementById("corpo");
    let header = document.createElement("header");
    header.id = "titulo";
    header.innerText = "Minha Lista de Tarefas";
    maeTitulo.appendChild(header);

    //Estilo

    header.style.marginLeft = "100px";
    header.style.fontSize = "30px";
}
criaHeader();



///////////////////////////////////////////////////////////////////

function criaParagrafo (){
    // Cria paragrafo
    let maeParagrafo = document.getElementById("corpo");
    let paragrafo = document.createElement("p");
    paragrafo.id = "funcionamento";
    paragrafo.innerText = "Clique duas vezes em um item para marcá-lo como completo";
    maeParagrafo.appendChild(paragrafo);

    //Estilo
    paragrafo.style.marginLeft = "100px";
}
criaParagrafo();

////////////////////////////////////////////////////////////////////

function criaInput (){
    // Cria input
    let maeInput = document.getElementById("corpo");
    let label = document.createElement("label");
    label.innerText = "Digite o item";
    let input = document.createElement("input");
    input.id = "texto-tarefa";
    maeInput.appendChild(label);
    maeInput.appendChild(input);
}
criaInput();

////////////////////////////////////////////////////////////////////////

function criaListaOrdenada (){
    // Cria lista ordenada
    let maeListaOrdenada = document.getElementById("corpo");
    let listaOrdenada = document.createElement("ol");
    listaOrdenada.id = "lista-tarefas";
    maeListaOrdenada.appendChild(listaOrdenada);
}
criaListaOrdenada();

//////////////////////////////////////////////////////////////////////////

function criaBotao (){
    // Cria botão
    let maeBotao = document.getElementById("corpo");
    let botao = document.createElement("button");
    botao.innerText = "Click para adicionar tarefa";
    botao.id = "criar-tarefa";
    maeBotao.appendChild(botao);
}
criaBotao();

//////////////////////////////////////////////////////////////////////////////

function valorInput (){
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
}
valorInput();

///////////////////////////////////////////////////////////////////////////////////////////////

// muda fundo dos itens
// let pegaItem = document.getElementById("item");

// for (let index = 0; index < pegaItem.length; index += 1){
//     pegaItem.addEventListener("click", function (){
//         if (pegaItem[index].style.backgroundColor == "black"){
//             pegaItem[index].style.backgourndColor = "rgb(128, 128, 128)";
//         } else {
//             pegaItem[index].style.backgourndColor = "rgb(128, 128, 128)";
//         }
//     });
// }
let pegaUl = document.querySelector("#lista-tarefas");

    pegaUl.addEventListener("click", mudaFundo );

    function mudaFundo (evento){
        console.log("xablau")
        let aux = evento.target;

        let cinza = document.getElementsByClassName("cinza");
        for (let index = 0; index < cinza.length; index += 1){
            cinza[index].className = "";
        }

        if (aux.className !== 'cinza'){
            aux.className = 'cinza'; 
            
        } else {
            aux.className = "";
        }  
    
      
}
////////////////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////////////////////////

// var lista = document.getElementById("lista-tarefas");
// lista.addEventListener("click", atribuiClasseSelected);

// function atribuiClasseSelected(evento) {
//     apagaClasse();
//     if (evento.target.style.backgroundColor == "rgb(128, 128, 128)") {
//         evento.target.className = "selected";
//     }
// }

// function apagaClasse() {
//     let itens = lista.childNodes;
//     for (i = 0; i < itens.length; i += 1) {
//         itens[i].classList.remove("selected");
//     } 
// } 

const selectItem = (item) => {
    const selectedElement = document.querySelector('.selected');
    if (selectedElement) {
      selectedElement.classList.remove('selected');
      item.classList.add('selected');
    } else {
      item.classList.add('selected');
    }
  };
  
  const completeItem = (item) => {
    const { classList } = item;
    if (classList.contains('completed')) {
      classList.remove('completed');
    } else {
      classList.add('completed');
    }
  };
