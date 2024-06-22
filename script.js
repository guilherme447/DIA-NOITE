const tlgDark = document.querySelector("#tgl--dark")
const body = document.body
const imagem = document.querySelector("img");
//aqui tentamos resgatar o tema armazenado anteriormente
let temaPreferido = localStorage.getItem("tema")



tlgDark.addEventListener("change", alterarTema)

function carregarTema() {
    if (temaPreferido === "dark") {
        body.classList.add("dark")
        imagem.setAttribute("src", "fundo-noite.jpg")
    } else {
        body.classList.remove("dark")
        imagem.setAttribute("src", "fundo-dia.jpg")
    }
}


function alterarTema() {
    //exixte a cass dark no body
    if (body.classList.contains("dark")) {
        body.classList.remove("dark")
        imagem.setAttribute("src", "fundo-dia.jpg")
        localStorage.setItem("tema", "")
    } else {
        body.classList.add("dark")
        imagem.setAttribute("src", "fundo-noite.jpg")
        localStorage.setItem("tema", "dark")
    }
}




//aqui vai gravar as senhas ou itens

//setItem("chave", valor ) gravar um valor n localStorage
//getItem("chave") resgata um valor de localStorage
//removeItem("chave")remove um único valor do localStarage
//clear() limpa todo local starage do seu domínio


carregarTema()