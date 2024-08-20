function pedir(){

    var valor =  prompt("Digite um valor de 1 a 4: ")

    switch (Number(valor)) {
        case 1:
            alert('Você escolheu 1 = Suco')
            break;
        case 2:
            alert('Você escolheu o 2 = Água de coco')
            break;
        case 3:
            alert('Você escolheu o 3 = Bolo de chocolate')
            break;
        case 4:
            alert('Você escolheu o 4 = Churrasco')
            break;
        default: alert('Opção inválida!')
            break;
    }

    console.log(Number(valor));
}