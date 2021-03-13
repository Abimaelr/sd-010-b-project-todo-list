let textoInput = document.getElementById('texto-tarefa');
let botao = document.getElementById('criar-tarefa');
let paiLista = document.querySelector('#lista-tarefas');
let listaItens = document.getElementsByTagName('li');
let botaoApagar = document.getElementById('apaga-tudo');
let botaoRemoverFinalizados = document.getElementById('remover-finalizados');
let botaoSalvarLista = document.getElementById('salvar-tarefas');
let botaoRemoverSelecionado = document.getElementById('remover-selecionado');


function criarListas() {
  botao.addEventListener('click', function () {
    let novaLista = document.createElement('li');
    paiLista.appendChild(novaLista).innerText = textoInput.value;
    textoInput.value = '';
  })
}

criarListas();

function mudarCorSelected() {
  paiLista.addEventListener('click', function (event) {
    let classSelected = document.querySelector('.selected');
    if (classSelected != null) {
      document.querySelector('.selected').classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}

mudarCorSelected();

function riscarLinha() {
  paiLista.addEventListener('dblclick', function (event) {
    event.target.classList.toggle('completed');
  });
}

riscarLinha();

function apagaTudo() {
  botaoApagar.addEventListener('click', function () {
    paiLista.innerHTML = '';
  })
};

apagaTudo();

function apagaFinalizados() {
  botaoRemoverFinalizados.addEventListener('click', function () {
    let finalizados = document.querySelectorAll('li.completed');
    for (let index = 0; index < finalizados.length; index += 1) {
      paiLista.removeChild(finalizados[index]);
    }
  })
}

apagaFinalizados();

//Resolvi com a ajuda dos amigos Flavio e Marcos
function botaoSalvar() {
  botaoSalvarLista.addEventListener('click', function () {
    salvar();
  })
}

botaoSalvar();

function salvar() {
  let salvarLista = document.getElementById('lista-tarefas').innerHTML;
  localStorage.lista = salvarLista;
  alert('Lista salva');
}


function carregarLista() {
  if (localStorage.lista) {
    document.getElementById('lista-tarefas').innerHTML = localStorage.lista;
  }
}

carregarLista();

// Depois da explicação consegui resolver sozinho esta função
botaoRemoverSelecionado.addEventListener('click', removerSelecionado);

function removerSelecionado() {
  let selecionado = document.querySelectorAll('li.selected');
  for (let index = 0; index < selecionado.length; index += 1) {
    paiLista.removeChild(selecionado[index]);
  }
}
