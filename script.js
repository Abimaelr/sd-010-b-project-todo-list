// let listItems = ['item um', 'item dois', 'item tres', 'item quatro', 'item cinco'];
let listItems = [];

// referencia do botao Adicionar
const btn = document.querySelector('#criar-tarefa');
// referencia do input
const input = document.querySelector('#texto-tarefa');
// lista ordenada 
const orderList = document.querySelector('#lista-tarefas');
// referencia do botão Limpar Lista
const btnCleanList = document.querySelector('#apaga-tudo')

// // Função que com o click duplo faz o item ficar tachado;
function doubleClickCheck(lista) {
  lista.addEventListener('dblclick', () => {
    // console.log('clicado duas vezes');
    if (lista.style.backgroundColor === 'rgb(128, 128, 128)' && lista.className !== 'completed') {
      lista.setAttribute('class', 'completed');
    } else if (lista.style.backgroundColor === 'rgb(128, 128, 128)' && lista.className === 'completed') {
      lista.setAttribute('class', 'new-item-list')
    }
  })
}

// // Função quer muda a cor de fundo quando clicado o item;
function changeBackground(lista) {

  // Captura evento de click sobre a lista;
  lista.addEventListener('click', () => {

    // Array com os item da lista, pego pela classe .new-item-list;
    const itemsList = document.querySelectorAll('.new-item-list');

    // Loop-for sobre o array itemList;
    for (let i = 0; i < itemsList.length; i += 1) {

      // atribui background white para TODOS os itens do array itemList;
      itemsList[i].style.backgroundColor = "white";
    }

    // se background diferente de cinza atribuir background cinza;
    if (lista.style.backgroundColor !== 'rgb(128, 128, 128)') {
      lista.style.backgroundColor = 'rgb(128, 128, 128)';
    }
  })
}

// criar ação no botão "Limpar Lista"
btnCleanList.addEventListener('click', () => {

  // Limpa lista na tela;
  orderList.innerHTML = '';

  // Limpa o array listItems;
  listItems = []
})

// criar ação no botão "Adicionar"
btn.addEventListener('click', () => {

  let newItem = input.value;

  listItems.push(newItem);

  showUpList();
})

// Função quer mostra a lista na tela;
function showUpList() {
 
  orderList.innerHTML = '';

  for (item of listItems) {
    // criar elemento de lista
    const lista = document.createElement('li');

    // colocar atributo de classe no elemento de lista
    lista.setAttribute('class', 'new-item-list');

    // atribui o texto digitado no input ao texto do elemento de lista
    lista.innerText = item;

    // adiciona o elemento de lista dentro da lista ordenada
    orderList.appendChild(lista);

    // limpa o input
    input.value = '';

    changeBackground(lista);
    doubleClickCheck(lista);
  }
}

showUpList();