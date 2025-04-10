import { formatarData, formatarMoeda } from "../utils/formatters.js";
import { FormatoData } from "../types/FormatoData.js";
import conta from "../types/conta.js";

const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;

if (elementoDataAcesso != null){
    const dataAcesso: Date = new Date
    elementoDataAcesso.textContent = formatarData(conta.getDataAcesso(), FormatoData.DIA_SEMANA_DIA_MES_ANO)
}

renderizarSaldo();
 function renderizarSaldo(): void {
    if (elementoSaldo != null) {
        elementoSaldo.textContent = formatarMoeda(conta.getSaldo());
    }
}   

const saldoComponent = {
    atualizar() {
        renderizarSaldo();
    }
}

export default saldoComponent