let button = document.getElementById('criar-tarefa');
let iten = document.getElementById('texto-tarefa');
let list = document.getElementById('lista-tarefas');

// Requisito 5 e 6 criar uma lista ordenada de tarefas:
function addTask () {
   let task = document.createElement('li');
   list.appendChild(task).innerText = iten.value; // primeira ação: adicionar valor
   // Ajuda de colegas nas salas de estudo:
   iten.value = ""; // segunda ação: deixar o input em branco
   }
button.addEventListener('click', addTask);

// Requisito 7 e 8 colocar Background em apenas um item ao clicar uma vez:
function changeBackgroundColor (event){
    let selectedColor = document.querySelector('.grey')
    event.target.classList.add('grey');
    // Ajuda do Isaac no Plantão:
    if (selectedColor) selectedColor.classList.remove('grey');
}
list.addEventListener('click',changeBackgroundColor);

// Requisito 9 sublinhar tarefa ao clicar duas vezes:
// Entendimento da função toggle em: https://www.w3schools.com/howto/howto_js_toggle_class.asp
function lineThrough () {
    let itenTask = document.getElementById('lista-tarefas');
        itenTask.addEventListener('dblclick',function (event) {
        event.target.classList.toggle('completed');
    }); 
}
lineThrough();

