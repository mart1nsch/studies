function retornaNumeroAleatorio(de, ate) {
    return Math.round(Math.random() * (ate - de) + de);
}

class CPF {
    constructor(cpf) {
        if (!cpf) cpf = CPF.geraCpf();
        this.cpf = cpf.replace(/\D/g, ``);
        this.primeiroDigito = Number(this.cpf.slice(-2, -1));
        this.segundoDigito = Number(this.cpf.slice(-1));
    }

    validaCpf() {
        if (this.cpf.length !== 11) return `CPF Invalido`;

        const primeiroDigitoCalculado = 11 - (CPF.calculaDigitos(this.cpf.split(``), 10) % 11);
        if ((primeiroDigitoCalculado > 9 ? 0 : primeiroDigitoCalculado) !== this.primeiroDigito) return `CPF Invalido!`;

        const segundoDigitoCalculado = 11 - (CPF.calculaDigitos(this.cpf.split(``), 11) % 11);
        if ((segundoDigitoCalculado > 9 ? 0 : segundoDigitoCalculado) !== this.segundoDigito) return `CPF Invalido!`;

        return `CPF Valido!`;
    }

    get cpfCompleto() {
        console.log(this.cpf);
        return `${this.cpf.slice(0, 3)}.${this.cpf.slice(3, 6)}.${this.cpf.slice(6, 9)}-${this.cpf.slice(9, 11)}`;
    }

    static calculaDigitos(array, multiplicador) {
        return array.reduce((acumulador, numero) => {
            if (multiplicador < 2) return acumulador;
            acumulador += (Number(numero) * multiplicador);
            multiplicador--;
            return acumulador;
        }, 0);
    }

    static geraCpf() {
        const arrayNovoCpf = [];
        for (let i=0; i<9; i++) {
            arrayNovoCpf.push(retornaNumeroAleatorio(0, 9));
        }
        
        const primeiroDigito = 11 - (CPF.calculaDigitos(arrayNovoCpf, 10) % 11);
        arrayNovoCpf.push((primeiroDigito > 9 ? 0 : primeiroDigito));

        const segundoDigito = 11 - (CPF.calculaDigitos(arrayNovoCpf, 11) % 11);
        arrayNovoCpf.push((segundoDigito > 9 ? 0 : segundoDigito));
        
        return arrayNovoCpf.join().replace(/\D/g, ``);
    }
}

const cpf = new CPF();
console.log(cpf.cpfCompleto);