// mostre todos os número pares de 1 até 89
// ao final do loop mostre a quantidade de pares do intervalo
// incrementando de 1 em 1


let contadorPares = 0
// conta a quantidade de vezes que uma situação aconteceu no loop
let acumulador = 0


for(let n = 1; n <= 89; n++){
    if(n % 2 == 0){
        console.log(n)
        contadorPares += 1
    }
    else{
        // mostrando a soma de todos os números ímpares
        acumulador+=n
    }
}
console.log(`Dentro do intervalo de 1 a 89 existem ${contadorPares} pares
     `)
console.log(`A soma de todos os ímpares é ${acumulador}`)

