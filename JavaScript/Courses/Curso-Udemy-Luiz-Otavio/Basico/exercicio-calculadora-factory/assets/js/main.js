function criaCalculadora() {
    return {
        display: document.querySelector(`.display`),

        inicia() {
            this.cliqueBotoes();
            this.pressionarTecla();
        },

        cliqueBotoes() {
            document.addEventListener(`click`, function(e) {
                const element = e.target;

                if (element.classList.contains(`btn-num`)) {
                    this.btnParaDisplay(element.innerText);
                } else if (element.classList.contains(`btn-clear`)) {
                    this.btnApagarTudo();
                } else if (element.classList.contains(`btn-del`)) {
                    this.btnApagarUm();
                } else if (element.classList.contains(`btn-eq`)) {
                    this.btnRealizaConta();
                }
            }.bind(this));
        },

        pressionarTecla() {
            document.addEventListener(`keyup`, function(e) {
                if (e.keyCode === 13) {
                    this.btnRealizaConta();
                }
            }.bind(this));
        },

        btnParaDisplay(value) {
            this.display.value += value;
            this.display.focus();
        },

        btnApagarTudo() {
            this.display.value = ``;
        },

        btnApagarUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        btnRealizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if (!conta) {
                    alert(`Conta Invalida!`);
                    return;
                }

                this.display.value = conta;
            } catch(e) {
                alert(`Conta Invalida!`);
                return;
            }
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();