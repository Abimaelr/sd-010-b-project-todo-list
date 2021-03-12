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
    riscarEDesriscarALinha();
})
//colorir a linha que clicar e apagar as outras linhas que estao coloridas
function mudaCor(event) {
  event.target.classList.add('corDeFundo');
}

function removeCor() {
  let linhasLista = document.querySelectorAll('li'); 
  for (let j = 0; j < linhasLista.length; j += 1) {
    if (linhasLista[j].classList.contains('corDeFundo')){
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


//riscar e desriscar a linha
function riscaALinha(event) {
  event.target.classList.toggle('completed');
}

let todasAsLinhas = document.getElementsByTagName('li');
function riscarEDesriscarALinha() {
  for (let index = 0; index < todasAsLinhas.length; index += 1) {
    todasAsLinhas[index].addEventListener('dblclick', riscaALinha);
  }
}

//botão apaga tudo
let bodyPagina = document.getElementsByTagName('body')[0];
let buttonApagarTudo = document.createElement('button');
buttonApagarTudo.innerText = 'Botão apagar tudo';
buttonApagarTudo.id = 'apaga-tudo';
bodyPagina.appendChild(buttonApagarTudo);

buttonApagarTudo.addEventListener('click', function() {
  for (let i = 0; 0 < todasAsLinhas.length; i += 1) {
    lista.removeChild(todasAsLinhas[0]);
  }
});



//botão remove os finalizados
let buttonRemoverFinalizados = document.createElement('button');
buttonRemoverFinalizados.id = 'remover-finalizados';
buttonRemoverFinalizados.innerText = 'Remover finalizados';
bodyPagina.appendChild(buttonRemoverFinalizados);