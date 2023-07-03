// Neste arquivo é mais uma forma de mostrar como funciona uma Promise e como manipular utilizando tempo.

// Nesta função recebe os parâmetros da função 'geradorDeNumeros' e gera números aleatórios baseado 
// nos parâmetros.
function aleatory(min, max, tempo) {
    if(min > max) [max, min] = [min, max]
    
    return new Promise(resolve => {
        setTimeout(function() {
            const fator  = max - min + 1
            const resultado = parseInt(Math.random() * fator) + min
            resolve(resultado)
        }, tempo)
    })

}

// Nesta função gera números aleatórios baseado nos parâmetros que são enviados para a função 'aleatory'.
function geradorDeNumeros(){
    return Promise.all([
        aleatory(1, 60, 1000),
        aleatory(1, 60, 500),
        aleatory(1, 60, 3000),
        aleatory(1, 60, 10000),
        aleatory(1, 60, 1500),
        aleatory(1, 60, 100),
        aleatory(1, 60, 5000),
    ])
}

console.time("promise")

// Nesta função mostra os números gerados e o tempo que demorou.
geradorDeNumeros()
    .then(numeros => console.log(numeros))
    .then(() => {
        console.timeLog("promise")
        console.timeEnd("promise")
    })