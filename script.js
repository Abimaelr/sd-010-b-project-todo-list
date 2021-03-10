//paragrafo com ID e texto
const paragrafo = document.createElement('p');
paragrafo.innerText = "Clique duas vezes em um item para marcá-lo como completo";
paragrafo.id = 'funcionamento'
const body = document.querySelector('body');
body.appendChild(paragrafo);

//cria input pra colocar text com ID e Type
const writeItem = document.getElementById('botaoInput');
const criaInput = document.createElement('input');
criaInput.id = 'texto-tarefa';
criaInput.type = 'text';
writeItem.appendChild(criaInput);

//cria lista ordenada
const list = document.createElement('ol');
list.id = "lista-tarefas";
body.appendChild(list);

//cria botão pra adicionar tarefa
const criaBotao = document.createElement('button');
criaBotao.id = 'criar-tarefa';
writeItem.appendChild(criaBotao);

//função pra adicionar tarefa
function criarTarefa(){
	const botaoTarefa = document.getElementById('criar-tarefa');
	const olId = document.getElementById('lista-tarefas');
	
	botaoTarefa.addEventListener('click',function(event){
		const itemLista = document.getElementById('texto-tarefa');
		let itemTarefa = document.createElement('li');
		itemTarefa.innerText = itemLista.innerText
		olId.appendChild(itemTarefa);
		itemLista.innerText = " "

	})
}
criarTarefa();
