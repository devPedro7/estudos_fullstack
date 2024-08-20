var mensagem = document.getElementById('mensagem')

function entrar(){
    var nome = prompt("digite seu nome")

    if(nome === "" || nome === " " || nome === null){
        alert("Operação inválida! Preencha o campo!")
    }
    else{
        mensagem.innerHTML = "Bem vindo " + nome


        let botaoSair = document.createElement("button")
        botaoSair.innerText = "Sair"
        botaoSair.onclick = sair
        mensagem.appendChild(botaoSair)
    }
}

function sair(){
    alert("Você saiu, até logo!")
    mensagem.innerHTML = "Acessar..."
}