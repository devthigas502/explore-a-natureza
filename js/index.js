const imagens = document.querySelectorAll('.js-list li')
const pergunta = document.querySelectorAll('.js-faq h3')
const resposta = document.querySelectorAll('.js-faq p')

imagens.forEach((item, indice) => {
    item.addEventListener('click',() => {
        ativarConteudo(indice)
    })
})


function ativarFaq(indice) {
    resposta[indice].classList.toggle('active')
    
}
pergunta.forEach((item,indice) => {
    item.addEventListener('click',() => {
        ativarFaq(indice)
    })
})