const pergunta = document.querySelectorAll('.js-faq h3')
const resposta = document.querySelectorAll('.js-faq p')
const spann = document.querySelectorAll('.js-faq span')


function ativarFaq(indice){
    resposta[indice].classList.toggle('active')
    if (resposta[indice].classList.contains('active')== true){
        spann[indice].innerText = "▼"
    }
    else{
        spann[indice].innerText = "▲"
    }
}

pergunta.forEach((item, indice) => {
    item.addEventListener('click',() => {
        ativarFaq(indice)
    })
})



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

const menuOri = document.querySelector('.js-menu')
const menu = document.querySelectorAll('.js-menu .menu')
const menuspan = document.querySelector('.js-menu .menu span')
const menu2 = document.querySelectorAll('.js-menu div')
const simboloMenu = document.querySelector('.js-menu .menu span')

menu.forEach((item) =>{
    item.addEventListener('click', () =>{
        menu2.forEach((item) =>{
            menuOri.classList.toggle('active')
            item.classList.toggle('active')
            if (menuOri.classList.contains('active') == true){
                menuspan.innerText = "close"
            }else{
                menuspan.innerText = "menu"
            }
        })
    } )
})


const btn = document.querySelector('.btn')

function mudarNomeBtn(){
    btn.innerText = 'Copiado'
    setTimeout(() => {
        btn.innerText = 'Copiar'
    }, 3000)
    btn.addEventListener('click')
    
}

function mostrarConsole(msg){
    console.log(msg)
}