window.onload = function () {
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
    elementP.id = "funcionamento";
    elementP.innerText = "Clique duas vezes em um item para marcá-lo como completo";
    element.appendChild(elementP);
  }

  function createInput() {
    // Etapa 03 - Adicione um input com o id="texto-tarefa" onde a pessoa usuária poderá digitar o nome do item que deseja adicionar à lista
    // Criando uma section para guardar o input
    const element = document.createElement('section');
    document.body.appendChild(element);

    // Criando uma paragrafo elemento <p> dentro da section
    const elementInput = document.createElement('input');
    elementInput.id = "texto-tarefa";
    element.appendChild(elementInput);
  }

  function createOrdenedList() {
    // Etapa 04 - Adicione uma lista ordenada de tarefas com o id="lista-tarefas"
    // Criando uma section para guardar a OL
    const elementSection = document.createElement('section');
    document.body.appendChild(elementSection);

    // Criando uma Lista Ordenada <OL> dentro da section
    const element = document.createElement('ol');
    element.id = "lista-tarefas";
    elementSection.appendChild(element);
  }

  function startAplication() {
    createHeader();
    createInstructions();
    createInput();
    createOrdenedList();
  }
};
