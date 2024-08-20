//LISTA DE NOMES
var listaNomes = ['Pedro', 'Lucas', 'Ribeiro']
console.log(listaNomes);

//OBJETOS
let pessoa = {

    nome: 'Pedro',
    idade: 23,
    profissao: 'Desenvolvedor'
}

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.profissao);


let carro = {
    marca: 'Volwksvagen',
    nome: 'Gol',
    potencia: 15
}

console.log(carro);
console.log(carro.marca);
console.log(carro.potencia);

//ARRAY DE OBJETOS
let usuarios = [{nome: 'Pedro', cargo: 'DEV', status: 'ativo'},
                {nome: 'Manel', cargo: 'Design Pleno', status: 'ativo' }]

console.log(usuarios);
console.log(usuarios.values(usuarios));