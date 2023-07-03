// Neste arquivo é mostrado de forma dissecada como funciona o Filter.

const carrinho = [
    {nome: 'Pães', qnt: 5, preco: 0.50},
    {nome: 'Arroz', qnt: 1, preco: 50.00},
    {nome: 'Café', qnt: 2, preco: 40.00},
    {nome: 'Geleia', qnt: 1, preco: 10.00},
    {nome: 'Manteiga', qnt: 2, preco: 10.00},
]

Array.prototype.meuFiltro = function(fn){
    const novoFiltro = []

    for(let i = 0; i < this.length; i++){
        if(fn(this[i], i, this)){
            novoFiltro.push(this[i])
        }
    }

    return novoFiltro;
}

const resultado2 = carrinho
    .meuFiltro((item) => item.qnt >= 1)
    .map((item) => item.nome)

console.log(resultado2);