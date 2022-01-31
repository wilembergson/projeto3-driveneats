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

    const teste1 = document.querySelector('.testes .teste1')
    const teste2 = document.querySelector('.testes .teste2')
    const teste3 = document.querySelector('.testes .teste3')

    if(classe === "pratos"){
        nomePrato = document.querySelector(`.${classe} .${item} .nome-item`).innerHTML
        
        const testeMeio = document.querySelector(`.${classe} .${item} .preco-item`).innerHTML
        precoPrato = parseFloat(testeMeio.substring(3).replace(",", "."))
        teste1.innerHTML = precoPrato

    }else if(classe === "bebidas"){
        nomeBebida = document.querySelector(`.${classe} .${item} .nome-item`).innerHTML
        teste2.innerHTML = nomeBebida
        const testeMeio = document.querySelector(`.${classe} .${item} .preco-item`).innerHTML
        precoBebida = parseFloat(testeMeio.substring(3).replace(",", "."))

    }else if(classe === "sobremesas"){
        nomeSobremesa = document.querySelector(`.${classe} .${item} .nome-item`).innerHTML
        teste3.innerHTML = nomeSobremesa
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



function fecharPedido(){
    const botao = document.querySelector('.barra-inferior .botao-habilitado')
    const total = (precoPrato + precoBebida + precoSobremesa).toFixed(2)
    const mensagem = `Olá, gostaria de fazer o pedido:\n - Prato: ${nomePrato}\n - Bebida: ${nomeBebida}\n - Sobremesa: ${nomeSobremesa}\n Total: R$ ${total}`
    
    if(botao !== null){
        var msg = window.open('https://wa.me/5583988070166?text='+encodeURIComponent(mensagem), '_blank')
        msg.focus()
    }
}
