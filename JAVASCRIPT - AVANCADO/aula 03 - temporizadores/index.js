//setInterval

function acao(){
    document.write('Executando... <br/>')
}
setInterval(acao, 1000); //RECEBE DOIS PARAMETROS: 1º FUNCAO QUE QUEREMOS CHAMAR, 2º TEMPO EM MILISEGUNDOS
// ACIMA, ELE FOI EXCECUTANDO NA TELA A AÇÃO DE FICAR ESCREVENDO NA TELA DE UM EM UM SEGUNDO.

//PODEMOS UTILIZAR O setInterval COM FUNÇÕES ANONIMAS:
setInterval(()=>{
    document.write('FAAAAAAAAAAAALA <br/>')
}, 1000)

//PODEMOS PARAR O SET INTERVAL APENAS QUANDO ATRIBUIMOS ELE A UMA VARIÁVEL, E CHAMARMOS UMA FUNÇÃO PARA A VARIÁVEL:
//clearInterval(VARIAVEL QUE TEM O setInterval)
var time = setInterval(()=>{
    document.write('Interval... <br/>')
}, 1000)

clearInterval(time) //ELE PARA INSTANTANEAMENTE*/

setTimeout
setTimeout(()=>{
    document.write('Realizando o setTimeout')
}, 3000) //REALIZA APENAS UMA VEZ EM TRÊS SEGUNDOS.*/

