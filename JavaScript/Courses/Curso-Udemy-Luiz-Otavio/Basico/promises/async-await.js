// o async e await servem para organizar melhor as chamadas de funcoes com promises e pegar o retorno
// se der algum erro, ele vai cair no catch
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

async function executar() {
    try {
        const chamada1 = await esperar(`chamou 1`, random(1, 4));
        console.log(chamada1);

        const chamada2 = await esperar(`chamou 2`, random(1, 4));
        console.log(chamada2);

        const chamada3 = await esperar(`chamou 3`, random(1, 4));
        console.log(chamada3);
    } catch(e) {
        console.log(e);
    }
}

executar();