const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const pessoas = [
    { nome: `Martin`, idade: 23 },
    { nome: `Karol`, idade: 22 },
    { nome: `Marcio`, idade: 58 },
    { nome: `Alaire`, idade: 62 },
    { nome: `Carina`, idade: 32 }
];

// Filter
const numerosFiltrados = numeros.filter(valor => {
    return valor > 10;
});

console.log(`numerosFiltrados: ${numerosFiltrados}`);

const pessoasFiltradas = pessoas.filter(pessoa => {
    return pessoa.idade > 30;
});

pessoasFiltradas.forEach(pessoa => console.log(`pessoa.nome: ${pessoa.nome}`));

// Map
const numerosDobrados = numeros.map(numero => numero * 2);
console.log(`numerosDobrados: ${numerosDobrados}`);

// Reduce
const totalNumeros = numeros.reduce((acumulador, numero) => {
    acumulador += numero;
    return acumulador;
}, 0);

console.log(`totalNumeros: ${totalNumeros}`);

// Usando todos
const tudoJunto = numeros
.filter(numero => numero % 2 === 0)
.map(numero => numero * 2)
.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(`tudoJunto: ${tudoJunto}`);

// ForEach
numeros.forEach((numero, indice) => console.log(`indice: ${indice}, numero: ${numero}`));