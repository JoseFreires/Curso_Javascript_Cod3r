// Neste arquivo é aprofundado um pouco do que se trata o "OO" e mostra formas de executar.

class Produto{
    constructor(nome, preco, desconto){
        this._nome = nome
        this.preco = preco
        this.desconto = desconto 
    }

    get nome(){
         return `Produto ${this._nome}`
    }

    set nome(novoNome){
        this._nome = novoNome.toUpperCase()
    }

    get preco(){
        return this._preco
    }

    set preco(precoCorreto){
        if (precoCorreto >= 0){
            this._preco = precoCorreto
        }
    }

    get precoFinal(){
        return this.preco * (1 - this.desconto)
    }
}

const p1 = new Produto('Motosserra', 19.90)
const p2 = new Produto('Batedeira', 24.99)

console.log(p1.nome)
console.log(p2.precoFinal)