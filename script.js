function botaoEnviar() {
  const pai = document.getElementById('criar-tarefa');

  pai.addEventListener('click', function () {
    const input = document.getElementById('texto-tarefa');
    const lista = document.getElementById('lista-tarefas');
    const element = document.createElement('li');
    element.className = 'item';
    element.innerHTML = input.value;
    lista.appendChild(element);
      
    input.value = '';
  });
}
botaoEnviar();

function selectedClass() {
  const pai = document.getElementById('lista-tarefas');
  
  pai.addEventListener('click', function(event) {
    const filho = document.getElementsByClassName('item');
    
    for (i = 0; i < filho.length; i += 1) {
      if(filho[i].className !== 'item') {
        filho[i].className = 'item';
        filho[i].style.backgroundColor = 'white'
      }
       event.target.className = 'item selected';
   
    }     
    
    let batata = document.getElementsByClassName('item selected')[0];
    batata.style.backgroundColor = 'rgb(128, 128, 128)'
  })
}
selectedClass()







// function botaoEnviar() {
//   const pai = document.getElementById('criar-tarefa');

//   pai.addEventListener('click', function () {
//     const input = document.getElementById('texto-tarefa');
//     const lista = document.getElementById('lista-tarefas');
//     const element = document.createElement('li');
//     element.className = 'item';
//     element.innerHTML = input.value;
//     lista.appendChild(element);
//      element.addEventListener('click', function () {
//        element.style.backgroundColor = 'rgb(128, 128, 128)'
       
//      })
//     input.value = '';
//   });
// }
// botaoEnviar();