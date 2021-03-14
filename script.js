
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

  function duploclick(event){
    let itemClicado = document.querySelector('completed');
    if(itemClicado){
      itemClicado.classList.remove('completed');
    }
    event.target.classList.add('completed');
  }
  let a= document.getElementById('lista-tarefas')
  a.addEventListener("dblclick", duploclick)
  
      
 