function doubleClickCheck(lista) {
  lista.addEventListener('dblclick', () => {
    console.log('clicado duas vezes');
    if (lista.style.backgroundColor === 'rgb(128, 128, 128)' && lista.className !== 'completed') {
      lista.setAttribute('class', 'completed');
    } else if (lista.style.backgroundColor === 'rgb(128, 128, 128)' && lista.className === 'completed') {
      lista.setAttribute('class', 'new-item-list' )
    }
  })
}

function changeBackground(lista) {
  lista.addEventListener('click', () => {
    itemsList = document.querySelectorAll('.new-item-list');
    console.log(itemsList.length);

    for (let i = 0; i < itemsList.length; i += 1) {
      itemsList[i].style.backgroundColor = "white";
    }
    if (lista.style.backgroundColor !== 'rgb(128, 128, 128)') {
      lista.style.backgroundColor = 'rgb(128, 128, 128)';
    } 
  })
}

function addTask() {
  // referencia o input
  const input = document.querySelector('#texto-tarefa');

  // referencia o botao
  const btn = document.querySelector('#criar-tarefa');

  // criar ação no botão
  btn.addEventListener('click', () => {
    // o pai da lista ordenada
    const orderList = document.querySelector('#lista-tarefas');

    // criar elemento de lista
    const lista = document.createElement('li');

    // colocar atributo de classe no elemento de lista
    lista.setAttribute('class', 'new-item-list');

    // atribui o texto digitado no input ao texto do elemento de lista
    lista.innerText = input.value;

    // adiciona o elemento de lista dentro da lista ordenada
    orderList.appendChild(lista);

    // limpa o input
    input.value = '';

    changeBackground(lista);
    doubleClickCheck(lista);
  })
}

addTask();
// function changeColorItemList(item){
//   // console.log(item)
//   item.style.backgroundColor = 'rgb(128, 128, 128)';
// }

// lista.onclick = function () {
//   changeColorItemList(this);
// }

// lista.addEventListener('click', () => {
//   test = document.querySelectorAll('.new-item-list');
//   console.log(test.length);

//   for (let i = 0; i < test.length; i += 1) {
//     test[i].style.backgroundColor = "white";
//   }
//   if (lista.style.backgroundColor !== 'rgb(128, 128, 128)') {
//     lista.style.backgroundColor = 'rgb(128, 128, 128)';
//   } 
// })