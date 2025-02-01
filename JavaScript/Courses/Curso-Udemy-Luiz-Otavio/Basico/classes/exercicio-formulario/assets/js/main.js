class Mensagens {
    static criaMensagem(codigo, parametro1, parametro2) {
        if (codigo === 1) return `Campo "${parametro1}" deve ser informado.`;
        if (codigo === 2) return `Campo "${parametro1}" deve conter entre ${parametro2} a 12 caracteres.`;
        if (codigo === 3) return `Campo "Usuario" deve conter apenas letras ou numeros.`;
        if (codigo === 4) return `As senhas devem ser iguais.`;
        if (codigo === 5) return `CPF Invalido`;
    }
}

class Formulario {
    constructor() {
        this.nome = document.querySelector(`#input-nome`).value;
        this.sobrenome = document.querySelector(`#input-sobrenome`).value;
        this.usuario = document.querySelector(`#input-usuario`).value;
        this.senha = document.querySelector(`#input-senha`).value;
        this.repetirSenha = document.querySelector(`#input-repetir-senha`).value;
        this.cpf = document.querySelector(`#input-cpf`).value.replace(/\D+/g, ``);
        this.cpfPrimeiroDigito = Number(this.cpf.slice(-2, -1));
        this.cpfSegundoDigito = Number(this.cpf.slice(-1));
        this.comErro = false;
    }

    validaCpf() {
        if (this.cpf.length !== 11) {
            this.mostraErroMensagemTela(`cpf`, Mensagens.criaMensagem(5));
            return;
        }

        const primeiroDigitoCalculado = 11 - (Formulario.calculaDigitos(this.cpf.split(``), 10) % 11);
        if ((primeiroDigitoCalculado > 9 ? 0 : primeiroDigitoCalculado) !== this.cpfPrimeiroDigito) {
            this.mostraErroMensagemTela(`cpf`, Mensagens.criaMensagem(5));
            return;
        }

        const segundoDigitoCalculado = 11 - (Formulario.calculaDigitos(this.cpf.split(``), 11) % 11);
        if ((segundoDigitoCalculado > 9 ? 0 : segundoDigitoCalculado) !== this.cpfSegundoDigito) {
            this.mostraErroMensagemTela(`cpf`, Mensagens.criaMensagem(5));
            return;
        }
    }

    static calculaDigitos(array, multiplicador) {
        return array.reduce((acumulador, numero) => {
            if (multiplicador < 2) return acumulador;
            acumulador += (Number(numero) * multiplicador);
            multiplicador--;
            return acumulador;
        }, 0);
    }

    validaEmBranco() {
        if (!this.nome) this.mostraErroMensagemTela(`nome`, Mensagens.criaMensagem(1, `Nome`));
        if (!this.sobrenome) this.mostraErroMensagemTela(`sobrenome`, Mensagens.criaMensagem(1, `Sobrenome`));
        if (!this.cpf) this.mostraErroMensagemTela(`cpf`, Mensagens.criaMensagem(1, `CPF`));
        if (!this.usuario) this.mostraErroMensagemTela(`usuario`, Mensagens.criaMensagem(1, `Usuario`));
        if (!this.senha) this.mostraErroMensagemTela(`senha`, Mensagens.criaMensagem(1, `Senha`));
        if (!this.repetirSenha) this.mostraErroMensagemTela(`repetir-senha`, Mensagens.criaMensagem(1, `Repetir Senha`));
    }

    validaUsuario() {
        if (this.usuario.length < 3 || this.usuario.length > 12) this.mostraErroMensagemTela(`usuario`, Mensagens.criaMensagem(2, `Usuario`, 3));
        if (!/^[a-zA-Z0-9]+$/.test(this.usuario)) this.mostraErroMensagemTela(`usuario`, Mensagens.criaMensagem(3));
    }

    validaSenha() {
        if (this.senha.length < 6 || this.senha.length > 12) this.mostraErroMensagemTela(`senha`, Mensagens.criaMensagem(2, `Senha`, 6));
        if (this.senha !== this.repetirSenha) this.mostraErroMensagemTela(`repetir-senha`, Mensagens.criaMensagem(4));
    }

    executaValidacoes() {
        this.limpaErros();
        this.validaEmBranco();
        this.validaUsuario();
        this.validaSenha();
        this.validaCpf();
    }

    mostraErroMensagemTela(input, mensagem) {
        const spanElement = document.querySelector(`.erros-${input}`);
        spanElement.innerText = !spanElement.innerText ? mensagem : spanElement.innerText + `\n` + mensagem;
        this.comErro = true;
    }

    limpaErros() {
        const spanElements = document.querySelectorAll(`.erros`);
        for (let span of spanElements) {
            span.innerText = ``;
        }
        this.comErro = false;
    }

    static enviaFormulario() {
        const formulario = new Formulario();
        formulario.executaValidacoes();
        
        if (formulario.comErro) return;

        alert(`Formulario Enviado com Sucesso!`);
    }
}

(function iniciaFormulario() {
    const formElement = document.querySelector(`form`);
    formElement.addEventListener(`submit`, (e) => {
        e.preventDefault();
        Formulario.enviaFormulario();
    });
})();