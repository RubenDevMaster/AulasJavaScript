let A = Number(prompt('Digite o primeiro número: '))
let B = Number(prompt('Digite o segundo número: '))

// valor A  == B somar os dois
// caso contrário, valor A != B A*B

// Faça um algoritmo que leia dois valores inteiros A e B. Se os valores forem iguais deverá se somar os dois, caso contrário, multiplique A por B.

if (A == B) {
    console.log(' Os dois números são iguais. São somados: ' + (A + B))    
}
else {
    console.log(' Os dois números não são iguais. Eles multiplicados: ' + (A * B))    
}

// verificar se uma variável guarda um NaN
// isNaN

if (isNaN(A) || isNaN(B)) {
    console.log(' Vocé digitou uma palavra. Digite um número.')
}

// correção da atividade de 20:40 :)