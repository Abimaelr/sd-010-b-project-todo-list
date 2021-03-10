
const bodyChilds = document.body;
// requisito 1
bodyChilds.appendChild(document.createElement('header'));
document.querySelector('header').innerText = 'Minha Lista de Tarefas';

// requisito 2
const headerP = document.createElement('p');
bodyChilds.appendChild(headerP);
headerP.id = 'funcionamento';
headerP.innerText = 'Clique duas vezes em um item para marcá-lo como completo';

// requisito 3
const input = document.createElement('input');
bodyChilds.appendChild(input);
input.id = 'texto-tarefa';

// requisito 4
const olTasks = document.createElement('ol');
bodyChilds.appendChild(olTasks);
olTasks.id = 'lista-tarefas';

// requisito 5
const buttonIl = document.createElement('button');
bodyChilds.appendChild(buttonIl);
buttonIl.id = 'criar-tarefa';
buttonIl.innerText = 'Adicionar Tarefa';
buttonIl.addEventListener('click', function () {
  olTasks.appendChild(document.createElement('li'));
  olTasks.lastChild.innerText = input.value;
  olTasks.lastChild.classList.add('task');
  input.value = '';
});

/* requisito 6
??????? */

// requisito 7 & requisito 8
const getGrayElement = document.getElementsByClassName('GrayElement');
olTasks.addEventListener('click', function (event) {
  if (getGrayElement.length !== 1) {
    event.target.classList.add('GrayElement');
    getGrayElement[0].style.backgroundColor = 'rgb(128, 128, 128)';
  }
  getGrayElement[0].style.backgroundColor = 'white';
  getGrayElement[0].classList.remove('GrayElement');
  event.target.classList.add('GrayElement');
  getGrayElement[0].style.backgroundColor = 'rgb(128, 128, 128)';
});

// requisito 9
olTasks.addEventListener('dblclick', function (event) {
  const taskComplete = document.getElementsByClassName('completed');
  event.target.classList.toggle('completed')
  if (event.target.classList.contains('completed')) {
    event.target.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
  } else {
    event.target.classList.remove('completed');
    event.target.style.textDecoration = 'initial';
  }
})


/* 
// requisito 10
const buttonClearAll = document.createElement('button');
bodyChilds.appendChild(buttonClearAll);
buttonClearAll.id = 'apaga-tudo'
buttonClearAll.innerText = 'Limpar Tudo';
buttonClearAll.addEventListener('click', function () {
  const tasks = document.getElementsByClassName('task')
  for (let counter = tasks.length - 1; counter < tasks.length; counter -= 1) {
    document.getElementsByTagName('ol')[0].removeChild((tasks[counter]));
  }
}); */