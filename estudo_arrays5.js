const nomes = ['Ana','Marcos ','Maria','Mauro']
const notas = [7,4.5,8,7.5]

const reprovados = nomes.filter ( (aluno, indice) => notas[indice]<5)

console.log(`Os reprovados são: ${reprovados}`)

const salaJS = [7,8,8,7,10,6.5,4,10,7]
const salaJava = [6,5,8,9,5,6] 
const salaPython = [7,3.5,8,9.5]

function mediaSala (notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acum, atual) => atual + acum,0 )
    return somaDasNotas/notasDaSala.length
}


console.log(`Média da sala de javascrip ${mediaSala(salaJS)}`)
console.log(`Média da sala de java ${mediaSala(salaJava)}`)
console.log(`Média da sala de Python ${mediaSala(salaPython)}`)


const notasAntigas = [10,6.5,8,7.5]
const mediaAntiga = notasAntigas.reduce((acum, atual) => atual + acum,0)/notasAntigas.length

console.log(mediaAntiga)

const numeros = [43,50,65,12]
const soma = numeros.reduce((acum, atual) => atual + acum,0)

console.log(soma)