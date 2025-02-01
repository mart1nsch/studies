const data = new Date();
const diaSemana = data.getDay();
let diaSemanaDescrito;

switch (diaSemana) {
    case 0: diaSemanaDescrito = `Domingo`; break;
    case 1: diaSemanaDescrito = `Segunda-Feira`; break;
    case 2: diaSemanaDescrito = `Terça-Feira`; break;
    case 3: diaSemanaDescrito = `Quarta-Feira`; break;
    case 4: diaSemanaDescrito = `Quinta-Feira`; break;
    case 5: diaSemanaDescrito = `Sexta-Feira`; break;
    case 6: diaSemanaDescrito = `Sábado`; break;
    default: diaSemanaDescrito = ``;
}

function getDiaSemanaDescrito(){
    switch (diaSemana) {
        case 0: return `Domingo`;
        case 1: return `Segunda-Feira`;
        case 2: return `Terça-Feira`;
        case 3: return `Quarta-Feira`;
        case 4: return `Quinta-Feira`;
        case 5: return `Sexta-Feira`;
        case 6: return `Sábado`;
        default: return ``;
    }
}

console.log(`O dia da semana é ${diaSemanaDescrito}.`);
console.log(`O dia da semana por função é ${getDiaSemanaDescrito()}.`);