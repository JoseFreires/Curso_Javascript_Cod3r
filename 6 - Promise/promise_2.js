// Neste arquivo é usado Promise para mostrar uma maneira mais simples de executar vários funções cronometradas.

function escolhiEspera(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(function (){
            console.log("Executando....")
            resolve()
        }, tempo)
    })   
}

escolhiEspera()
    .then(() => escolhiEspera())
    .then(escolhiEspera)