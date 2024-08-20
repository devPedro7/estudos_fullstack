var data = new Date()

console.log(data);

console.log(data.getHours());
console.log(data.getMinutes());
console.log(data.getSeconds());

var dataInserida = new Date("March 10, 2023")

console.log(dataInserida);

//FORMATANDO A DATA
console.log(dataInserida.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear());
