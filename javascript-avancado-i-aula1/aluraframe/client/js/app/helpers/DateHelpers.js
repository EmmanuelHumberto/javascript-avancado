class DateHelpers {

    dataParaTexto(data) {

        /*Formatando data*/
        return data.getDate()
            + '/' + (data.getMonth() + 1)
            + '/' + data.getFullYear()
    }

    textoParaData(texto) {

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