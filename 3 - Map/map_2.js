// Neste arquivo mostra de forma "manual" como funciona o Map para que seja fácil o entendimento dele.

Array.prototype.meuMap = function(fn) {
    const mapped = []
    for(let i = 0; i < this.length; i++) {
        const result = fn(this[i], i, this)
        mapped.push(result)
    }
    return mapped;
}

const carrinho = [
    {nome: 'Pães', qnt: 10, preco: 0.50},
    {nome: 'Arroz', qnt: 3, preco: 50.00},
    {nome: 'Café', qnt: 2, preco: 40.00},
    {nome: 'Geleia', qnt: 1, preco: 10.00},
    {nome: 'Manteiga', qnt: 2, preco: 10.00},
]

const getNomes = item => item.nome;
console.log(carrinho.meuMap(getNomes))

const getTotal = item => item.qnt * item.preco;
console.log(carrinho.meuMap(getTotal))