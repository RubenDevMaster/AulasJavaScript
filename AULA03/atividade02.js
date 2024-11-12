// Implemente uma aplicação simples que simule as operações básicas de uma conta bancária. 
let saldo = 1000
let divida = false
let emprestimo = 0
let senha = '2024digital'

// verifique se o usuário digitou a senha correta antes de mostrar as opções
// enquanto a senha não estiver correta, solicitar a senha ao usuário
alert('Bem vindo ao simulador de conta')
let senhaDigitada = prompt('digite sua senha')

// operadores de comparação
// == igual
// != diferente
// > maior que
// < menor que
// >= maior ou igual
// <= menor ou igual
// retorna true ou false

while(senha != senhaDigitada){
    alert('Senha inválida. Tente novamente')
    senhaDigitada = prompt('digite sua senha')
}
let escolha =  Number(prompt('Escolha uma operação: \n (1) saque \n (2) depósito \n (3) empréstimo \n (4) extrato'))

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

