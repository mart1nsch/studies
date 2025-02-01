function Calculadora() {
    const display = document.querySelector(`.display`);

    this.inicia = () => {
        this.cliqueBotoes();
        this.pressionarTecla();
    };

    this.cliqueBotoes = () => {
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
    };

    this.pressionarTecla = () => {
        document.addEventListener(`keyup`, function(e) {
            if (e.keyCode === 13) {
                this.btnRealizaConta();
            }
        }.bind(this));
    };

    this.btnParaDisplay = (value) => {
        display.value += value;
        display.focus();
    };

    this.btnApagarTudo = () => {
        display.value = ``;
    };

    this.btnApagarUm = () => {
        display.value = display.value.slice(0, -1);
    };

    this.btnRealizaConta = () => {
        let conta = display.value;

        try {
            conta = eval(conta);

            if (!conta) {
                alert(`Conta Invalida!`);
                return;
            }

            display.value = conta;
        } catch(e) {
            alert(`Conta Invalida!`);
            return;
        }
    };
}

const calculadora = new Calculadora();
calculadora.inicia();