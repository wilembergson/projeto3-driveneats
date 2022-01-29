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


    const teste = document.querySelector(".titulo")
    const teste2 = document.querySelector(".sub-titulo")

    if(classe === "pratos"){
        nomePrato = document.querySelector(`.${classe} .${item} .nome-item`).innerHTML
        teste.innerHTML = nomePrato

        const testeMeio = document.querySelector(`.${classe} .${item} .preco-item`).innerHTML
        precoPrato = parseFloat(testeMeio.substring(3).replace(",", "."))

        teste2.innerHTML = (precoPrato-(2)).toFixed(2)
    }else if(classe === "bebidas"){
        nomeBebida = document.querySelector(`.${classe} .${item} .nome-item`).innerHTML
        teste.innerHTML = nomeBebida

        const testeMeio = document.querySelector(`.${classe} .${item} .preco-item`).innerHTML
        precoBebida = parseFloat(testeMeio.substring(3).replace(",", "."))

        teste2.innerHTML = (precoBebida-(2)).toFixed(2)
    }else if(classe === "sobremesas"){
        nomeSobremesa = document.querySelector(`.${classe} .${item} .nome-item`).innerHTML
        teste.innerHTML = nomeSobremesa

        const testeMeio = document.querySelector(`.${classe} .${item} .preco-item`).innerHTML
        precoSobremesa = parseFloat(testeMeio.substring(3).replace(",", "."))

        teste2.innerHTML = (precoSobremesa-(2)).toFixed(2)
    }
}

