//Exemplo do site https://stackoverflow.com/questions/26946235/pure-javascript-listen-to-input-value-change

let itens = [];

document.getElementById("criar-tarefa").addEventListener('click' , adicionar);
function adicionar() {
  let ol = document.getElementById("lista-tarefas");
  let li = document.createElement("li");
  let input = document.getElementById("texto-tarefa").value;
  li.appendChild(document.createTextNode(input));
  ol.appendChild(li);
  document.getElementById("texto-tarefa").value = "";
  itens = document.querySelectorAll("#lista-tarefas");
  selecao = document.getElementById("lista-tarefas").addEventListener('click' , selecionar);
  function selecionar(){
    for(let i = 0; i < itens.length; i+=1){
      if(itens.firstChild = itens[i]){
        alert("Deu certo");
      }    
    }
  }
}

//let array = [];
let inputText = document.getElementById("lista-tarefas");
//itens = document.querySelectorAll("#lista-tarefas li");
let array = [];

for(let i = 0; i < itens.length; i+=1) {
  tab.push(itens[i].innerHTML);
}

for(let i = 0; i < itens.length; i+=1) {
  itens[i].onclick = function(){
    index = tab.indexOf(this.innerHTML);
    console.log(this.innerHTML + " INDEX = " + index);
  };
}