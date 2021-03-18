// //https://www.w3schools.com/jsref/jsref_foreach.asp
// //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// //https://www.w3schools.com/js/js_arrow_function.asp

// let createTask = (text) => {
//     let task = document.createElement('li');
//     task.className = 'task'; 
//     task.innerHTML = text; 
//     return task; 
//   }  
  
//   let insertTask = () => {    
//     let input = document.getElementById('texto-tarefa');    
//     let lista = document.getElementById('lista-tarefas');
  
//     if (input.value !== '') { 
//       let task = createTask(input.value); 
//       lista.appendChild(task); 
//       input.value = ''; 
//     }
//   }  
//   let selectTaskWithBackgroundColor = (color) => {    
//     let taskElementsList = document.querySelectorAll('.task');
//     let selectTask = null;     
//     taskElementsList.forEach((task) => {      
//       if (task.style.backgroundColor === color) {
//         selectTask = task; 
//       }
//     });  
//     return selectTask; 
//   } 
//   let changeTaskBackgroundColor = (event) => {
//     let task = event.target;      
//     let currentTask = selectTaskWithBackgroundColor('rgb(128, 128, 128)');  
//     if (currentTask) {      
//       currentTask.style.backgroundColor = task.style.backgroundColor; 
//     }    
//     task.style.backgroundColor = 'rgb(128, 128, 128)';
//   } 
  
//   let taskCompletedOrNot = (event) => {
//     let task = event.target; 
    
//     task.classList.toggle('completed');
//   } 
  
//   let setupEvents = () => {   
//     let button = document.querySelector('#criar-tarefa');    
//     button.addEventListener('click', insertTask);    
//     let taskList = document.querySelector('#lista-tarefas');    
//     taskList.addEventListener('click', changeTaskBackgroundColor);   
//     taskList.addEventListener('dblclick', taskCompletedOrNot);
//   }    
//     window.onload = function init() {
//     setupEvents(); 
//   };
  

const task = document.getElementById('texto-tarefa');
const btnCriaTarefa = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const btnLimpar = document.querySelector('#apaga-tudo');
const btnRemoverFinalizadas = document.querySelector('#remover-finalizados');
const btnSalvaLista = document.querySelector('#salvar-tarefas');
const btnMoverCima = document.querySelector('#mover-cima');
const btnMoverBaixo = document.querySelector('#mover-baixo');

function selectLi(event) {
  const listLi = document.querySelectorAll('.tarefa');
  for (let i = 0; i < listLi.length; i += 1) {
    if (listLi[i].classList.contains('selected')) {
      listLi[i].classList.remove('selected');
    }
    event.target.classList.add('selected');
  }
}

/* pesquisa toggle */
function mark(event) {
  event.target.classList.toggle('completed');
}

function criarTarefa() {
  const novoItem = document.createElement('li');
  novoItem.className = 'tarefa';
  novoItem.addEventListener('click', selectLi);
  novoItem.addEventListener('dblclick', mark);
  novoItem.innerText = task.value;
  if (!task.value.trim()) {
    return alert('Adicione uma tarefa');
  }
  list.appendChild(novoItem);
  task.value = '';
  task.focus();
}

btnCriaTarefa.addEventListener('click', criarTarefa);
window.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    criarTarefa();
  }
});

btnLimpar.addEventListener('click', () => {
  list.innerHTML = '';
  // let array = document.querySelectorAll('.tarefa');
  // for (let i = 0; i < array.length; i += 1) {
  //   list.removeChild(array[i]);
  // }
});

btnRemoverFinalizadas.addEventListener('click', () => {
  const array = document.querySelectorAll('.completed');
  for (let index = 0; index < array.length; index += 1) {
    list.removeChild(array[index]);
  }
});

const storage = localStorage;

btnSalvaLista.addEventListener('click', () => {
  storage.setItem('lista', list.innerHTML);
});

window.onload = () => {
  list.innerHTML = storage.getItem('lista');
  const listChild = list.children;
  for (let index = 0; index < listChild.length; index += 1) {
    const element = listChild[index];

    element.addEventListener('click', selectLi);
    element.addEventListener('dblclick', mark);
  }
};