// Neste arquivo é novamente mostrado o 'Callback', mas também é apresentado uma forma de ler arquivos externos.

const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, 'dados.txt')

exibirConteudo = (err, dados) => {
    console.log(dados.toString())
}

fs.readFile(caminho, {}, exibirConteudo)
fs.readFile(caminho, {}, (_, dados) => console.log(dados.toString()))


console.log("Começou...")
const data = fs.readFileSync(caminho)
console.log(data.toString())
console.log("Terminou...")