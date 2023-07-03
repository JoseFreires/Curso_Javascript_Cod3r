// Neste arquivo é apresentado o Callback que é quando uma função é passada para outra função com argumento
// que depois é invocada em outra função externa (bem complicado de falar, mas não de entender visualmente kk).
// Também é apresentado o setInterval(), uma função que em um tempo determinado realiza o que for 
// necessário.

function exec(fn, a, b) {
	fn(a, b)
}

const somando = (x, y) => console.log(x + y)
const subtraindo = (c, d) => console.log(c - d)

exec(somando, 55, 22)
exec(subtraindo, 121, 5)

setInterval(() => {
    console.log("Oi")
}, 5000)