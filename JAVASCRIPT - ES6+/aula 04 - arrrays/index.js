//OPERACOES COM ARRAY

//1º UTILIZANDO O MAP = PERCORRENDO O ARRAY E REALIZANDO ALGUMA AÇÃO. ELE É BEM PARECIDO COM O FOR
//O MAP RECEBE UM CALLBACK, UMA FUNÇÃO EXTERNA OU INTERNA. PODEMOS UTILIZAR AS arrowFunction 
//ELE RECEBE DOIS PARAMETROS, O INDICE DA VEZ E O INDEX (POSICAO)

/*
let lista = ['Pedro', 'Lucas', 'Ribeiro']

lista.map((item, index) => {
    console.log(`Passando: ${item}, ${index}`);
})
*/

//REDUCE - BUSCA REDUZIR UM ARRAY. REALIZANDO OPERACOES COM ELE DE CONTAS EM GERAL.
//O REDUCE RECEBE QUATRO PARÂMETROS, ACUMULADOR, NUMERO, INDICE E O ORIGINAL

let numeros = [5,3,2]

//SOMAR TODDOS OS NUMEROS
let soma = numeros.reduce((acumulador, numero, indice, original)=>{
    console.log(`${acumulador} - total até o momento`); //TOTAL ATÉ O MOMENTO, SOMA DE TODOS OS VALORES
    console.log(`Numero: ${numero} - valor atual`); //VALOR ATUAL QUE ESTÁ PASSANDO
    console.log(`Indice: ${indice} - indice atual`); //INDICE É A POSIÇÃO DO ELEMENTO
    console.log(`Original: ${original} - é o array original`);//É O ARRAY
    console.log('----------------------------------------------');

    return acumulador += numero
})
