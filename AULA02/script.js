// testar se o usuário respondeu sim

// ok -> true
// cancel -> false

let resposta = confirm('Você é aluno da turma Live 05?')

console.log(resposta)

if(resposta){ 
    // se true
    console.log('Você é aluno da melhor turma da Digital College')
}
else{
    // se false
    console.log(' Vocé não é aluno da turma Live 05. Vocé precisa estudar mais!')
}