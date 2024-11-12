// calcular a área de um circulo recebendo o raio

let raio = prompt('digite o valor do raio do circulo')

raio = Number(raio)
let area = 3.14 * raio ** 2
// refazendo com o Math.PI
area = Math.PI * raio **2
// alert('a área do circulo de raio ' + raio + ' é ' + area.toFixed(2))
console.log('a área do circulo de raio ' + raio + ' é ' + area.toFixed(2))
console.log(area)

// numeros