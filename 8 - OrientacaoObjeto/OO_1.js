// Neste arquivo é apresentado o que é Orientação ao Objeto no Javascript de forma básica.

function Produto(nome, preco, desconto = 0.15){
    this.nome = nome
    this.preco = preco
    this.desconto = desconto

    this.precoFinal = function(){
        return this.preco * (1 - this.desconto)
    }

}

const p1 = new Produto('Motosserra', 19.90)
const p2 = new Produto('Batedeira', 24.99)

console.log(p1.nome)
console.log(p2.precoFinal())
