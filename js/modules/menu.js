export default function menuMobileInit() {

    // Seleciona o menu responsivo.
    const menuResponsivo = document.querySelector('.js-menu');

    // Seleciona todos os elementos de menu dentro do menu responsivo.
    const menu = document.querySelectorAll('.js-menu .menu');

    // Seleciona o elemento span dentro do menu responsivo.
    const mspan = document.querySelector('.js-menu .menu span');

    // Seleciona todos os elementos div dentro do menu responsivo.
    const mdiv = document.querySelectorAll('.js-menu div');

    // Adiciona um evento de clique a cada elemento de menu.
    menu.forEach((item) => {
        item.addEventListener('click', () => {
            // Para cada clique, itera através dos elementos div.
            mdiv.forEach((item) => {
                // Alterna a classe 'active' no menu responsivo.
                menuResponsivo.classList.toggle('active');
                // Alterna a classe 'active' nos elementos div.
                item.classList.toggle('active');
                // Altera o texto do span com base na visibilidade do menu responsivo.
                if (menuResponsivo.classList.contains('active')) {
                    mspan.innerText = "close";
                } else {
                    mspan.innerText = "menu";
                }
            });
        });
    });
}