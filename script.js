// Variáveis
const adicionarTarefa = document.getElementById('texto-tarefa');
const btn = document.getElementById('criar-tarefa');
const ol = document.getElementById('lista-tarefas');
// 5 - botão ao clicar, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo
function adiciona() {
  // list recebe o li criado
  const list = document.createElement('li');
  // retorna todo o texto e o html que existem no elemento 'li'
  list.innerHTML = adicionarTarefa.value;
  // insere um novo 'list' no 'ol'
  ol.appendChild(list);
  // valor inserido no campo input, teste de funcionamento
  // alert(`Você inseriu ${adicionarTarefa.value}, em sua lista.`);
  // limpa o campo input
  adicionarTarefa.value = '';
}
btn.addEventListener('click', adiciona);

// se clicar em um item da lista, ele passa a ter o estilo CSS `background-color: rgb(128, 128, 128)
function mudarCorAoclicar(e) {
  const li = document.querySelectorAll('li');
  for (let index = 0; index < li.length; index += 1) {
    li[index].style.backgroundColor = '';
    li[index].style.color = '';
  }
  e.target.style.backgroundColor = 'rgb(128, 128, 128)';
  e.target.style.color = 'white';
}
ol.addEventListener('click', mudarCorAoclicar);

// Clicar duas vezes em um item, faz com que ele seja riscado - https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event
function riscarTexto() {
  ol.addEventListener('dblclick', function (e) {
    e.target.classList.toggle('completed');
  });
}
riscarTexto();

// botão com id="apaga-tudo" que quando clicado apagar todos os itens da lista
const apagarTudo = document.getElementById('apaga-tudo');
function apagarLista() {
  const listaLi = document.querySelectorAll('li');
  for (let index = 0; index < listaLi.length; index += 1) {
    ol.removeChild(listaLi[index]);
  }
}
apagarLista();
apagarTudo.addEventListener('click', apagarLista);

// botão com id="apaga-finalizados", para apagar somente os que estão marcados
const apagarFinalizados = document.getElementById('remover-finalizados');
function apagarItemLista() {
  const listaLiSelecionado = document.querySelectorAll('li.completed');
  for (let index = 0; index < listaLiSelecionado.length; index += 1) {
    ol.removeChild(listaLiSelecionado[index]);
  }
}
apagarItemLista();
apagarFinalizados.addEventListener('click', apagarItemLista);

// botão com id="salvar-tarefas" que salve o conteúdo da lista. Se fechar e reabrir a página, a lista continua no estado em que estava
// https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage
const listaSalva = document.querySelector('#lista-tarefas');
listaSalva.innerHTML = localStorage.getItem('ol');
function listaSa() {
  localStorage.setItem('ol', listaSalva.innerHTML);
}
const salvarItens = document.querySelector('#salvar-tarefas');
salvarItens.addEventListener('click', listaSa);

// dois botões, um com id="mover-cima" e outro com id="mover-baixo", que permitam mover o item selecionado para cima ou para baixo na lista de tarefas
// https://www.w3schools.com/jsref/prop_element_nextelementsibling.asp
// https://developer.mozilla.org/pt-BR/docs/Web/API/Node/insertBefore
const desceItem = document.getElementById('mover-baixo');
function descerItem() {
  const descerLi = document.querySelector('.selected');
  if (ol.childElementCount > 0 && descerLi !== null && descerLi.nextElementSibling !== null) {
    alert('tudo ok!');
    ol.insertBefore(descerLi.nextElementSibling, descerLi);
  }
}
desceItem.addEventListener('click', descerItem);
