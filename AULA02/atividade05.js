// Peça dois números ao usuário
let num1 = Number(prompt('digite um número'))
let num2 = Number(prompt('digite outro número'))


// peça um caracter (+ , - , / , *) que sera usado na operação
let operacao = prompt('digite um operador: \n (+ para soma \n - subtração \n  / para divisão \n  * para multiplicação)')


//mostre o resultado da operação no console

//caso o usuário digite um caracter inválido, mostre uma mensagem informando que o caractere é inválido e reinicie o programa

// caso seja escolhida a divisão, você deverá avaliar se o número 2 é diferente de 0. Caso seja 0 mostre uma mensagem informando que o divisor não pode ser 0
if ( isNaN(num1) || isNaN(num2) ) {
    console.log(' Vocé digitou uma palavra. Reinicie a aplicação e digite apenas números.')
}
else{
    switch (operacao) {
        case '+':
            console.log('A soma dos dois números e: ' + (num1 + num2))
            break
        case '-':
            console.log('A subtração dos dois números e: ' + num1 - num2)
            break
        case '/':
            if (num2 == 0) {
                console.log('Não é possível realizar uma divisão por 0')
            }
            else {
                console.log('A divisão dos dois números e: ' + num1 / num2)
            }
            break
        case '*':
            console.log(num1 * num2)
            break
        default:
            console.log('operador inválido')
    }
    
}

