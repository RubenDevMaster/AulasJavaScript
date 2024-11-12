// quando precisamos comparar valores
// == igual
// != diferente
// > maior
// < menor
// >= maior ou igual

// testar como o café do usuário vai ser feito

// opções: cafeteira, filtro e café solúvel

let escolha = 'café marroquino'

if (escolha == 'cafeteira') {
    // cafeteira
    console.log('O café do usuário está sendo feito na cafeteira')

}
else if (escolha == 'filtro') {
    // filtro
    console.log('O Café do usuario esta sendo feito no filtro')
    console.log('Após usar, limpe o filtro :)')

}
else if( escolha == 'café solúvel') {
    // soluvel
    console.log('O café do usuário já está pronto. Ele escolheu o café de preguiçoso')
}
 else {
    //condição final
    console.log('O usuário não escolheu nenhuma opção válida. Não vai tomar café :)')
}
