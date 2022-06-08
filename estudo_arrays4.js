const numeros = [100,200,300,400,500,600]
for (let i = 0; i < numeros.length; i++){
    console.log(i,numeros[i])
}

const notas = [10,6.5,8,7.5]
const notas2 = [9,6,6]
const notas3 = [8.5,9.5]

const notasGerais = [notas,notas2,notas3]

let media = 0

for (i = 0; i < notasGerais.length; i++){
    for (let j = 0; j < notasGerais[i].length; j++){
        media += notasGerais[i][j]/notasGerais[i].length
    }   
}

media = media/notasGerais.length

console.log(media)
    
// for (let i = 0; i < notas.length; i++){
//     somaDasNotas += notas[i]

// }


// notas.forEach (nota => {
//     somaDasNotas += nota
// })

// let media  = somaDasNotas/notas.length
// console.log(`A média é: ${media}`)



const nomes = ['ana Julia','Caio vinicius','BIA silva']
const nomesAtualizados = nomes.map(nome => nome.toUpperCase())

console.log(nomesAtualizados)


// nomes.forEach(imprimeNomes) 

// function imprimeNomes (nome){
//     console.log(nome)
// }


// const notasN = [10,9,8,7,6]
// const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota )

// console.log(notasAtualizadas)
