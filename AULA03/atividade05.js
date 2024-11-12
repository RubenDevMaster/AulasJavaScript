// leia a nota de n alunos e mostre a média

let nAlunos = Number(prompt('Digite a quantidade de notas a serem lidas'))
// número final do laço

let somaNotas = 0
// acumuladora

for(let i = 1; i <= nAlunos; i++){
    somaNotas += Number(prompt(`Digite a ${i}ª nota: `))
}

let media = somaNotas/nAlunos

console.log( `Para as ${nAlunos} notas, foi obtida a média : ${media}`)


