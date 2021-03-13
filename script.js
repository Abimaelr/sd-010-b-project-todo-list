const buttonAdd = document.getElementById('criar-tarefa')



buttonAdd.addEventListener('click', function(){
  event.preventDefault()
  let listaTarefas = document.getElementById('lista-tarefas')
  let tarefas = document.querySelector('#tarefas')
  let textUser = tarefas.texto.value;
  let listaLi = document.createElement('li');
  listaLi.textContent = textUser
  
  listaTarefas.appendChild(listaLi);
  console.log(listaLi)
}) 