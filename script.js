let textInput = document.getElementById('texto-tarefa');
let buton = document.getElementById('criar-tarefa');
let lista = document.getElementById('lista-tarefas');


buton.addEventListener('click', function(){  
  let novaLista = document.createElement('li');
  lista.appendChild(novaLista).innerText = textInput.value;
  textInput.value = '';  
});