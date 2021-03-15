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

const apagarTudo = document.getElementById('apaga-tudo');
function eraseList() {
  const listaLi = document.querySelectorAll('li');
  for (let index = 0; index < listaLi.length; index += 1){
  ol.removeChild('ol');
  }
}
apagarTudo.addEventListener('click', eraseList);
eraseList();