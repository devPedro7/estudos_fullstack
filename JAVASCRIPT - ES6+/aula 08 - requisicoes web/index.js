//É ALGO UTILIZADO EM TODOS OS PROJETOS. PODEMOS CRIAR API, UTILIZAR COM FRAMWORKS ETC.

//CONSUMIR UMA API, É ESTAR CONSUMINDO UM SERVIÇO EXTERNO.

//URL: https://sujeitoprogramador.com/rn-api/?api=posts

//COMO CONSUMIR UMA API:

//1º RECEBENDO O ELEMENTO QUE VAI REDENRIZAR OS ELEMENTOS
let listElement = document.querySelector("#app");

//2º CRIANDO UM ARRAY QUE VAI RECEBER OS ARRAYS DA API
let postagens = [];

//CRIANDO A FUNÇÃO QUE VAI CONSUMIR A API OS DADOS.
function nutriApp(){
    //CONSUMINDO A API
    fetch("https://sujeitoprogramador.com/rn-api/?api=posts")
    .then((response) => response.json())
    .then((json)=>{
        postagens = json

        postagens.map((item)=>{//PARA CADA ELEMENTO DO ARRAY ELE VAI CRIAR UM ELEMENTO HTML
         let liElement = document.createElement("li")
         let titleElement = document.createElement("strong")
         let imgElement = document.createElement("img")  
         let descriptionElement = document.createElement("p")

         //UTILIZANDO OS ELEMENTOS CRIADOS NO MAP
         let titleText = document.createTextNode(item.titulo)
         titleElement.appendChild(titleText)//INSERINDO O VALOR DO JSON NO ELEMENTO HTML
         liElement.append(titleElement)//INSERINDO O ELEMENTO HTML NO li 

         imgElement.src = item.capa
         liElement.appendChild(imgElement)

         let descriptionText = document.createTextNode(item.subtitulo)
         descriptionElement.appendChild(descriptionText)
         liElement.append(descriptionElement)

        
         //INSERINDO A LI DENTRO DA UL
         listElement.appendChild(liElement)
        })
    })
    .catch(()=>{
        
    })
}
nutriApp();

