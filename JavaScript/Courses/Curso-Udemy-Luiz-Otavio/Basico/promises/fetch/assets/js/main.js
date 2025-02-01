async function buscaDados(url) {
    try {
        const response = await fetch(url);
        if (response.status === 200) {
            const html = await response.text();
            atualizaPagina(html);
        } else {
            console.error(`RETORNO COM STATUS ${response.status}`);
        }
    } catch(e) {
        console.error(`ERRO:`, e);
    }
}

function atualizaPagina(response) {
    document.querySelector(`.resultado`).innerHTML = response;
}

document.addEventListener(`click`, e => {
    const element = e.target;

    if (element.tagName.toLowerCase() === `a`) {
        e.preventDefault();
        buscaDados(element.getAttribute(`href`));
    }
});