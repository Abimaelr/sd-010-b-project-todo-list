let textoInput = document.getElementById('texto-tarefa');
let botao = document.getElementById('criar-tarefa');
let lista = document.getElementById('lista-tarefas');
let corLista = document.querySelectorAll('ol');

botao.addEventListener('click', function () {
  let novaLista = document.createElement('li');
  lista.appendChild(novaLista).innerText = textoInput.value;
  textoInput.value = '';
})

for (let index = 0; index < corLista.length; index += 1) {
  corLista[index].addEventListener('click', function () {
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  })
}
