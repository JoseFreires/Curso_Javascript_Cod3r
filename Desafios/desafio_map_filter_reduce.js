// Neste desafio tinha condições que precisavam serem cumpridas e era necessário o uso do Filter, Map e Reduce.

const carrinho = [
    {nome: 'Pães', qnt: 5, preco: 0.50, fragil: true},
    {nome: 'Arroz', qnt: 1, preco: 50.00, fragil: false},
    {nome: 'Café', qnt: 2, preco: 40.00, fragil: true},
    {nome: 'Geleia', qnt: 1, preco: 10.00, fragil: false},
    {nome: 'Manteiga', qnt: 2, preco: 10.00, fragil: true},
]

// 1. Aqueles que fragil é true
// 2. Juntar quantidade e preço
// 3. Fazer a média deles

const totalFragil = 
carrinho.filter((item) => item.fragil)
        .map((item) => item.qnt * item.preco)
        .reduce((acc, el, i, array) => {
            const novaQtde = acc.qnt + 1
            const novoTotal = acc.total + el
            return{
                qnt: novaQtde,
                total: novoTotal,
                media : novoTotal/novaQtde
            }
        }, {qnt: 0, total: 0, media: 0})
            

console.log(totalFragil)