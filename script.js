const things = document.getElementById('lista-tarefas');
const content = document.getElementById('texto-tarefa');
const button = document.getElementById('criar-tarefa');

button.addEventListener('click', recebeClick)

function recebeClick () {
   
   const item = document.createElement('li');
   things.appendChild(item);
   item.innerHTML = content.value;
   item.className = 'whatToDo';
   item.addEventListener ('click', function (event){
      let Col = getComputedStyle(event.target);
      let or = Col.backgroundColor;
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
           
   });
   content.value = '';
};


//Exercicio 9
const done = document.querySelectorAll('.whatToDo');


for (let index = 0; index < done.length; index += 1){
   done.addEventListener ('dbclick', function (){
      done[index].className = 'completed';

   })
}

//Exercicio 10
const clear = document.getElementById('apaga-tudo');// atribui na constante clear o elemento button de apagar tudo
let rem = document.getElementById('lista-tarefas');// atribui na constante rem a tag ol
const posted = document.querySelectorAll('.whatToDo'); // atribui na constante posted as li com classe whatToDo

clear.addEventListener('click', Erase)

function Erase () {
   for(let index = 0; index < posted.length; index += 1) {
      rem.removeChild(posted[index]);
   };
     
};

//Exercicio 11


