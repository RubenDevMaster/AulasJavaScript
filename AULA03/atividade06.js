// 10 números 
// verificar quantos estão entre 30 e 90


let contador = 0
let acumulador = 0

for(let i = 1; i <= 10; i++){
    let num= Number(prompt(`Digite o ${i}º número `))

    if(num>=30 && num<=90){
        contador+=1
        console.log(num)
    }

    acumulador+=num
}

console.log(`Para os 10 números digitados existem ${contador} números entre 30 e 90`)
console.log(`A soma de todos os números digitados é ${acumulador}`)