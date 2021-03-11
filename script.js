function listaItem() {
  const buttonAdicionar = document.querySelector('#criar-tarefa');
  const adicionandoTexto = document.querySelector('#texto-tarefa');
  const adicionandoItem = document.querySelector('#lista-tarefas');
  buttonAdicionar.addEventListener('click', function () {
    if (adicionandoTexto.value.length > 0) {
      let list = document.createElement('li');
      list.innerHTML = adicionandoTexto.value;
      adicionandoItem.appendChild(list);
      adicionandoTexto.value = '';
    } else {
      alert('Digite Algum Valor')
    }
  });
}
listaItem()
/*Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128)](#7---clicar-em-um-item-da-lista-deve-alterar-a-cor-de-fundo-do-item-para-cinza-rgb128128128)
Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo](#8---não-deve-ser-possível-selecionar-mais-de-um-elemento-da-lista-ao-mesmo-tempo)
Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item]
*/
function backgroundCinza() {
  let lista = document.getElementById('lista-tarefas');
  lista.addEventListener('click', function(event){
    let colorCinza = document.querySelector(".cinza");
    if(colorCinza){
      colorCinza.classList.remove('cinza');   
    } 
      event.target.classList.add('cinza');
  })
}
backgroundCinza()




