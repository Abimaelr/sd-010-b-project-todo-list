//Starting

createOl()

function createOl () {
  let addOl = document.createElement("OL");
  addOl.setAttribute("id", "lista-tarefas")
  document.getElementById("center-input").appendChild(addOl) }

document.addEventListener("click", function (event) {
  if (event.target.id === "criar-tarefa") {
    let newLi = document.createElement("LI");
    newLi.setAttribute("class", "item-lista")
    let textInput = document.getElementById("texto-tarefa").value;
    let textLi = document.createTextNode(textInput);
    newLi.appendChild(textLi);
    document.getElementById("lista-tarefas").appendChild(newLi);
    document.getElementById("texto-tarefa").value = ""
  }
  if (event.target.classList.contains("item-lista")) {
    if(document.querySelectorAll(".rgb-cinza").length === 0) {
      event.target.classList.add("rgb-cinza")
    } if (document.querySelectorAll(".rgb-cinza").length !== 0) {
      document.querySelectorAll(".rgb-cinza")[0].classList.remove("rgb-cinza");
      event.target.classList.add("rgb-cinza") 
    }
  }
  if (event.target.id === "apaga-tudo") {
    let dad = document.getElementById("lista-tarefas");
    let childNumbers = document.getElementById("lista-tarefas").childElementCount;
    for (let i = 0; i < childNumbers; i += 1) {
      dad.removeChild(dad.lastElementChild)
    }
  }
  if (event.target.id === "remover-finalizados") {
    let listCompleted = document.querySelectorAll(".completed");
    for (let i = 0; i < listCompleted.length; i += 1) {
      listCompleted[i].remove()
    }
  }  
})

document.addEventListener("dblclick", function (event) {
  if (event.target.classList.contains("item-lista") && !event.target.classList.contains("completed")) {
    event.target.classList.add("completed")
  }
  else if (event.target.classList.contains("item-lista") && event.target.classList.contains("completed")) {
    event.target.classList.remove("completed") 
  }
})