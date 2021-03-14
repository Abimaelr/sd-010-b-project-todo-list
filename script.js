const buttonAdd = document.getElementById('criar-tarefa');
let listaTarefas = document.getElementById('lista-tarefas');
buttonAdd.addEventListener('click', function () {
  event.preventDefault();
  let tarefas = document.querySelector('#tarefas');
  let textUser = tarefas.texto.value;
  let listaLi = document.createElement('li');
  listaLi.textContent = textUser;
  listaTarefas.appendChild(listaLi);
  listaLi.className = ('listada');
  tarefas.reset();
 })
//verifiquei a escrita do Carlos Vieira - t10-B pra entender que a minha variavel listada deveria ser li e dentro da função
 function choose(clickado){
   let listada = document.querySelectorAll('li');
for (index = 0; index <listada.length; index+=1){
   if (listada[index].classList.contains('listada')) {
      listada[index].classList.remove('selected');
    }
  }
  clickado.target.classList.add('selected');
 }

 listaTarefas.addEventListener('click', choose);


