let nomePrato = null
let precoPrato = 0

let nomeBebida = null
let precoBebida = 0

let nomeSobremesa = null
let precoSobremesa = 0

function selecionar(classe, item){
    const marcado = document.querySelector(`.${classe} .selecionado`)
    if(marcado !== null){
        marcado.classList.remove("selecionado")
    }

    const elemento = document.querySelector(`.${classe} .${item}`)
    elemento.classList.toggle("selecionado")

    if(classe === "pratos"){
        nomePrato = document.querySelector(`.${classe} .${item} .nome-item`).innerHTML
        const testeMeio = document.querySelector(`.${classe} .${item} .preco-item`).innerHTML
        precoPrato = parseFloat(testeMeio.substring(3).replace(",", "."))

    }else if(classe === "bebidas"){
        nomeBebida = document.querySelector(`.${classe} .${item} .nome-item`).innerHTML
        const testeMeio = document.querySelector(`.${classe} .${item} .preco-item`).innerHTML
        precoBebida = parseFloat(testeMeio.substring(3).replace(",", "."))

    }else if(classe === "sobremesas"){
        nomeSobremesa = document.querySelector(`.${classe} .${item} .nome-item`).innerHTML
        const testeMeio = document.querySelector(`.${classe} .${item} .preco-item`).innerHTML
        precoSobremesa = parseFloat(testeMeio.substring(3).replace(",", "."))
    }

    habilitarBotao()
}

function habilitarBotao(){
    if(precoPrato!==0 && precoBebida!==0 && precoSobremesa!==0){
        const botao = document.querySelector('.fechar-pedido')
        botao.classList.add("botao-habilitado")
        botao.innerHTML = "Fechar pedido"
    }
}
