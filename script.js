const inputField = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');
const btn = document.getElementById('criar-tarefa');
const apagar = document.getElementById('apaga-tudo');
const finalizados = document.getElementById('remover-finalizados');

btn.addEventListener ('click', function(){
    const listItem = document.createElement('li');
    listItem.innerText = inputField.value;
    listItem.className = 'li '
    inputField.value = "";
    list.appendChild(listItem);
})

function itemSelection (evt){
    clearListClass ();
    evt.target.classList.add('selected');
}

function clearListClass (){
    //limpar os outros Itens
    const listItem = document.querySelectorAll('.li')
    for (let index = 0; index < listItem.length; index += 1){
        let classes = `${listItem[index].className}`;
        const classe = classes.replace('selected','');
        listItem[index].className = classe;
    }
}



function itemCheck(evt){
    const entrada = evt.target.className.split(" ");

    if(entrada.includes('completed')) {
        evt.target.classList.remove('completed');
    }
    else{
        evt.target.classList.add('completed');
    }  
}

list.addEventListener ('dblclick', itemCheck, false)
list.addEventListener ('click', itemSelection, false)

apagar.addEventListener('click', eraseList)

function eraseList(){
    if(list.lastElementChild == null) {
        return;
    }
   while(list.lastElementChild != null) {
       list.lastChild.remove();
   }
}

finalizados.addEventListener('click', function(){
    let finalizados = document.querySelectorAll('.completed');
    for (let index = 0; index < finalizados.length; index += 1){
        finalizados[index].remove();
    }
 })