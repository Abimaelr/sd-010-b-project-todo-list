//Starting

createOl()

function createOl () {
  let addOl = document.createElement("OL");
  addOl.setAttribute("id", "lista-tarefas")
  document.getElementById("center-input").appendChild(addOl) }

document.addEventListener("click", function (event) {
  if (event.target.id === "criar-tarefa") {
    let newLi = document.createElement("LI");
    let textInput = document.getElementById("texto-tarefa").value;
    let textLi = document.createTextNode(textInput);
    newLi.appendChild(textLi);
    document.getElementById("lista-tarefas").appendChild(newLi);
    document.getElementById("texto-tarefa").value = ""
  }
  //Acabei fazendo o Requisito 6 junto com o 5 ;)
})