let textoInput = document.getElementById('texto-tarefa');
let botao = document.getElementById('criar-tarefa');
let lista = document.getElementById('lista-tarefas');
let corLista = document.querySelector('ol');

botao.addEventListener('click', function () {
  let novaLista = document.createElement('li');
  lista.appendChild(novaLista).innerText = textoInput.value;
  textoInput.value = '';
})

corLista.addEventListener('click', function (event) {
  let classSelected = document.querySelector('.selected');
  if (classSelected != null) {
    document.querySelector('.selected').classList.remove('selected');
  }
  event.target.classList.add('selected');
});



