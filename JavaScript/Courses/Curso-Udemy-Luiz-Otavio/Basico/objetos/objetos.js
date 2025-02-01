const produto = {
    nome: `Xicara`,
    valor: 19.90
};

console.log(Object.getOwnPropertyDescriptor(produto, `nome`));

// Prototypes
function Pessoa(nome, sobrenome) {
    this.nome = nome,
    this.sobrenome = sobrenome
}

Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`;
}

const p1 = new Pessoa(`Martin`, `Schneider`);
console.log(p1.nomeCompleto());

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function(valor) {
    this.preco += valor;
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

const camiseta = new Camiseta(`Polo`, 80, `Preto`);
camiseta.aumento(10)
console.log(camiseta);

// Poliformismo
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}
Conta.prototype.sacar = function(valor) {
    if (this.saldo >= valor) {
        this.saldo -= valor;
    } else {
        return `Saldo insuficiente`;
    }
    return this.verSaldo();
}
Conta.prototype.depositar = function(valor) {
    if (valor) {
        this.saldo += valor;
    }
    return this.verSaldo();
}
Conta.prototype.verSaldo = function() {
    return `Agencia: ${this.agencia}, Conta: ${this.conta}, Saldo: R$${this.saldo.toFixed(2)}`;
}

const conta1 = new Conta(`001`, `278`, 50);
console.log(conta1.sacar(30));
console.log(conta1.depositar(10));
console.log(conta1.sacar(30));
console.log(conta1.sacar(10));

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;
ContaCorrente.prototype.sacar = function(valor) {
    if ((this.saldo + this.limite) >= valor) {
        this.saldo -= valor;
    } else return `Saldo insuficiente`;
    return this.verSaldo();
}

console.log(`---------------------`);
const corrente1 = new ContaCorrente(`001`, `278`, 10, 5);
console.log(corrente1.sacar(1));
console.log(corrente1.sacar(14));
console.log(corrente1.depositar(1));
console.log(corrente1.sacar(1));

function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

console.log(`---------------------`);
const poupanca1 = new ContaPoupanca(`001`, `278`, 0);
console.log(poupanca1.depositar(45));
console.log(poupanca1.sacar(30));