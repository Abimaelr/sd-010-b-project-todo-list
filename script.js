//Exemplo do site https://stackoverflow.com/questions/26946235/pure-javascript-listen-to-input-value-change

/* event listener */
document.getElementsByName("texto")[0].addEventListener('change', adicionar);
/* function */
function adicionar(){
  let li = document.createElement("li");
  let ol = document.getElementById("lista-tarefas");
  let input = document.getElementById("texto-tarefa").value;
  li.appendChild(document.createTextNode(input));
  ol.appendChild(li);
  document.getElementById("texto-tarefa").value = "";
}
