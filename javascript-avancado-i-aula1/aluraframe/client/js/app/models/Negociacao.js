class Negociacao {

    constructor(data, quantidate, valor) {
        this._data = new Date(data.getTime());
        this._quantidade = quantidate;
        this._valor = valor;

        /*O método Object.freeze() congela um objeto: isto é,
        impede que novas propriedades sejam adicionadas a ele;
        impede que as propriedades existentes sejam removidas;
        e impede que propriedades existentes, ou sua inumerabilidade,
        configurabilidade, ou capacidade de escrita sejam alteradas.
        Em essência o objeto é efetivamente imutável.
        O método retorna o objeto congelado.*/
        Object.freeze(this);
    }

    recuperaData(){

    /*-O método getTime() retorna o valor numérico
    correspondente ao horário da data especificada
    de acordo com o horário universal*/
    return new Date(this._data.getTime());
    }
    recuperaQuantidade(){
        this._quantidade;
    }
    recuperaValor(){
        this._valor
    }
    recuperaVolume(){
        this._quantidade * this._valor

    }
}