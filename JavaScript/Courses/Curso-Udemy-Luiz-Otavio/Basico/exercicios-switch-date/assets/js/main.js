const titleElement = document.querySelector(`#title`);
const date = new Date();

function assembleDate() {
    return `${getCurrentDayDescription()}, ${date.getDate()} de ${getCurrentMonthDescription()} de ${date.getFullYear()}, ${getCurrentHourMinute()}`;
}

/*function getCurrentDayDescription(){
    switch (date.getDay()) {
        case 0: return `Domingo`;
        case 1: return `Segunda-feira`;
        case 2: return `Terça-feira`;
        case 3: return `Quarta-feira`;
        case 4: return `Quinta-feira`;
        case 5: return `Sexta-feira`;
        case 6: return `Sábado`;
        default: return ``;
    }
}*/

function getCurrentMonthDescription() {
    switch (date.getMonth()) {
        case 0: return `Janeiro`;
        case 1: return `Fevereiro`;
        case 2: return `Março`;
        case 3: return `Abril`;
        case 4: return `Maio`;
        case 5: return `Junho`;
        case 6: return `Julho`;
        case 7: return `Agosto`;
        case 8: return `Setembro`;
        case 9: return `Outubro`;
        case 10: return `Novembro`;
        case 11: return `Dezembro`;
        default: ``;
    }
}

function getCurrentHourMinute() {
    return `${addZeroLeft(date.getHours())}:${addZeroLeft(date.getMinutes())}`;
}

function addZeroLeft(number) {
    return number >= 10 ? number : `0${number}`;
}

titleElement.innerHTML = assembleDate();


/*
// Isso tudo acima poderia ser feito usando o abaixo (essa é a melhor e ideal):

const titleElement = document.querySelector(`#title`);
const date = new Date();

titleElement.innerHTML = date.toLocaleDateString(`pt-BR`);
*/


// A função getCurrentDayDescription() poderia ser trocada pelo abaixo, sem usar swtich

function getCurrentDayDescription(){
    const days = [`Domingo`, `Segunda-feira`, `Terça-feira`, `Quarta-feira`, `Quinta-feira`, `Sexta-feira`, `Sábado`];
    return days[date.getDay()];
}
