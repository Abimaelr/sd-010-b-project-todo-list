let button = document.getElementById('criar-tarefa');
let linha = document.createElement('li');
let lista = document.getElementById('lista-tarefas');
let input = document.getElementById('texto-tarefa');
let clickList = document.getElementsByClassName('li-style');



//criação do botão
function criaTarefa(texto, classes) {
  let linha = document.createElement('li');
  linha.className = classes;
  lista.appendChild(linha);
  linha.innerText = texto;
  input.value = '';
  colorirLinha();
  riscarEDesriscarALinha();
}

button.addEventListener('click', function() {
 criaTarefa(input.value, 'li-style')
});

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

function colorirLinha() {
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


buttonRemoverFinalizados.addEventListener('click', function() {
  let finalizados = document.querySelectorAll('li.completed');
  for (let i = 0; i < finalizados.length; i += 1) {
    lista.removeChild(finalizados[i]);
  }
});

//adicionar botão de salvar tarefas
let buttonSalvarTarefas = document.createElement('button');
buttonSalvarTarefas.id = 'salvar-tarefas';
buttonSalvarTarefas.innerText = 'Salvar Tarefa';
bodyPagina.appendChild(buttonSalvarTarefas);

function salvarLocalStorage() {
  let linhasListas = document.querySelectorAll('li');
  let array = [];
  for (let i = 0; i < linhasListas.length; i += 1) {
    const propriedades = {
      text: linhasListas[i].innerText, 
      classe: linhasListas[i].className
    }
    array.push(propriedades);
  }
  localStorage.setItem('itens', JSON.stringify(array))
}

buttonSalvarTarefas.addEventListener('click', salvarLocalStorage);

window.onload = function() {
  const tarefas = JSON.parse(localStorage.getItem('itens'));
  if(!tarefas) return
  for (let i = 0; i < tarefas.length; i += 1) {
    criaTarefa(tarefas[i].text, tarefas[i].classe)
  }
}



//botão move pra cima e pra baixo
let buttonMovePraCima = document.createElement('button');
buttonMovePraCima.id = 'mover-cima';
buttonMovePraCima.innerText = 'mover pra cima';
bodyPagina.appendChild(buttonMovePraCima);

let buttonMovePraBaixo = document.createElement('button');
buttonMovePraBaixo.id = 'mover-baixo';
buttonMovePraBaixo.innerText = 'mover para baixo';
bodyPagina.appendChild(buttonMovePraBaixo);

let linhasDaLista = document.getElementsByTagName('li');
buttonMovePraCima.addEventListener('click', function() {
  for (let i = 0; i < linhasDaLista.length; i += 1) {
    if (linhasDaLista[i].classList.contains('corDeFundo')) {
      const selecionadaPracima = {
        text: linhasDaLista[i].innerHTML,
        classe: linhasDaLista[i].className
      }
      const linhaTrocaPraCima = {
        text: linhasDaLista[i - 1].innerHTML,
        classe: linhasDaLista[i - 1].className
      }
      linhasDaLista[i].innerHTML = linhaTrocaPraCima.text;
      linhasDaLista[i].className = linhaTrocaPraCima.classe;
      linhasDaLista[i - 1].innerHTML = selecionadaPracima.text;
      linhasDaLista[i - 1].className = selecionadaPracima.classe;
    }
  }
});

buttonMovePraBaixo.addEventListener('click', function() {
  for (let i = linhasDaLista.length - 1; i >= 0; i -= 1) {
    if (linhasDaLista[i].classList.contains('corDeFundo')) {
      const selecionadaPraBaixo = {
        text: linhasDaLista[i].innerHTML,
        classe: linhasDaLista[i].className
      }
      const linhaTrocaPraBaixo = {
        text: linhasDaLista[i + 1].innerHTML,
        classe: linhasDaLista[i + 1].className
      }
      linhasDaLista[i].innerHTML = linhaTrocaPraBaixo.text;
      linhasDaLista[i].className = linhaTrocaPraBaixo.classe;
      linhasDaLista[i + 1].innerHTML = selecionadaPraBaixo.text;
      linhasDaLista[i + 1].className = selecionadaPraBaixo.classe;
    }
  }
});
