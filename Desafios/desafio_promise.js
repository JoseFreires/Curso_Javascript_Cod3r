// Neste desafio o objetivo era praticar pegar dados externos utilzando o Promise.

const fs = require('fs');
const path = require('path');



function lerArquivo(arquivo){
    return new Promise(leitor => {
        const caminho = path.join(__dirname, local = arquivo)

        fs.readFile(caminho, function(_, conteudo){
            leitor(conteudo.toString())
        })
        
    })
}

lerArquivo('dadosDesafio.txt')
    .then(console.log)