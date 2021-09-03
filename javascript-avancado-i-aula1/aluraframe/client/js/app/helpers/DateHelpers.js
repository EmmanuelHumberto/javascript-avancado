class DateHelpers {

    constructor() {

        throw new Error('DateHelper não pode ser instanciada');
    }

    static dataParaTexto(data) {

        /*Formatando data*/
        /*Template string `${}`  interpolação */
        return ` ${ data.getDate() }/${ data.getMonth() + 1 }/${ data.getFullYear() } `;
    }

    static textoParaData(texto) {

        /*-Verifica testando se a expressão regular é verdadeira */
        if(!/\d{4}-\d{2}-\d{2}/.test(texto))
            throw new Error('Deve estar no formato aaaa-mm-dd');

        return new Date(...

            /*O método split() divide uma String em uma lista ordenada
            de substrings, coloca essas substrings em um array e retorna
            o array*/
            texto.split('-')

            /*O método map() invoca a função callback passada
            por argumento para cada elemento do Array e devolve
            um novo Array como resultado.*/
            .map((item, indice) => {
                    return item - indice % 2
            }
        ));
    }
}