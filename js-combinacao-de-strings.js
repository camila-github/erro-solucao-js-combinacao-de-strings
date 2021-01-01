//SOLUÇÃO 1
/*Usado função anonima*/
(function cString(numEntrada) {
    while (numEntrada--) {
        str = '';
        /*As proximas entradas, separa string em array, e cada valor armazena 
        nas variaveis separadas (via desestruturação (destructuring assignment))*/
        [strA, strB] = gets().split(' ');

        /*Math.min(strA.length, strB.length) - Verifica qual string tem o menor valor no
        tamanho (Math.min) e armazena o valor na variavel 'index'*/
        /*saida += strA[i] + strB[i]  - concatenação das strings na posição correta*/
        for (let i = 0; i < (index = Math.min(strA.length, strB.length)); i++) str += strA[i] + strB[i];

        /*Se a stringA for maior que a stringB, é impresso a substring de A, caso contrario
        imprime a substring de B (utilizado o 'index' para retornar parte da string.) */
        console.log(str += strA.length > strB.length ? strA.substring(index) : strB.substring(index));
    }
})(gets());