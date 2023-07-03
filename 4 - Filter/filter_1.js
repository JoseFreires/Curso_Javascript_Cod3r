// Neste arquivo é apresentado o Filter que serve para filtrar dados para serem consumidos, 
// ele é bastante utilizado no consumo de APIs.

const carrinho = [
    {nome: 'Pães', qnt: 5, preco: 0.50},
    {nome: 'Arroz', qnt: 1, preco: 50.00},
    {nome: 'Café', qnt: 2, preco: 40.00},
    {nome: 'Geleia', qnt: 1, preco: 10.00},
    {nome: 'Manteiga', qnt: 2, preco: 10.00},
]

const maiorQueUm = item => item.qnt >= 2

const resultado = carrinho
    .filter(maiorQueUm)
    .map((item) => item.nome)

console.log(resultado);

