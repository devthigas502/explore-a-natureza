const imagens = document.querySelectorAll('.js-list li')
const textos = document.querySelectorAll('.js-conteudo section')
const pergunta = document.querySelectorAll('.js-faq h3')
const resposta = document.querySelectorAll('.js-faq p')

console.log(imagens)
console.log(textos)


function ativarConteudo(indice){
    textos.forEach((item) =>{
        item.classList.remove('active')
    })
    textos[indice].classList.add('active')
}

imagens.forEach((item,indice)=>{
    item.addEventListener('click',() =>{
        ativarConteudo(indice)
    })
})
/*-------------------------------------------------------------*/

function ativarFaq(indice){
    resposta[indice].classList.toggle('active')
    
}
pergunta.forEach((item,indice) =>{
    item.addEventListener('click',() =>{
        ativarFaq(indice)
    })
})