const salaPython = ['melissa', 'helena', 'rodrigo']
const salaJavaScript = ['juliana', 'leo', 'raquele']

const salaJunta = salaPython.concat(salaJavaScript)
console.log(salaJunta)

const alunos = ['joão', 'juliana', 'caio', 'ana']
const mediaDosAlunos = [10,7,9,6]

let listaDeNotasEAlunos = [alunos, mediaDosAlunos]
console.log(`${listaDeNotasEAlunos[0][0]}, sua media é ${listaDeNotasEAlunos[1][0]}`)
console.log(`${listaDeNotasEAlunos[0][1]}, sua media é ${listaDeNotasEAlunos[1][1]}`)
console.log(`${listaDeNotasEAlunos[0][2]}, sua media é ${listaDeNotasEAlunos[1][2]}`)
console.log(`${listaDeNotasEAlunos[0][3]}, sua media é ${listaDeNotasEAlunos[1][3]}`)

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][indice] + ',sua média é ' + listaDeNotasEAlunos[1][indice]
    }else {
        return "Aluno não está cadastrado"
    }
}

console.log(exibeNomeNota("Juliana"))