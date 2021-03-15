let button = document.getElementById('criar-tarefa');
let iten = document.getElementById('texto-tarefa');
let list = document.getElementById('lista-tarefas');
function addTask () {
   let task = document.createElement('li');
   list.appendChild(task).innerText = iten.value; // primeira ação: adicionar valor
   iten.value = ""; // segunda ação: deixar o input em branco
   }
button.addEventListener('click', addTask);

/* function changeBackgroundColor () {
    let itenTask = document.getElementById('lista-tarefas').children;
    for (let index = 0; index < itenTask.length; index++) {
        itenTask[index].addEventListener('click',function (event) {
            event.target.classList.add('grey');
            event.target.classList.remove('grey');
        });
    }
} */

function changeBackgroundColor () {
    let itenTask = document.getElementById('lista-tarefas');
        itenTask.addEventListener('click',function (event) {
        event.target.classList.add('grey');
    }); 
}

changeBackgroundColor();

