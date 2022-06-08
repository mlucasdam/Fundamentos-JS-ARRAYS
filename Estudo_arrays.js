let nota1 = 10;
let nota2 = 6.5;
let nota3 = 8;
let nota4 = 7.5;
let media = (nota1 + nota2 + nota3 + nota4)/4

console.log(media)

const notas = [10,6.5,8,7.5]
let media_nova = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length

console.log(media_nova)

const notas_novas = [10, 6, 8]
notas_novas.push(7)
console.log(notas_novas)

let outra_media = (notas_novas[0] + notas_novas[1] + notas_novas[2] + notas_novas[3])/notas_novas.length
console.log(outra_media)

const outra_nota = [10, 7, 8, 5, 10]
outra_nota.pop()
console.log(outra_nota)

let mais_media = (outra_nota[0] + outra_nota[1] + outra_nota[2] + outra_nota[3])/outra_nota.length
console.log(`A média é ${mais_media}`)

JantarDeHoje = ['hamburguer', 'hot dog', 'pizza']

JantarDeHoje.pop()
JantarDeHoje.pop()

JantarDeHoje.push('Ovo frito')
JantarDeHoje.push('salada')
JantarDeHoje.push('Maçã')

console.log(JantarDeHoje)