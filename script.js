let textInput = document.getElementById('texto-tarefa');
let buton = document.getElementById('criar-tarefa');
let lista = document.getElementById('lista-tarefas');
let clickList = document.querySelectorAll('ol');
let listaGeral = document.querySelectorAll('ol li');

buton.addEventListener('click', function(){  
  let novaLista = document.createElement('li');
  lista.appendChild(novaLista).innerText = textInput.value;
  textInput.value = '';  
});

for (let i = 0; i < clickList.length; i++) {
clickList[i].addEventListener('click', function() {
  let classColor = document.getElementsByClassName('color')[0];
  event.target.classList.add('color');
  classColor.classList.remove('color');
  // for (let i = 0; i < lista.length; i++){
  //   if (listaGeral.className === 'color'){
  // //   event.target.classList.remove('color');
  // } else {
  event.target.classList.add('color');
  // }
  // }
});
}