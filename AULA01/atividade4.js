// Leia o lado de um quadrado e calcule sua área. (Lembrando que a área é lado ao quadrado)

let lado = prompt('digite o valor do lado do quadrado')
// string --> number
lado = Number(lado)
let area = lado * lado
// operador de exponenciacao ** 
area = lado ** 2
alert('a área do quadrado de lado ' + lado + ' é ' + area)