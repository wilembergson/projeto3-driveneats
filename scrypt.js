function selecionar(classe, item){
    const marcado = document.querySelector(`.${classe} .selecionado`)
    if(marcado !== null){
        marcado.classList.remove("selecionado")
    }

    const elemento = document.querySelector(`.${classe} .${item}`)
    elemento.classList.toggle("selecionado")
}