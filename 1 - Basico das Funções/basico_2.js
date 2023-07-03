// Neste arquivo é explorado como invocar funções e de como utiliza-las ao seu favor, 
// além de também apresentar cálculos simples que podem ser feitos com função dentro de função.

function dattebayou() {
	console.log("Naruto!")
}

const tidori = function (){
	console.log("Sasuke!")
}

function executa(fn){
	if(typeof fn === 'function') {
		fn()
	}
}

executa(dattebayou);
executa(tidori);

// 2)

function potencia(base) {
	return function(exp){
		return Math.pow(base, exp)
	}
}

const potencia2 = potencia(2)
console.log(potencia2(8))

console.log(potencia(3)(95))