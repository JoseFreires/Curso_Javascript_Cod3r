// Neste arquivo mostra uma forma de tratar dados utilizando o Promise.

function aleatory(min, max) {
    if(min > max){
        [max, min] = [min, max]
    }
    return new Promise(resolve => {
        const fator  = max - min + 1
        const resultado = parseInt(Math.random() * fator) + min
        resolve(resultado)
    })
}

aleatory(200, 30)
.then(num => num * 10)
.then(numX10 => `O número gerado foi ${numX10}` )
.then(console.log)