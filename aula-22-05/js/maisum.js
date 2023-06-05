document.getElementsByTagName('body')[0]
const body = document.getElementsByTagName('body')[0];
const div = document.createElement('div');
const imagem = document.createElement('img');
const legenda = document.createElement('h5');

imagem.src = sessionStorage.getItem('caminho');
legenda.innerHTML = localStorage.getItem('descricao');
div.appendChild(legenda)
div.appendChild(imagem);
body.appendChild(div);