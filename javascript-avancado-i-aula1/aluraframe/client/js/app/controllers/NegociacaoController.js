class NegociacaoController {

    constructor() {

        /*-Os metodos document.querySelector foram atribuidos a variavel '$'
       * porem para o metodo funcionar como função é preciso chamar
       * o metodo bind(document) para que document.querySelector
       * contunue a quardar sua relação com o 'document'.*/
        let $ = document.querySelector.bind(document);

        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
    }

    adiciona(event){
        event.preventDefault();
        let data = new Date(this._inputData.value.replace(/-/g, ','));
        console.log(data);

    }
}