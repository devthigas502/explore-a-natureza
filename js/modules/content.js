export default function content() {

    // Seleciona todos os elementos com a classe 'js-list' dentro de elementos 'li'.
    const imagens = document.querySelectorAll('.js-list li')

    // Seleciona todos os elementos com a classe 'js-conteúdo' dentro de elementos 'section'.
    const textos = document.querySelectorAll('.js-conteúdo section')

    // Função para ativar o conteúdo com base no índice fornecido.
    function ativarConteudo(indice) {
        // Remove a classe 'active' de todos os elementos em 'textos'.
        textos.forEach((item) => {
            item.classList.remove('active');
        })
        // Adiciona a classe 'active' ao elemento em 'textos' com o índice especificado.
        textos[indice].classList.add('active');
    }

    // Adiciona um evento de clique a cada elemento em 'imagens'.
    imagens.forEach((item, indice) => {
        item.addEventListener('click', () => {
            // Quando um elemento em 'imagens' é clicado, chama a função ativarConteudo com o índice correspondente.
            ativarConteudo(indice);
        });
    })
}