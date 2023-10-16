export default function faq(){

    // const - variáveis constantes que não podem ser alteradas
    // irá selecionar todo o conteúdo das perguntas e respostas presentes no FAQ (dentro do parênteses é o nome correspondente dada à classe)
    const pergunta = document.querySelectorAll('.js-faq h3')
    const resposta = document.querySelectorAll('.js-faq p')

    // irá modificar a seta ao lado da pergunta do FAQ, que irá mexer conforme é clicado para fechar e abrir
    const seta = document.querySelectorAll('.js-faq span')


    function ativarFaq(indice){
        resposta[indice].classList.toggle('active')
        if (resposta[indice].classList.contains('active')== true){
            seta[indice].innerText = "▼"
        }
        else{
            seta[indice].innerText = "▲"
        }
    }

    pergunta.forEach((item, indice) => {
        item.addEventListener('click',() => {
            ativarFaq(indice)
        })
    })

}
