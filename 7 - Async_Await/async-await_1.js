// Neste arquivo é apresentado o Async e o Await, eles são utilizados em funções assíncronas que são funções que 
// funcionam de forma conjunta e dependendo do resultado uma da outra.

function escolhiEspera(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(function (){
            console.log("Executando....")
            resolve("Bro, faz sol")
        }, tempo)
    })   
}


function retornaValor(){
    return new Promise(resolve =>{
        setTimeout(() => resolve(10), 6000)
    })
}

async function executar(){
    let valor = await retornaValor()

    await escolhiEspera(1800)
    console.log(`${valor}`)

    await escolhiEspera(1800)
    console.log(`${valor + 1}`)

    await escolhiEspera(1800)
    console.log(`${valor + 2}`)

    return valor + 3
}

async function executaMesmo() {
    const resposta = await executar()
    console.log(resposta)
}


executaMesmo();