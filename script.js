
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

 