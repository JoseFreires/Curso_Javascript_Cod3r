// Neste arquivo é apresentado a 'Arrow Function' e o 'This', ambos com exemplos e forma de aplicar 
// em situações reais.


// arrow function

const meNamora = () => console.log('Bora namo?')
meNamora()

const salve = mano => `Salve, meu ${mano} !!!`
console.log(salve('Luiz'))

const somador = (...numbers) => {
    console.log(Array.isArray(numbers))
	let total = 0
	for (let n of numbers) {
		total += n
	}
	return total
}
console.log(somador(1, 5))
console.log(somador(1, 5, 7, 7))
console.log(somador(1, 5, 7, 7, 4, 10))

// Atividade Arrow Function

const potencia = base => exp => Math.pow(base, exp) 


console.log(potencia(5)(3))


// this
Array.prototype.ultimo = function(){
	console.log(this[this.length - 1])
}

const numeros = [1, 2, 3, 4, 5]
numeros.ultimo()

// this (Não funciona com arrow Function)
Array.prototype.primeiro = () => {
	console.log(this[0])
}

const numbers = [1, 2, 3, 4, 5]
numeros.primeiro()