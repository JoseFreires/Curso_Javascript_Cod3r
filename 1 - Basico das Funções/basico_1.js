// Nesse arquivo é mostrado algumas formas de criar funções no Javascript e de como chama-lás, 
// também é mostrado como elas funcionam.

// Function Declaration 
function bomDia() {
	console.log('Bom dia')
};

bomDia();

// Function expression
const fala = function () {
	console.log("O que vc quer?")
};

fala();

function somando(a = 0, b = 0){
	return a + b
}

let resultado = somando(1, 2);
console.log(resultado)

resultado = somando(5, 25, 8, 7);
console.log(resultado)

resultado = somando(1);
console.log(resultado)

