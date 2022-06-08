const nomes = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'leo']

const sala_1 = nomes.slice(0,nomes.length/2) 
const sala_2 = nomes.slice(nomes.length/2)

console.log(`Alunos da sala 1: ${sala_1}`)
console.log(`Alunos da sala 2: ${sala_2}`)

// nomes.splice (1,2,'Rodrigo')
nomes.splice (2, 0, 'Rodrigo')

console.log(`A Lista de chamada ${nomes}`)


animaisDOAquario = ['baleia', 'polvo', 'golfinho', 'tubarão']

animaisDOAquario.splice (1,0,'Peixe')
animaisDOAquario.splice (3,2,'Peixinho')

console.log(animaisDOAquario)