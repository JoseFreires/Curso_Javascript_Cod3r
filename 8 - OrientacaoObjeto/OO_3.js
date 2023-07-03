// Neste arquivo mostra como tratar as informações do Objeto, alterando dados do objeto ou 
// adicionando mais objetos.

function Produto(nome, preco, desconto = 0.15){
    this.nome = nome
    this.preco = preco
    this._desconto = desconto

    this.precoFinal = function() {
        return this.preco * (1 - this._desconto)
    }

}

Produto.prototype.log = function(){
    console.log(`Nome: ${this.nome} Preço: R$${this.preco} `)
}

Object.defineProperty(Produto.prototype, 'desconto', {
    get: function(){
        return this._desconto
    },
    set: function(novoDesconto){
        if(novoDesconto >= 0 && novoDesconto <= 1){
            this._desconto = novoDesconto
        }
    }
})

Object.defineProperty(Produto.prototype, 'descontoPorcentagem', {
    get: function(){
        return `${this._desconto * 100}% de desconto`
    }
})

const p1 = new Produto('Motosserra', 19.90)
console.log(p1.nome)
console.log(p1.preco)
p1.log()
console.log(p1.precoFinal())
console.log(p1.desconto)
console.log(p1.descontoPorcentagem)

const p2 = new Produto('Batedeira', 24.99)
console.log(p2.nome)
console.log(p2.preco)
p2.log()
console.log(p2.precoFinal())
console.log(p2.desconto)
console.log(p2.descontoPorcentagem)