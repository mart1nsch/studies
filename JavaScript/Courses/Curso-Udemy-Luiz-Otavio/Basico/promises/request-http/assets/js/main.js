const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        // abre a conexao, primeiro parametro e o que voce quer fazer (GET = PEGAR DADOS)
        // segundo parametro e a URL que quer se conectar
        // terceiro se vai ser assincrono (true = assincrono, false = sincrono)
        xhr.open(obj.method, obj.url, true);
        xhr.send(); // envia a solicitacao

        // quando ja recebeu a resposta
        xhr.addEventListener(`load`, () => {
            if (xhr.status >= 200 && xhr.status < 300) { // retorno de sucesso, caso nao entrar no if deu erro
                resolve(xhr.responseText);
            } else {
                reject({
                    code: xhr.status,
                    msg: xhr.statusText
                });
            }
        });
    });
};

async function carregaPagina(element) {
    const href = element.getAttribute(`href`);
    
    try {
        const response = await request({
            method: `GET`,
            url: href
        });
        atualizaPagina(response);
    } catch(e) {
        console.log(`ERROR: STATUS:`, e.code, `MSG:`, e.msg);
    }
}

function atualizaPagina(response) {
    document.querySelector(`.resultado`).innerHTML = response;
}

document.addEventListener(`click`, e => {
    const element = e.target;

    if (element.tagName.toLowerCase() === `a`) {
        e.preventDefault();
        carregaPagina(element);
    }
});