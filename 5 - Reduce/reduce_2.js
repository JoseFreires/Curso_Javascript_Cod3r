// Neste arquivo mostramos como funciona o Reduce de forma 'manual'.

const carrinho = [
    {nome: 'Pães', qnt: 5, preco: 0.50, fragil: true},
    {nome: 'Arroz', qnt: 1, preco: 50.00, fragil: false},
    {nome: 'Café', qnt: 2, preco: 40.00, fragil: true},
    {nome: 'Geleia', qnt: 1, preco: 10.00, fragil: false},
    {nome: 'Manteiga', qnt: 2, preco: 10.00, fragil: true},
]


Array.prototype.meuReduce = function(fn, inicial){
    let acc = inicial
    for(let i = 0; i < this.length; i++){
        if(!acc && i === 0){
            acc = this[i]
            continue
        }

        acc = fn(acc, this[i], i, this)
    }
    return acc
}

const totalFragil = 
carrinho.filter((item) => item.fragil)
        .map((item) => item.qnt * item.preco)
        .meuReduce((acc, el, i, array) => {
            const novaQtde = acc.qnt + 1
            const novoTotal = acc.total + el
            return{
                qnt: novaQtde,
                total: novoTotal,
                media : novoTotal/novaQtde
            }
        }, {qnt: 0, total: 0, media: 0})
            

console.log(totalFragil)