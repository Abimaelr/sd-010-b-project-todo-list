function addTask(){
  // referencia o input
  let input = document.querySelector('#texto-tarefa');

  // referencia o botao
  let btn = document.querySelector("#criar-tarefa");

  //criar ação no botão
  btn.addEventListener('click', () =>{
    // o pai da lista ordenada
    let orderList = document.querySelector('#lista-tarefas');

    //criar elemento de lista
    let lista = document.createElement('li');

    // colocar atributo de classe no elemento de lista
    lista.setAttribute('class', 'new-item-list');

    // atribui o texto digitado no input ao texto do elemento de lista
    lista.innerText = input.value;
    
    // adiciona o elemento de lista dentro da lista ordenada
    orderList.appendChild(lista);

    // limpa o input
    input.value = '';
  })

}
addTask();