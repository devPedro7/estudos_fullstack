/*
-- INFORMAÇÕES IMC A CONSIDERAR:

1º ABAIXO DE 17: MUITO ABAIXO DO PESO;
2º ENTRE 17 E 18,49: ABAIXO DO PESO;
3º ENTRE 18,50 E 24,99: PESO NORMAL
4º ENTRE 25 E 29,99: ACIMA DO PESO

CALCULO: peso / (altura * altura)
*/

//VARIÁVEIS
var peso;
var altura;
var imc;
var resultado;


function calcularIMC(event) { //AQUI RECEBEMOS O EVENT DO FORMULÁRIO.
    event.preventDefault();

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value

    //CALCULANDO O IMC:
    imc = peso / (altura * altura) //altura * 2

    //VALIDAÇÕES

    if(imc < 17){
        resultado = document.getElementById('resultado')
        resultado.innerHTML = `<br/> <h4>Seu resultado foi:  ${imc.toFixed((2))} <br/> Cuidado, você está muito abaixo do peso.</h4>`
    }
    else if(imc > 17 && imc <= 18.49){
        resultado = document.getElementById('resultado')
        resultado.innerHTML = `<br/> <h4>Seu resultado foi:  ${imc.toFixed((2))} <br/> Você está abaixo do peso.</h4>`
    }
    else if(imc >= 18,50 && imc <= 24.99){
        resultado = document.getElementById('resultado')
        resultado.innerHTML = `<br/> <h4>Seu resultado foi:  ${imc.toFixed((2))} <br/> Você está no peso ideal!</h4>`
    }

    else if(imc > 25 && imc <= 29.99){
        resultado = document.getElementById('resultado')
        resultado.innerHTML = `<br/> <h4>Seu resultado foi:  ${imc.toFixed((2))} <br/> Cuidado, você está acima do peso</h4>`
    }
    else if(imc >= 30){
        resultado = document.getElementById('resultado')
        resultado.innerHTML = `<br/> <h4>Seu resultado foi:  ${imc.toFixed((2))} <br/> Cuidado, você está na obesidade</h4>`
    }
       
}//ZERANDO OS VALORES DO CAMPO DO FORMULÁRIO
document.getElementById('peso').value = ''
document.getElementById('altura').value = ''

    console.log(peso, altura);
    console.log(imc);

   // alert('Testando o submit')