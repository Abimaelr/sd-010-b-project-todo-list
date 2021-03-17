const body = document.body;
const header = document.createElement('header');
header.textContent = 'Minha Lista de Tarefas';
body.appendChild(header);

const paragraph = document.createElement('p');
paragraph.id = 'funcionamento';
paragraph.textContent = 'Clique duas vezes em um item para marcá-lo como completo.';
body.appendChild(paragraph);

const input = document.createElement('input');
input.id = 'texto-tarefa';
input.placeholder = 'Digite a tarefa';
body.appendChild(input);

const button = document.createElement('button');
button.id = 'criar-tarefa';
button.textContent = 'criar tarefa';
body.appendChild(button);

const btnClear = document.createElement('button');
btnClear.id = 'apaga-tudo';
btnClear.textContent='Limpar'
body.appendChild(btnClear);

const btnRemove = document.createElement('button');
btnRemove.id = 'remover-finalizados';
btnRemove.textContent='Remover Selecionado'
body.appendChild(btnRemove);

const listaTarefas = document.createElement('ol');
listaTarefas.id = 'lista-tarefas';
body.appendChild(listaTarefas);
const textoInput = document.getElementById('texto-tarefa');
const btn = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');

btnClear.addEventListener('click', function () {
  list.innerText = '';
});

//Requisito resolvido com auxilio do site https://www.proa.org.br/artigos/2187/noticias/semana-de-tecnologia---criando-uma-lista-de-tarefas-on-line
btn.addEventListener('click', adcTarefa);
function adcTarefa() {
  const li = document.createElement('li');
  li.innerText = textoInput.value;
  list.appendChild(li);
  li.className = 'list-Item';
  textoInput.value = '';
    li.addEventListener('dblclick', (e) => {
      li.classList.add('completed')
   })
 }
// requisito resolvido com pesquisas no stackoverflow, developermozilla, e plantões para entender aplicação de contains, remove e add. 
list.addEventListener('click', backLi);
function backLi(event) {
  const itens = document.querySelectorAll('.list-Item');
  for (let i = 0; i < itens.length; i += 1) {
    if (itens[i].classList.contains('selected')) {
      itens[i].classList.remove('selected');
    }
    event.target.classList.add('selected');
  }
}

