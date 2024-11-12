// teste se o usuário tem 18 anos ou mais
// let idade = prompt('Quantos anos vocé tem?')
// idade= Number(idade)

// se tiver  18 anos ou mais, mostre a mensagem 'maior de idade e poderá dirigir'
if(idade >= 18){
    console.log('maior de idade')
    let habilitacao = confirm('possuir habilitação para dirigir?')
    if(habilitacao){
        console.log('pode dirigir')
    }
    else{
        console.log('nao pode dirigir')
    }
}
else{
    console.log('menor de idade')
}

// se tiver menos de 18 anos, mostre a mensagem 'menor de idade'


