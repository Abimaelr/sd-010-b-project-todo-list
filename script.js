function criaTarefa () {
    let entrada = document.getElementById('texto-tarefa');
    if(entrada.value == ""){
        alert('Insira uma tarefa!');
    } else {
        criaLi(entrada.value);
        entrada.value = "";
    }
    mudaCorItem();
}

function criaLi (valor) {
    let ul = document.getElementById('lista-tarefas');

    let cria = document.createElement('li');
    cria.innerText = valor;
    cria.className = 'item';
    ul.append(cria);
// Com ajuda de uma pessoa desenvolvedora
//     cria.addEventListener('click', function(evt){
//         console.log('ooi')
//         evt.target.style.backgroundColor = 'rgb(128, 128, 128)';
//     });
}

function mudaCorItem () {
    let pegaLi = document.querySelectorAll('.item');
    console.log(pegaLi)
    for (i =0; i < pegaLi.length; i += 1){
        pegaLi[i].addEventListener('click', function(evt){
            evt.target.style.backgroundColor = 'rgb(128, 128, 128)';
        });
    }
}
mudaCorItem();