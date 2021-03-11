function botaoEnviar() {
  const pai = document.getElementById('criar-tarefa');

  pai.addEventListener('click', function () {
    const input = document.getElementById('texto-tarefa');
    const lista = document.getElementById('lista-tarefas');
    const element = document.createElement('li');
    element.className = 'item';
    element.innerHTML = input.value;
    lista.appendChild(element);
     element.addEventListener('click', function () {
       element.style.backgroundColor = 'rgb(128, 128, 128)'
       
     })
    input.value = '';
  });
}
botaoEnviar();

