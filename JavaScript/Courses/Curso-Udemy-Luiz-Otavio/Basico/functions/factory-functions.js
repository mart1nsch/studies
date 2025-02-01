function criaPessoa(nome, sobrenome, idade, peso, altura) {
    return {
        nome,
        sobrenome,
        idade,
        peso,
        altura,
        falar(texto) {
            return `${this.nome} está ${texto}`;
        },
        get imc() {
            return (this.peso / (this.altura ** 2)).toFixed(2);
        },
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        set nomeCompleto(valor) {
            valor = valor.split(` `);
            this.nome = valor.shift();
            this.sobrenome = valor.join(` `);
        }
    };
}

const pessoa1 = criaPessoa(`Martin`, `Schneider`, 23, 83, 1.86);
const pessoa2 = criaPessoa(`Karol`, `Mello`, 22, 52, 1.76);

console.log(pessoa1.falar(`programando em JavaScript.`));
console.log(`O indice IMC de ${pessoa1.nome} é ${pessoa1.imc}\n`);

console.log(pessoa2.falar(`estudando Engenharia Elétrica.`));
console.log(`O indice IMC de ${pessoa2.nome} é ${pessoa2.imc}\n`);

console.log(`-----MUDEI O NOME-----\n`);
pessoa1.nomeCompleto = `Marcio Reni Schneider`;
console.log(pessoa1.nomeCompleto);