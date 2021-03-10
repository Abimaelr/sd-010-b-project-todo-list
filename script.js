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
      event.target.className = "item-lista rgb-cinza"
    } if (document.querySelectorAll(".rgb-cinza").length !== 0) {
      document.querySelectorAll(".rgb-cinza")[0].className = "item-lista";
      event.target.className = "item-lista rgb-cinza"
    }
  }  
})