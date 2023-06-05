//referencias
const div_lista_imagens = document.getElementById("lista-imagens");
const div_imagem = document.getElementById("imagem");
const input_busca = document.getElementById("busca");

//modificando array pra incluir o caminho das imagens

minhas_imagens.forEach(
    (ele) => {
        ele.caminho = 'imagens/numero_' + ele.valor + '.png';
    }

)

const cartao = ( clicada ) => {
    const container = document.createElement("div");
    const imagem = document.createElement("img");
    const legenda = document.createElement("h5")

    container.style.border = "solid black 2px"
    container.style.borderRadius = "8px"
    container.style.width = "fit-content"
    container.style.textAlign = "center"
    container.style.margin = "0 auto"
    container.style.fontFamily = "sans-serif"
    container.style.padding = "1em"

    imagem.src = clicada.src;
    imagem.width = 200;

    legenda.innerHTML = clicada.alt;

    container.appendChild(imagem);
    container.appendChild(legenda);

    div_imagem.innerHTML = "";

    div_imagem.appendChild(container);
} 

// manipulando evento

const manipula_evento = ( evento ) => {
    const imagem_clicada = evento.target;
    document.cookie = `valor = ${imagem_clicada.dataset.valor}`;
    document.cookie = `nome =  ${imagem_clicada.dataset.nome}`;
    // sessionstorage
    sessionStorage.setItem('valor', imagem_clicada.dataset.valor);
    sessionStorage.setItem('nome', imagem_clicada.dataset.nome);
    sessionStorage.setItem('descrição', imagem_clicada.dataset.descrição)
    sessionStorage.setItem('caminho', imagem_clicada.src)
    // local storage
    localStorage.setItem(caminho)
    
    cartao(imagem_clicada);
}

const criar_imagens = (entrada) => {
    div_lista_imagens.innerHTML = "";
    entrada.forEach(
        ( ele ) => {
            const imagem_numero = document.createElement("img")
            imagem_numero.src = ele.caminho;
            imagem_numero.width = 100;
            imagem_numero.className = "imagem_da_lista";
            imagem_numero.alt = ele.descrição
            imagem_numero.onclick = manipula_evento;
            //dados
            imagem_numero.dataset.nome = ele.nome;
            imagem_numero.dataset.valor = ele.valor;
            imagem_numero.dataset.descrição= ele.descrição;


            div_lista_imagens.appendChild(imagem_numero);
        }
    )
}

criar_imagens(minhas_imagens);

// tratando entrada da busca

const manipula_evento_busca = (e) => {
    const string_busca = e.target.value.toLowerCase();
    if (string_busca.length >= 3) {
        const novo_array = minhas_imagens.filter(
            (elemento) => {
                return elemento.descrição.includes(string_busca);
            });
        criar_imagens(novo_array);
    }
}

input_busca.onkeyup = manipula_evento_busca;