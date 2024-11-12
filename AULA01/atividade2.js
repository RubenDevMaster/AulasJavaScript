// Leia o salário de um funcionário e exiba o novo salário deste funcionário com um aumento de 20%

let salario = prompt('Qual o valor do seu salário? Apenas números')
// convertendo o valor de string para number
salario = Number(salario) //numeros por extenso serão convertidos para NaN
console.log('salário antes do aumento de 20%: ' + salario)

// salario =  salario * 1.2
salario *= 1.2
// salario = salario + (salario * (20/100))
// salario += (salario * (20/100))

console.log('salário depois do aumento de 20%: ' + salario)