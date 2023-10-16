export default function content(){

    const imagens = document.querySelectorAll('.js-list li')
    const textos = document.querySelectorAll('.js-conteúdo section')

    console.log(imagens)
    console.log(textos)

    function ativarConteudo(indice){
        textos.forEach((item) =>{
            item.classList.remove('active')
        })
        textos[indice].classList.add('active')
    }

    imagens.forEach((item, indice)=>{
        item.addEventListener('click',() =>{
            ativarConteudo(indice)
        })
    })

}