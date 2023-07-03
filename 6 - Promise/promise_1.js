// Neste arquivo é apresentado o Promise que é "a promessa de que algum valor vai ser recebido". É mostrado
// de forma simples como funciona a idéia do Promise.

const primeiroNome = arrayOuString  => arrayOuString[0]

const letraMini = letra => letra.toLowerCase()

new Promise(function (cumprirPromise)  {
    cumprirPromise(["Jessica", "Taylor", "Joseph", "Maria"])
}).then(primeiroNome).then(primeiroNome).then(letraMini).then(console.log)