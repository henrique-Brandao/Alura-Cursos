function converterNumero(valor) {
    if (!isNaN(Number(valor))) {
        try {
            parseInt(valor)
        } catch (erro) {
         console.error('ocorreu um erro na conversão')  
        }
    } else {
        console.log("Valor inválido");
    }
}
