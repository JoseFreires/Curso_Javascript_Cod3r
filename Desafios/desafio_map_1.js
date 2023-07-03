// Neste desafio serve para praticar o consumo de dados com o Map.

const carrinho = [
    {nome: 'Pães', qnt: 10, preco: 0.50},
    {nome: 'Arroz', qnt: 3, preco: 50.00},
    {nome: 'Café', qnt: 2, preco: 40.00},
    {nome: 'Geleia', qnt: 1, preco: 10.00},
    {nome: 'Manteiga', qnt: 2, preco: 10.00},
]

const getNomes = item => item.nome;
console.log(carrinho.map(getNomes))

const getTotal = item => item.qnt * item.preco;
console.log(carrinho.map(getTotal))