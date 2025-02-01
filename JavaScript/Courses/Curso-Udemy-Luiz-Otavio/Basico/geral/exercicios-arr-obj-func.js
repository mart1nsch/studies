function meuEscopo(){
    const form = document.querySelector(".form");
    const resultado = document.querySelector(".resultado");
    const pessoas = [];

    function populaResultado(){
        resultado.innerHTML = "";

        pessoas.forEach((pessoa) => {
            resultado.innerHTML += `<p>${pessoa.nome} <br>
                                       ${pessoa.sobrenome} <br>
                                       ${pessoa.peso} <br>
                                       ${pessoa.altura} <p><br><br>`;
        })
    }

    function criaPessoa(nome, sobrenome, peso, altura){
        return { nome, sobrenome, peso, altura };
    }

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector(".nome");
        const sobrenome = form.querySelector(".sobrenome");
        const peso = form.querySelector(".peso");
        const altura = form.querySelector(".altura");

        pessoas.push(criaPessoa(nome.value, sobrenome.value, peso.value, altura.value));

        populaResultado();
    }

    form.addEventListener("submit", recebeEventoForm);
}

meuEscopo();