
function createLiText () {
    let novaLi = document.createElement('li');
    let inputTextLi = document.getElementById('texto-tarefa');
    novaLi.innerText = inputTextLi.value;
    let listaTarefa = document.getElementById('lista-tarefas');
    listaTarefa.appendChild(novaLi); 
    inputTextLi.value = '';  
  }

  let butaDicionarLista=  document.getElementById('criar-tarefa');
  butaDicionarLista.addEventListener('click', createLiText);
   

  function selecionarItem(event){
    let itemSelecionado = document.querySelector('.selected');
    if(itemSelecionado){
      itemSelecionado.classList.remove('selected');
    }
    event.target.classList.add('selected');
  }

  let listaTarefa = document.getElementById('lista-tarefas')
  listaTarefa.addEventListener("click", selecionarItem)
  listaTarefa.addEventListener("dblclick", itemDuploClick);

 function itemDuploClick(event){
  let duploClick = document.querySelector('.completed');
  if(duploClick){
    duploClick.classList.remove('completed');
    event.target.classList.add('completed');
  }
  event.target.classList.add('completed');
  duploClick.classList.remove('completed');
  
}

function LimpaLista(event){
  let limpaTudo = document.getElementById('lista-tarefas');
  if(limpaTudo){
    limpaTudo.classList.remove('apaga-tudo');
  }
  event.target.classList.add('apaga-tudo');

}

let buttonLimpaTudo = document.getElementById('apaga-tudo');
  buttonLimpaTudo.addEventListener('click', LimpaLista);
  

      
 