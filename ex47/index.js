let nome = prompt('digite o nome')
let nota1 = parseFloat(prompt('digite o valor da nota 1'))
let nota2 = parseFloat(prompt('digite o valor da nota 2'))
const media = (nota1 + nota2)/2

if (nota1 > 10 ||  nota2 > 10 || nota1 < 0 || nota2 < 0 ) {
    document.write('ERRO')
}else{
    if (media > 7) {
        document.write(`Nota 1 = ${nota1}<br>Nota 2 = ${nota2}<br>Media: ${media}<br>Aluno Aprovado`)
    } else if(media < 5){
        document.write(`Nota 1 = ${nota1}<br>Nota 2 = ${nota2}<br>Media: ${media}<br>Aluno Retido`)
    } else {
        document.write(`Nota 1 = ${nota1}<br>Nota 2 = ${nota2}<br>Media: ${media}<br>Aluno em Recuperação`)
    }
}
