/*function convidados(nomes){
    console.log('Sejam bem vindos');
    console.log('CONVIDADOS: ' + nomes);
}

convidados('Pedro', 'Manel', 'Catarina')*/

//COM rest

function convidados(...nomes){
   // console.log('Sejam bem-vindos');
   // console.log('Convidados: ' + nomes);
}

convidados('Pedro', 'Manel', 'Catarina')


//MINI PROJETO - SORTEADOR DE NÚMEROS - UTILIZAND O rest

function sorteador(...numeros){
    console.log(numeros.length);

    let numeroSorteado = Math.floor(Math.random() * numeros.length) //O floor garante que o número seja inteiro
                                                                    //RANDOM gera numeros aleatorios

    console.log(`A posição do número sorteado foi: ${numeroSorteado}`); //AQUI ELE ESTÁ PASSANDO A POSIÇÃO - INDICE
    console.log('Número sorteado é: ' + numeros[numeroSorteado]);
}

sorteador(1,2,3,4,5,6,7)