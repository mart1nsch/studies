// *** resolve da o return, reject é para erros
// resolve cai no then, reject cai no catch
function random(max, min) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperar(mensagem, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof mensagem !== `string`) {
            reject(`BAD VALUE`);
            return;
        }

        setTimeout(() => {
            resolve(mensagem.toUpperCase() + ` - DEU CERTO!`);
        }, tempo);
    });
}

esperar(`tempo1`, random(1, 3)).then(resposta => {
    console.log(resposta);
    return esperar(2, random(1, 3))
}).then(resposta => {
    console.log(resposta);
    return esperar(`tempo3`, random(1, 3))
}).then(resposta => {
    console.log(resposta);
}).catch(e => {
    console.log(`ERRO:`, e);
});

// *** Tambem podemos enviar varias promises num array para serem executadas de uma vez usando o Promise.all
// se alguma delas cair no catch, ele rejeita todas
const promises = [`TESTE`, esperar(`chamada1`, 400), esperar(`chamada2`, 1000), esperar(`chamada3`, 200), 100, `OUTRO VALOR`];
const promises2 = [esperar(`chamada1`, 400), esperar(`chamada2`, 1000), esperar(`chamada3`, 200)];

Promise.all(promises).then(valor => {
    console.log(valor);
}).catch(e => {
    console.log(e);
});

// *** Tambem temos o metodo race que ira entregar o primeiro que for feito (SOMENTE O PRIMEIRO), nao entrega em ordem
// entao, se tivermos alguma string, numero, etc., que nao for promise no array, ele ira pegar esse dado ao inves
// de rodar alguma promise
Promise.race(promises2).then(valor => {
    console.log(`RACE`, valor);
}).catch(e => {
    console.log(e);
});

// *** Temos o resolve tambem, que ele vai mandar como resolvido antes mesmo de chamar uma promise (reject tmb vale a mesma coisa)
function baixarPagina() {
    const emCache = true;

    if (emCache) return Promise.resolve(`Pagina ja em cache`);
    else return esperar(`Pagina baixada`, 2000);
}

baixarPagina().then(resposta => {
    console.log(`BAIXAR PAGINA:`, resposta);
}).catch(e => {
    console.log(e);
});