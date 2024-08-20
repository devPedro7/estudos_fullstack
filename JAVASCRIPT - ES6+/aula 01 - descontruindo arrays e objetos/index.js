//DESCONTRUINDO UM OBJETO

let pessoa = {
    nome: 'Pedro',
    idade: 23
}

//ACESSANDO CONVENCIONALMENTE: 
console.log(pessoa.nome, pessoa.idade);

//DESCONTRUINDO O OBJETO
const {nome, idade} = pessoa

//CHAMANDO O OBJETO DESCONSTRUIDO
console.log(nome, idade);


//DESCONSTRUINDO LISTAS: 
let listaNomes = ['Pedro', 'Lucas']

//CHAMANDO CONVENCIONAL
console.log(listaNomes[0]);

//DESCONSTRUINDO A LISTA
const [primeiro, segundo] = listaNomes

//CHAMANDO A LISTA DESCONSTRUIDA
console.log(segundo);