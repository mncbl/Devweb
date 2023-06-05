const elemento = document.createElement('p');
elemento.innerHTML = document.cookie;


document.getElementsByTagName('body')[0].appendChild(elemento);
const acha_cookie = (chave) => {
    const lista_de_cookie =document.cookie.split('; ');
    const proucurando = lista_de_cookie.find((e)=> e.startsWith(chave)).split("=")[1];
    return proucurando;
}
// usando filter
let resposta_array = minhas_imagens.filter((elemento) => elemento.valor == acha_cookie('valor'));
let descricao = resposta_array[0].descricao;


resposta_array = minhas_imagens.find((elemento) => elemento.valor == acha_cookie('valor'));
descricao = resposta_array.descricao;

elemento.innerHTML = acha_cookie('nome');