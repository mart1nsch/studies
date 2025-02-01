class Pessoa {
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }

    set nomeCompleto(nomeCompleto) {
        nomeCompleto = nomeCompleto.split(` `);
        this.nome = nomeCompleto.shift();
        this.sobrenome = nomeCompleto.join(` `);
    }
}

const pessoa1 = new Pessoa(`Martin`, `Schneider`, 23);
console.log(pessoa1.nomeCompleto);
pessoa1.nomeCompleto = `Ana Karoline de Mello`;
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(`---------------------------`);

const _velocidade = Symbol();
class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    get velocidade() {
        return this[_velocidade];
    }

    set velocidade(valor) {
        if (valor > 100 || valor < 0) return;
        this[_velocidade] = valor;
    }

    acelerar() {
        if (this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    desacelerar() {
        if (this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const fusca = new Carro(`Fusca`);
fusca.acelerar();
fusca.acelerar();
fusca.acelerar();
fusca.acelerar();
fusca.acelerar();
fusca.acelerar();
console.log(fusca.velocidade);
fusca.desacelerar();
fusca.desacelerar();
console.log(fusca.velocidade);
console.log(`---------------------------`);

// Heranca
class Cliente extends Pessoa {
    constructor(nome, sobrenome, idade, endereco) {
        super(nome, sobrenome, idade);
        this.endereco = endereco;
    }
}

// Metodos estaticos
class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }

    static trocarPilha() {
        console.log(`Pilha trocada`);
    }
}

const controle1 = new ControleRemoto(`LG`);
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);
ControleRemoto.trocarPilha();