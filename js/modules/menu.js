export default function menuMobileInit(){

    const menuResponsivo = document.querySelector('.js-menu')
    const menu = document.querySelectorAll('.js-menu .menu')
    const mspan = document.querySelector('.js-menu .menu span')
    const mdiv = document.querySelectorAll('.js-menu div')
    
    menu.forEach((item) =>{
        item.addEventListener('click', () =>{
            mdiv.forEach((item) =>{
                menuResponsivo.classList.toggle('active')
                item.classList.toggle('active')
                if (menuResponsivo.classList.contains('active') == true){
                    mspan.innerText = "close"
                }
                else{
                    mspan.innerText = "menu"
                }
            })
        } )
    })
}