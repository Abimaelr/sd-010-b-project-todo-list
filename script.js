// Variáveis
const adicionarTarefa = document.getElementById('texto-tarefa');
const btn = document.getElementById('criar-tarefa');
const ol = document.getElementById('lista-tarefas');
// 5 - botão ao clicar, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo
btn.addEventListener('click', adiciona);
// Função
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

// se clicar em um item da lista, ele passa a ter o estilo CSS `background-color: rgb(128, 128, 128)
ol.addEventListener('click', mudarCorAoclicar);
function mudarCorAoclicar(event) {
  const li = document.querySelectorAll('li');
  for (let index = 0; index < li.length; index += 1) {
    li[index].style.backgroundColor = '';
    li[index].style.color = '';
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  event.target.style.color = 'white';
}
