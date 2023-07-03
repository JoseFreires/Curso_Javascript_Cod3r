// Neste arquivo é apresentado o Map, basicamente o Map serve para mapear dados, ele é utilizado bastante em 
// APIs para facilitar o consumo delas.
// No arquivo é mostrado várias formas de usar o Map com vários tipos de dados e formas de consumi-los e 
// altera-los

const nums = [7, 14, 21, 28, 35]
const dobrar = (n) => n * 2
const dobroMaisIndice = (n, i, a) => n * 2 + i
const dobroMaisIndiceMaisTamanho = (n, i, a) => n * 2 + i + a.length

console.log("Aqui o dobro",nums.map(dobrar));
console.log("Aqui o dobro e mais o indice",nums.map(dobroMaisIndice));
console.log("Aqui o dobro, mais o indice e mais o tamanho do array", nums.map(dobroMaisIndiceMaisTamanho));

const nomes = ['Januário', 'Otavio', 'Samuel', 'Eduardo']
const primeiraLetra = texto => texto[0]
const novoNome = nomes.map(primeiraLetra)

console.log(nomes, novoNome);

const carrinho = [
    {nome: 'Pães', qnt: 5, preco: 0.50},
    {nome: 'Arroz', qnt: 1, preco: 50.00},
    {nome: 'Café', qnt: 2, preco: 40.00},
    {nome: 'Geleia', qnt: 1, preco: 10.00},
    {nome: 'Manteiga', qnt: 2, preco: 10.00},
]