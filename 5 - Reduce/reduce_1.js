// Neste arquivo é apresentado o Reduce, a função dele é pegar um array e transformar em apenas um valor, como
// acontece nesse simples código.

const carrinho = [
    {nome: 'Pães', qnt: 5, preco: 0.50},
    {nome: 'Arroz', qnt: 1, preco: 50.00},
    {nome: 'Café', qnt: 2, preco: 40.00},
    {nome: 'Geleia', qnt: 1, preco: 10.00},
    {nome: 'Manteiga', qnt: 2, preco: 10.00},
]

const totalSomado = carrinho.map((item) => item.qnt * item.preco).reduce((acc, el) => acc + el);
console.log(totalSomado)