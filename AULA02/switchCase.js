let turno= 'Manhã'

turno = turno.toLowerCase()

// manhã, tarde, noite

switch (turno) {
 case 'manhã':
    console.log('bom dia')
    break
 case 'tarde' :
    console.log('boa tarde')
    break
 case 'noite':
    console.log('boa noite')
    break
 default:
    console.log('valor inválido')
}


