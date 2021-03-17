function botao() {
  let bt = document.querySelector("#criar-tarefa");
  let inputtexto = document.querySelector("#texto-tarefa");

  let listapai = document.querySelector("#lista-tarefas");
  bt.addEventListener("click", function() {
    let lista = document.createElement("li");
    lista.className = ("tarefas")
    lista.innerHTML = inputtexto.value
    listapai.appendChild(lista)
    inputtexto.value = "";


  })
}
botao()

function selecionandocores() {
  let lista = document.querySelector("#lista-tarefas")

  lista.addEventListener("click", function(event) {
    let selecionada = document.querySelector(".selected");
    if (selecionada !== null) {
      selecionada.classList.remove("selected");

      event.target.classList.add("selected")
    } else {

      event.target.classList.add("selected")

    }
  })
}
selecionandocores()

function completando() {
  let lista = document.getElementById('lista-tarefas');


  function taskcompleta(event) {
    event.target.classList.toggle('completed');
  }
  lista.addEventListener('dblclick', taskcompleta);
}
completando();

function btDeletarTudo() {
  let botaoDeletar = document.getElementById("apaga-tudo")
  let ol = document.getElementById("lista-tarefas")
  botaoDeletar.addEventListener('click', apagaTudo);

  function apagaTudo() {
    ol.innerHTML = "";
  }
}
btDeletarTudo()



function limpandocompletas() {
  let btLimpaCompleta = document.getElementById("remover-finalizados");
  btLimpaCompleta.addEventListener("click", function() {
    if (document.querySelector('.completed')) {
      document.querySelector('.completed').remove();
    }

  })
}
limpandocompletas()