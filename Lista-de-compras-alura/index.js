import { CriarItemDaLista } from "./scripts/criarItemDaLista.js";
import verificarListaVazia from "./scripts/verificarListaVazia.js";

const botao = document.getElementById('adicionar-item');
const listaDeCompra = document.getElementById('lista-de-compras');
const input = document.getElementById('input-item'); // Adicionei essa linha (veja observação abaixo)

botao.addEventListener("click", (event) => {
    event.preventDefault();
    const itemLista = CriarItemDaLista(); // Agora itemLista é definido aqui!
    listaDeCompra.appendChild(itemLista);
    verificarLista();
    verificarListaVazia(listaDeCompra)
    input.value = "";
});
verificarListaVazia(listaDeCompra)

verificarLista()