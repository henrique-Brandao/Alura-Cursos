
const mensagemListaVazia = document.querySelector('.mensagem-lista-vazia')

function verificarLista(listaDeCompra) {
    const itensLista = listaDeCompra.querySelectorAll("li")
    if (itensLista.length === 0) {
        mensagemListaVazia.style.display = "block"
    } else {
        mensagemListaVazia.style.display = "none"
    }

}

export default verificarListaVazia