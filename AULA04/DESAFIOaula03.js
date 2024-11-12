
// 1º DESAFIO

// Leia o preço de um produto e a cor da sua etiqueta. De acordo com a cor da etiqueta aplique um desconto sobre o produto.
// Verde - 10% | Amarelo - 20% | Azul - 30 % | Vermelho 40% (switch case)

let preco = Number(prompt('Digite o preco do produto'))
let corEtiqueta = prompt('Digite a cor da etiqueta:\n VERDE | AMARELO | AZUL | VERMELHO')
corEtiqueta = corEtiqueta.toUpperCase()

// e && -> duas condições verdadeiras ao mesmo tempo
// ou || -> uma condição verdadeira ou outra

// !verde ou !amarelo ou !azul ou !vermelho

// ||

while( corEtiqueta != 'VERDE' && corEtiqueta != 'AMARELO' && corEtiqueta != 'AZUL' && corEtiqueta != 'VERMELHO') {
    corEtiqueta = prompt('A cor digitada é inválida. Digite uma cor de etiqueta válida:\n VERDE | AMARELO | AZUL | VERMELHO').toUpperCase()
    console.log('eu estou dentro do loop')    
}


switch (corEtiqueta) {
    case 'VERDE':
        preco = preco * 0.9
        console.log(preco)
        console.log(`10% de desconto aplicado! O novo valor é ${preco.toFixed(2)} `)
        break
    case 'AMARELO':
        preco = preco * 0.8
        console.log(preco)
        console.log(`20% de desconto aplicado! O novo valor é ${preco.toFixed(2)} `)
        break
    case 'AZUL':
        preco = preco * 0.7
        console.log(preco)
        console.log(`30% de desconto aplicado! O novo valor é ${preco.toFixed(2)} `)
        break
    case 'VERMELHO':
        preco = preco * 0.6
        console.log(preco)
        console.log(`40% de desconto aplicado! O novo valor é ${preco.toFixed(2)} `)
        break
    default:
        console.log('cor inválida')
        console.log(`O valor do produto é ${preco.toFixed(2)} sem desconto aplicado`)
    
}

// Resolva o problema de inserção de uma cor de etiqueta que não existe na loja. Garanta que o usuário só irá digitar Verde, Amarelo, Azul ou Vermelho. Enquanto o usuário não digitar um valor válido para etiqueta, informe que ele digitou um valor inválido e peça novamente a cor da etiqueta.
// (laço de repetição)


