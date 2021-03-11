function botaoEnviar() {
  const pai = document.getElementById('criar-tarefa')
  pai.addEventListener('click', function() {
  const input = document.getElementById('texto-tarefa');
  const lista = document.getElementById('lista-tarefas');
  const element = document.createElement('li')
  element.innerHTML = input.value
  lista.appendChild(element) 
  input.value = ''
})
  

}
botaoEnviar()
