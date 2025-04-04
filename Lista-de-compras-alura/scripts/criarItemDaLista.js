import gerarDiaSemana from "./gerarDiaDaSemana.js";

const input = document.getElementById('input-item');
let contador = 0


export function CriarItemDaLista() {
    if (input.value.trim() == '') {
        alert('digite um item para ser adicionado na lista');
        return;
    }

    const itemLista = document.createElement('li');
    const containerItemLista = document.createElement('div');
    containerItemLista.classList.add('lista-item-container');
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox"
    inputCheckbox.id = `checkbox-${contador++}`;
    const nomeItem = document.createElement("p");
    nomeItem.innerText = input.value;
    const itemData = document.createElement('p')
    const dataCompleta = gerarDiaSemana()
    itemData.innerText = dataCompleta

    inputCheckbox.addEventListener("click", function () {
        if (inputCheckbox.checked) {
            nomeItem.style.textDecoration = "line-through";
        } else {
            nomeItem.style.textDecoration = "none"
        }
    })


    containerItemLista.appendChild(inputCheckbox);
    containerItemLista.appendChild(nomeItem);

    itemLista.appendChild(containerItemLista)
    itemLista.appendChild(itemData)    

    itemData.classList.add('texto-data')
    return itemLista
}