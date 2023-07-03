// Neste desafio o intuito era praticar como funciona as funções no Javascript.

// Desafio 1: Somar todos os valores que forem recebidos.

function somar(a){
    return function (b){
        return function (c) {
            return a + b + c
        }
    } 
};

const resultadoSoma = somar(7)(14)(21);
console.log(resultadoSoma);

// Desafio 2: Fazer uma calculadora com várias funções

function multiplicador(z, x) {
    return z * x
}

function divisor(z, x) {
    return z / x
}

function diminuir(z, x) {
    return z - x
}


function calcular(a){
    return function (b){
        return function (fn){
            return fn(a, b)
        }
    }
}

const resultadoMultiplica = calcular(5)(2)(multiplicador);
console.log(resultadoMultiplica);
const resultadoDivisor = calcular(8)(2)(divisor);
console.log(resultadoDivisor);
const resultadoDiminuir = calcular(7)(2)(diminuir);
console.log(resultadoDiminuir);
