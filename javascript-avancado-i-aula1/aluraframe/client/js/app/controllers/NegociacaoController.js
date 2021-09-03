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

        /*O operador spread '...' é uma sintaxe útil e rápida para
        adicionar itens a arrays, combinar arrays ou objetos
        e espalhar um array em argumentos de uma função.*/
        let data = new Date(...

            this._inputData.value

                /*O método split() divide uma String em uma lista ordenada
                 de substrings, coloca essas substrings em um array e retorna
                 o array. A divisão é feita procurando um padrão, onde o padrão
                 é fornecido como o primeiro parâmetro na chamada do método.*/
                .split('-')

                /*O método map() invoca a função callback passada
                por argumento para cada elemento do Array e devolve
                um novo Array como resultado.*/
                .map((item, indice) => {return item - indice % 2})
        );

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        /*Formatando data*/
        let diaMesAno = negociacao.recuperaData().getDate()
            + '/' + (negociacao.recuperaData().getMonth() + 1)
            + '/' + negociacao.recuperaData().getFullYear()
        console.log(diaMesAno);
    }
}