//FUNCOES ANONIMAS

//NORMALMENTE VARIÁVEIS QUE RECEBEM AS FUNÇÕES ANONIMAS

/*A FUNCAO ANONIMA CONSISTE EM TRES ETAPAS:

- SINTAXE () =>{}

    1º PARENTESES, QUE É ONDE A FUNÇÃO VAI RECEBER OS ARGUMENTOS (ASSIM COMO AS FUNÇÕES TRADICIONAIS)
    2º "SETA" => "ARROW" 
    3º CHAVES, DELIMITA O CORPO DA FUNÇÃO, ONDE RECEBERÁ OS ALGORITMOS.
*/

//FUNCAO CONVENCIONAL
function somar(a, b){
    let total = a + b
    return console.log(total);
}
somar(3,4)

//CRIANDO UMA FUNCAO ANONIMA DE SUBTRAIR
let subtrair = (a, b) =>{
    let resultado = a - b
    return console.log(resultado);   
}
subtrair(8,1)