let numeroUsuario = Number(prompt('digite um número'))

// declaração e atribuição de valor do iterador -> aquele que controla o loop
// condição de parada - teste lógico
// a forma de incrementar o iterador -> incremento

for (let n=1; n<=10; n++) {
    console.log(` ${n} x ${numeroUsuario} = ${n * numeroUsuario} `)      
}
console.log('tabuada finalizada')