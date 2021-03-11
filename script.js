let button = document.getElementById('criar-tarefa');
let linha = document.createElement('li');
let lista = document.getElementById('lista-tarefas');
let input = document.getElementById('texto-tarefa');
let clickList = document.getElementsByClassName('li-style');

//criação do botão
button.addEventListener('click', function() {
    let linha = document.createElement('li');
    linha.classList.add('li-style');
    lista.appendChild(linha);
    linha.innerText = input.value;
    input.value = '';
    linhaLista();
})
//colorir a linha que clicar
function mudaCor(event) {
  event.target.classList.add('corDeFundo');
}

function removeCor() {
  let linhasLista = document.querySelectorAll('li'); 
  for (let j = 0; j < linhasLista.length; j += 1) {
    if (linhasLista[j].className = 'corDeFundo'){
      linhasLista[j].classList.remove('corDeFundo')
    }
  }
}

function linhaLista() {
  for (let i = 0; i < clickList.length; i += 1) {
    clickList[i].addEventListener('click', removeCor);
    clickList[i].addEventListener('click', mudaCor);
    
  }
}