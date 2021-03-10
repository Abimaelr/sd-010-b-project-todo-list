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

  function startAplication() {
    createHeader();
    createInstructions();
  }
};
