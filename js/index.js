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

const menuResponsivo = document.querySelector('.js-menu')
const menu = document.querySelectorAll('.js-menu .menu')
const mspan = document.querySelector('.js-menu .menu span')
const mdiv = document.querySelectorAll('.js-menu div')
const simbolo = document.querySelector('.js-menu .menu span')

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


const form = document.querySelector('.form')
const dados = {}

function pegarValorForm(event){
    dados[event.target.name] = event.target.value
    console.log(dados)
}

form.addEventListener('change', pegarValorForm)
form.addEventListener('submit', (event) => {
    event.preventDefault()
    localStorage.setItem(dados.email, JSON.stringify(dados))
    alert("Dados salvos com sucesso")
})