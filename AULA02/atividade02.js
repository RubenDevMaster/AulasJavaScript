// quando precisamos comparar valores
// == igual
// != diferente
// > maior
// < menor
// >= maior ou igual
// % modulo ( resto da divisão inteira)

// 5 dividido por 2 = 2.5

// console.log(5/2 + " divisão simples") 
// console.log(5%2 + " modulo da divisão (resto da divisão inteira)")
let num = prompt('digite um numero')
num = Number(num)

// peça um número ao usuário e teste se ele é par ou impar
if (num % 2 == 0) {
    console.log('par')
}
else if (num % 2 === '1') {
    console.log('ímpar')
}
else{
    console.log('Você digitou uma palavra. Digite um número.')
}