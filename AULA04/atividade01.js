// 17) Elabore um programa que faça leitura de vários números inteiros, até que se digite um número negativo. O programa tem que retornar o maior e o menor número lido.

let numUser = Number(prompt('digite um número'))

let maior = numUser
let menor = numUser

while (numUser >= 0) {
    // atualizar o maior
  
    if (numUser >= maior) {
        maior = numUser
    }
    else if (numUser <= menor){
        menor = numUser
    }

    numUser = Number(prompt('digite um número')) 
}
console.log('O usuário digitou um número negativo')
console.log('Maior: ' + maior)
console.log('Menor: ' + menor)


// INTERVALO 
// VAMOS VOLTAR DE 20:15 :)
