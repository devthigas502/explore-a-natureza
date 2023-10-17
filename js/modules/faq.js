export default function faq() {

    // Variáveis constantes que não podem ser alteradas.
    // Seleciona todos os elementos de pergunta e resposta no FAQ.
    const pergunta = document.querySelectorAll('.js-faq h3');
    const resposta = document.querySelectorAll('.js-faq p');

    // Modifica o ícone de seta ao lado da pergunta no FAQ para abrir e fechar.
    const seta = document.querySelectorAll('.js-faq span');

    // Função para ativar ou desativar uma pergunta no FAQ com base no índice.
    function ativarFaq(indice) {
        // Alterna a classe 'active' na resposta para mostrar ou ocultar.
        resposta[indice].classList.toggle('active');
        // Altera o texto da seta com base na visibilidade da resposta.
        if (resposta[indice].classList.contains('active')) {
            seta[indice].innerText = "▼"; // Define a seta para baixo quando a resposta está ativa.
        } else {
            seta[indice].innerText = "▲"; // Define a seta para cima quando a resposta não está ativa.
        }
    }

    // Adiciona um evento de clique a cada elemento de pergunta no FAQ.
    pergunta.forEach((item, indice) => {
        item.addEventListener('click', () => {
            ativarFaq(indice); // Chama a função para ativar ou desativar a pergunta quando clicada.
        });
    });
}