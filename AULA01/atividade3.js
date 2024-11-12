// let nota1 = Number(prompt('Digite a primeira nota: '))
// let nota2 = Number(prompt('Digite a segunda nota: '))
// let nota3 = Number(prompt('Digite a terceira nota: '))
// let media = (nota1 + nota2 + nota3)/ 3
// alert('A média das notas inseridas é ' + media)

let somaNotas = null
let media = null

somaNotas = Number(prompt('digite a primeira nota'))
somaNotas += Number(prompt('digite a segunda nota'))
somaNotas += Number(prompt('digite a terceira nota'))

media = somaNotas / 3
alert('sua media e ' + media)