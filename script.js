let textInput = document.getElementById('texto-tarefa');
let buton = document.getElementById('criar-tarefa');
let lista = document.getElementById('lista-tarefas');
let clickList = document.querySelectorAll('ol');

buton.addEventListener('click', function(){  
  let novaLista = document.createElement('li');
  lista.appendChild(novaLista).innerText = textInput.value;
  textInput.value = '';  
});

for (let i = 0; i < clickList.length; i++) {
clickList[i].addEventListener('click', function() {
  event.target.style.color = 'rgb(128, 128, 128)';
  console.log('teste');
});
}