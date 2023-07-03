// Neste arquivo é apresentado um novo exemplo de como usar o Async e o Await.

function aleatory(min, max, numerosProibidos) {
    if(min > max) [max, min] = [min, max]

    return new Promise((resolve, reject) => {
        const fator  = max - min + 1
        const resultado = parseInt(Math.random() * fator) + min
        if(numerosProibidos.includes(resultado)) {
            reject("Não pode!")
        } else {
            resolve(resultado)
        }
    })
}

async function MegaSena(qntNumeros, tentativas = 0){
    const numeros = []
    try{
        for (let _ of Array(qntNumeros).fill()){
            numeros.push(await aleatory(1, 60, numeros))
        }
        return numeros
    } catch(e){
        if(tentativas >= 10){
            throw "Tentativas máximas!"
        } else {
            return MegaSena(qntNumeros, tentativas + 1)
        }
        
    }
}

MegaSena(15).then(console.log).catch(console.log)