
// function changeColorItemList(item){
//   // console.log(item)
//   item.style.backgroundColor = 'rgb(128, 128, 128)';
// }

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

    // lista.onclick = function () {
    //   changeColorItemList(this);
    // }

    lista.addEventListener('click', () => {
      console.log(lista);
      lista.style.backgroundColor = 'rgb(128, 128, 128)';
    })

  })
}

addTask();