// Implemente uma aplicação simples que simule as operações básicas de uma conta bancária. 
let saldo = 1000
let divida = false
let emprestimo = 0


let escolha =  Number(prompt('Escolha uma operação: \n (1) saque \n (2) depósito \n (3) empréstimo \n (4) extrato'))
// numero - para numero ( 0 até infinito)
// string - para NUMERO (NaN)

switch (escolha) {
    case 1:
        alert('Opção escolhida: saque')
        let saque = Number(prompt('digite o valor do saque'))
        
        if(saldo < saque){
            alert('Saldo insuficiente')
        }
        else{
            // saldo ou igual a saque
            alert('Saque realizado com sucesso')
            saldo -= saque
            // saldo = saldo - saque
        }
                      
        break;
    case 2:
        alert('Opção escolhida: depósito')
        let deposito = Number(prompt('digite o valor do depósito'))
        saldo += deposito
        alert('Depósito realizado com sucesso')        
        break;
    case 3:
        if(divida == false){
            let emprestimo = Number(prompt('digite o valor do empréstimo'))
            saldo += emprestimo
            divida = true
        }
        else{
            alert('Um emprestimo ja foi realizado. É necessário pagar o empréstimo para realizar um novo empréstimo')
        }
        break;
    case 4:
        alert('Saldo: ' + saldo + '\n Divida: ' + divida + '\n Saldo devedor: ' + emprestimo)        
        break;
    default:
        alert('Opção inválida. Reinicie a aplicação')
        break;
} 



//  A aplicação deve ter as seguintes funcionalidades: 
//  saque (1)
//       vai subtrair o valor do saque do saldo
//  depósito (2)
//       vai adicionar o valor  ao saldo
//  empréstimo (3)
//       trocar o booleano da divida, caso seja FALSE, o usuario vai poder realizar o empréstimo. Será adicionadoo valor do empréstimo ao saldo e colocado como negativo no emprestimo
//  extrato (4)
//       mostrar o saldo e as dividas da conta


// Use uma estrutura switch case para controlar o menu de operações e implemente a lógica de cada função conforme ação do usuário