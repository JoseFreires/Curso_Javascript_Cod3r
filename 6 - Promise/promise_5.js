// Neste arquivo mostra como tratar um erro gerado de uma Promise.

function funcionaOuNao(valor, chanceErro){
    return new Promise((resolve, reject) => {
        try{
            con.log('pato')
            if(Math.random() > chanceErro){
                reject("deu ruim")
            } else{
                resolve(valor)
            }
        } catch(e) {
            reject(e)
        }
        
    })
}

funcionaOuNao("Testando...", 0.5)
    .then(v => `Valor: ${v}`)
    .then(
        v => console.log(v), 
        err=> console.log(`Errou aqui: ${err}`)
    )
    .then(() => console.log("Quase acabando..."))
    .catch(err => console.log(`Erro: ${err}`))
    .then(() => console.log("FIM"))