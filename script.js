function setColor(event) {
  const tarefa = event.target;
  const tarefas = document.querySelectorAll('.tarefa');
  let corAtual;
  let contador = 0;



  for (let i = 0; i < tarefas.length; i += 1) {
    corAtual = window.getComputedStyle(tarefas[i], null).backgroundColor;
    console.log(corAtual);

    if (corAtual == 'rgb(255, 255, 255)' ){
      contador += 1
    }
    

  }

  if(contador == tarefas.length){
tarefa.style.backgroundColor = 'rgb(128, 128, 128)';
      
  }
  

}

function setRiscado() {


}

function criarTarefa() {
  const pai = document.getElementById('lista-tarefas');
  const tarefa = document.getElementById('texto-tarefa').value;
  if (tarefa === '') {
    alert('Você deve incluir uma tarefa!');
  } else {

    const li = document.createElement('li');
    li.className = 'tarefa';
    li.innerHTML = tarefa;
    pai.appendChild(li);
    li.addEventListener('click', setColor);
    li.addEventListener('dblclick', setRiscado);
    document.getElementById('texto-tarefa').value = '';

  }
}
