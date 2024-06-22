const tlgDark = document.querySelector("#tgl--dark")
const body = document.body
const imagem = document.querySelector("img");



tlgDark.addEventListener("change", alterarTema)


function alterarTema() {
    //exixte a cass dark no body
    if (body.classList.contains("dark")) {
        body.classList.remove("dark")
        imagem.setAttribute("src", "fundo-dia.jpg")
    } else {
        body.classList.add("dark")
        imagem.setAttribute("src", "fundo-noite.jpg")
    }
}

const resposta = prompt("Qual sua senha")
localStorage.setItem("senha", resposta)
console.log(localStorage.getItem("senha"))

//aqui vai gravar as senhas ou itens

//setItem("chave", valor ) gravar um valor n localStorage
//getItem("chave") resgata um valor de localStorage
//removeItem("chave")remove um único valor do localStarage
//clear() limpa todo local starage do seu domínio