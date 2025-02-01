function ePaisagem(largura, altura){
    return largura > altura ? true : false;
}

const ePaisagem2 = (largura, altura) => largura > altura ? true : false;

/* As duas acima fazem a mesma coisa */

console.log(ePaisagem(80, 90));
console.log(ePaisagem2(80, 90));