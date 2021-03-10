window.onload = function () {
  let addTask = null;
  let clearAll = null;
  let recoveredInput = null;
  let recoveredOl = null;
  let selectElement = null;
  let allTasks = null;
  let removeCompleted = null;

  startAplication();

  function createHeader() {
    // Etapa 01 - Adicione à sua lista o título "Minha Lista de Tarefas" em uma tag
    // Criando o Elemento Header
    const element = document.createElement('header');
    document.body.appendChild(element);

    // Criando o Elemento Titulo
    const title = document.createElement('h1');
    title.id = 'title';
    title.innerText = 'Minha Lista de Tarefas';
    element.appendChild(title);
  }

  function createInstructions() {
    // Etapa 02 - Adicione abaixo do título um pequeno e discreto parágrafo com id="funcionamento" e com o texto "Clique duas vezes em um item para marcá-lo como completo"
    // Criando uma section para guardar o titulo
    const element = document.createElement('section');
    document.body.appendChild(element);

    // Criando uma paragrafo elemento <p> dentro da section
    const elementP = document.createElement('p');
    elementP.id = 'funcionamento';
    elementP.innerText =
      'Clique duas vezes em um item para marcá-lo como completo';
    element.appendChild(elementP);
  }

  function createInput() {
    // Etapa 03 - Adicione um input com o id="texto-tarefa" onde a pessoa usuária poderá digitar o nome do item que deseja adicionar à lista
    // Criando uma section para guardar o input
    const element = document.createElement('section');
    document.body.appendChild(element);

    // Criando uma paragrafo elemento <p> dentro da section
    const elementInput = document.createElement('input');
    elementInput.id = 'texto-tarefa';
    element.appendChild(elementInput);

    recoveredInput = elementInput;
  }

  function createOrdenedList() {
    // Etapa 04 - Adicione uma lista ordenada de tarefas com o id="lista-tarefas"
    // Criando uma section para guardar a OL
    const elementSection = document.createElement('section');
    document.body.appendChild(elementSection);

    // Criando uma Lista Ordenada <OL> dentro da section
    const element = document.createElement('ol');
    element.id = 'lista-tarefas';
    elementSection.appendChild(element);
    recoveredOl = document.getElementById('lista-tarefas');
    selectElement = document.querySelector('#lista-tarefas');

    // Etapa 05 - Criando o botão Criar Tarefa
    // Criando um Botão <button> dentro da section
    const elementButton = document.createElement('button');
    elementButton.id = 'criar-tarefa';
    elementButton.innerText = 'Criar Tarefa';
    elementSection.appendChild(elementButton);
    addTask = document.getElementById('criar-tarefa');

    // Etapa 10 - Criando o botão Limpar Tarefas
    // Criando um Botão <button> dentro da section
    const elementButtonClear = document.createElement('button');
    elementButtonClear.id = 'apaga-tudo';
    elementButtonClear.innerText = 'Apaga Tudo';
    elementSection.appendChild(elementButtonClear);
    clearAll = document.getElementById('apaga-tudo');

    // Etapa 10 - Criando o botão Limpar Tarefas
    // Criando um Botão <button> dentro da section
    const elementRemoveCompleted = document.createElement('button');
    elementRemoveCompleted.id = 'remover-finalizados';
    elementRemoveCompleted.innerText = 'Remover Finalizados';
    elementSection.appendChild(elementRemoveCompleted);
    removeCompleted = document.getElementById('remover-finalizados');
  }

  function addItem(props) {
    const elementItem = document.createElement('li');
    elementItem.id = 'item';
    elementItem.className = 'opened';
    elementItem.innerText = props.value;
    elementItem.style.background = 'rgb(255, 255, 255)';
    recoveredOl.appendChild(elementItem);
    return true;
  }

  function defaultBackgroundItems() {
    allTasks = document.querySelectorAll('#item');
    for (let index = 0; index < allTasks.length; index++) {
      allTasks[index].style.backgroundColor = 'white';
    }
    return allTasks;
  }

  addTask.addEventListener('click', function () {
    if (addItem(recoveredInput)) {
      recoveredInput.value = '';
    }
  });

  removeCompleted.addEventListener('click', function () {
    allTasks = document.querySelectorAll('#item');
    for (let index = 0; index < allTasks.length; index++) {
        if (allTasks[index].classList.value === "completed") {
            allTasks[index].parentNode.removeChild(allTasks[index]);            
        }
    }
  });

  clearAll.addEventListener('click', function () {
    allTasks = document.querySelectorAll('#item');
    for (let index = 0; index < allTasks.length; index++) {
      allTasks[index].parentNode.removeChild(allTasks[index]);
    }
  });

  selectElement.addEventListener('click', function (props) {
    defaultBackgroundItems();
    props.target.style.background = 'rgb(128, 128, 128)';
  });

  selectElement.addEventListener('dblclick', function (props) {
    if (props.target.classList.value === "opened") {
        props.target.classList.remove('opened');
        props.target.classList.add('completed');           
    } else {
       props.target.classList.remove('completed');
        props.target.classList.add('opened');   
    }
  });

  function startAplication() {
    createHeader();
    createInstructions();
    createInput();
    createOrdenedList();
  }
};
