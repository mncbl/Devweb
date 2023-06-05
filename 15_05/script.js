const div_colorida = document.getElementById('colorida');
const input_color = document.getElementById('input_color');
const meu_primero_array = [1, 2, 3, 4, 'casa'];
const div_imagens = document.getElementById('imagens');
let minha_imagens = [
    {
        nome: 'Numero 1',
        valor: 1,
        descricao:'numero 1 com fundo amarelo '
    },
    {
        nome: 'Numero 2',
        valor: 2,
        descricao:'numero 2 com fundo vermelho '
    },
    {
        nome: 'Numero 3',
        valor: 3,
        descricao:'numero 3 vermelho 3d '
    },
    
];    
    

div_colorida.style.height = '1em';


function mudar_cor(e){

    div_colorida.style.backgroundColor = e.target.value;
    console.log(e.target.value);

}

input_color.onchange = mudar_cor;
/* imprime array*/
let contador = 0;
while(contador< meu_primero_array.length){
    console.log(meu_primero_array[contador]);
    contador++;
}
for(let i = 0; i < meu_primero_array.length; i++){
    console.log('com for', meu_primero_array[i]);

}
meu_primero_array.forEach((ele, indice) => {
    console.log(ele, indice);
}
);
for(const ele of meu_primero_array){
    console.log('for of', ele);
}
console.log("map",meu_primero_array.map((e)=> e + 1 ));
/* alterando array 
minha_imagens = minha_imagens.map(
    (ele) => {
        return ele.caminho = 'imagens/numero_' + ele.valor + '.png'
    }
);*/
minha_imagens.forEach(
    (ele) => {
        return ele.caminho = 'imagens/numero_' + ele.valor + '.png'
    }
);

/*manipulando DOM*/
minha_imagens.forEach(
    (ele)=> {
        div_imagens.innerHTML += `<center><p><img alt = "${ele.descricao}" width =100 src = ${ele.caminho}><center/>`;
    }
);
minha_imagens.forEach(
    (ele)=> {
       const imagem = document.createElement('img');
       imagem.src = ele.caminho;
       imagem.width = 200;
       div_imagens.appendChild(imagem);
       
    }

);