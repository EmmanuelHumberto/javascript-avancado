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

        /*O método replace() retorna uma nova string com algumas
        ou todas as correspondências de um padrão substituídas por
        um determinado caractere (ou caracteres).
        O padrão pode ser uma string ou uma RegExp, e a substituição
        pode ser uma string ou uma função a ser chamada para cada correspondência.
        Se o padrão for uma string, apenas a primeira ocorrência será substituída.*/
        let data = new Date(this._inputData.value.replace(/-/g, ','));
        console.log(data);

    }
}