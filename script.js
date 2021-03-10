let botoncio = document.getElementById("criar-tarefa");
let textoDigitado = document.getElementById("texto-tarefa");


botoncio.addEventListener("click", criaItemLista);


function criaItemLista(){
    if(textoDigitado.value !== ""){
        let criaItemLista = document.createElement("li");
        criaItemLista.innerHTML = textoDigitado.value;
        listaTarefas.appendChild(criaItemLista);
        textoDigitado.value = "";
        
        
    }
}
let listaTarefas = document.getElementById("lista-tarefas");
let listaAfazeres = document.getElementsByTagName("li")

listaTarefas.addEventListener("click", pintaFundoLi)

function pintaFundoLi (elemento){
   
    
    let numeroDeLi = listaTarefas.childNodes.length;
    
    for(i=0;i<numeroDeLi;i++){
        listaAfazeres[i].classList.remove("selected")
    }
    if (elemento.target.tagName == "LI"){
        elemento.target.classList.add("selected")
    }
}

listaTarefas.addEventListener("dblclick", completaTarefa)

function completaTarefa (elemento){
    if(elemento.target.className == "completed" || elemento.target.className == "completed selected"){
        elemento.target.classList.remove("completed")
    } else {
        elemento.target.classList.add("completed")
        
    }
}