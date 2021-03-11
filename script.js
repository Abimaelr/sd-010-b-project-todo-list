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
//function 
