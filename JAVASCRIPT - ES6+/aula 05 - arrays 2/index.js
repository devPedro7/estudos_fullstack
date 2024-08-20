//OPERAÇÕES COM ARRAY

//FIND - BUSCAR ALGO NO ARRAY E ELE DEVOLVE O PRIMEIRO ITEM QUE ELE ENCONTRAR.
/*let listagem = [5,6,7,'Pedro', 'Lucas']

let buscar = listagem.find((item)=>{//O FIND RECEBE POR PARAMETRO O ITEM QUE ESTÁ SENDO PASSADO

    if(item === 'Pedro'){
        console.log('Você encontrou o item ' + item);
    }
    else{
        console.log('O item que você solicitou não está na listagem');
    }
})

console.log(buscar);
*/

//FILTER - ELE FILTRA E SELECIONA O QUE VOCÊ FILTROU, ELE RETORNA TUDO O QUE ELE ENCONTRAR DE ACORDO COM A NOSSA CONDICAO
let lista = ['Pedro', 'Lucas', 'Ana', 'Bia']

//QUERO FILTRAR NOMES QUE TENHAM MENOR QUE 4 CARACTERES
let filtrar = lista.filter((item)=>{// O FILTER RECEBER O PARAMETRO item
    return item.length <= 4
})

 console.log(filtrar);

let listaNomes = ['Pedro', 'Lucas', 'Bia', 'Ana']
let find = listaNomes.find((item)=>{
    return item.length <=4
})

console.log(find);