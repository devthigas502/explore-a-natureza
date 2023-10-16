export default function modal(){

    const modal = document.querySelector(".js-modal");
    const dados = {}
    if (localStorage.getItem("email") === null) {
        modal.classList.add("active");
    }
    else {
        modal.classList.remove("active");
    }

    function pegarValorForm(event){
        dados[event.target.name] = event.target.value
        console.log(dados)
    }

    modal.addEventListener('change', pegarValorForm)
    document.querySelector(".modal-forms").addEventListener("submit", (event) => {
        event.preventDefault();
        localStorage.setItem("email", JSON.stringify(dados.email))
        alert("Dados salvos com sucesso")
        modal.classList.remove("active");
    });

    document.querySelector(".modal-close").addEventListener("click", () => {
        modal.classList.remove("active");
    });

    if (localStorage.getItem("email") === null) {
        setTimeout(() => {
            modal.classList.add("active");
        }, 3000);
      }

}