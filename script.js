//Exemplo do site https://stackoverflow.com/questions/26946235/pure-javascript-listen-to-input-value-change

function adicionar() {
  let botao = document.getElementById("criar-tarefa")
  botao.addEventListener('click' , adicionar);
  ol = document.getElementById("lista-tarefas");
  let li = document.createElement("li");
  let input = document.getElementById("texto-tarefa").value;
  li.classList = "texto";
  li.appendChild(document.createTextNode(input));
  ol.appendChild(li);
  document.getElementById("texto-tarefa").value = "";
}
adicionar();

//document.getElementById("#lista-tarefas");
/*document.getElementById("lista-tarefas").addEventListener('click' , escolherLista);
function escolherLista(){  
    let selecionado = document.querySelector(".selected");
    if(selecionado === ""){
      classList.add("selected");
    }else{
      selecionado.classList.remove("selected");
      classList.add("selected");
    }
}*/

//alert(document.getElementById("lista-tarefas").innerText)
