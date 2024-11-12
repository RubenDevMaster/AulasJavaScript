// escreva apenas os pares de 1 até o número passado pelo usuário

let num = 1
//início do loop
let numeroUsuario = Number(prompt('digite um número'))
// 6
//condição final do loop

while (num <= numeroUsuario) {
// verificar se o número é par
    if (num % 2 == 0) {
        console.log(num)
    }
    num++   
    
}