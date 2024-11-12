//2º DESAFIO

// Uma loja tem uma política de descontos de acordo com o valor da compra do cliente. 
// Os descontos começam acima dos R$500 A cada 100 reais acima dos R$500,00 o cliente ganha 1% de desconto cumulativo até 25%. 
// Por exemplo: R$500 = 1% || R$600,00 = 2% ... etc...
// Faça um programa que exiba essa tabela de descontos no seguinte formato:
// Valordacompra - porcentagem de desconto - valor final


// interrupção de loop------> desconto de + de 25%

// incremento em:
//valor da compra ----->500 inicial e acrescenta 100 a cada 1% de desconto
let valorDaCompra = 500
//percentual do desconto -----> 1% e vai até 25%

let descontoMaximo = 25

for(let percentualDesconto = 1; percentualDesconto <= descontoMaximo; percentualDesconto++) {
    console.log(`R$ ${valorDaCompra} = ${percentualDesconto}%`)
    valorDaCompra += 100
}