## Exercicio - Combinação de Strings

O exercicio publicado é referente ao treinamento do BOOTCAMP - Desenvolvedor NodeJS -  Resolvendo Algoritmos Com JavaScript.(https://digitalinnovation.one)


#### Descrição do Desafio:

Crie um algoritmo que receba dois inputs que sejam strings e combine-as alternando as letras de cada string. 

Deve começar pela primeira letra da primeira string, seguido pela primeira letra da segunda string, em seguida pela segunda letra da primeira string e continuar dessa forma sucessivamente.

As letras restantes da cadeia mais longa devem ser adicionadas ao fim da string resultante e retornada.


#### Entrada:

A entrada contém vários casos de teste. A primeira linha contém um inteiro N que indica a quantidade de casos de teste que vem a seguir. Cada caso de teste é composto por uma linha que contém duas cadeias de caracteres, cada cadeia de caracteres contém entre 1 e 50 caracteres inclusive.


#### Saída:

Combine as duas cadeias de caracteres da entrada como mostrado no exemplo abaixo e exiba a cadeia resultante.

Exemplos de Entrada  | Exemplos de Saída
------------- | -------------
2 | aBAb
aA Bb | abab
aa bb |	


#### Link Referência:
https://github.com/trepichio/DIOBootcampNodejs-Desafios/blob/master/06-Resolvendo%20Algoritmos%20com%20JavaScript/Desafio-03.js

Funções Anônimas(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Fun%C3%A7%C3%B5es).

Destructuring Assignment(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Atribuicao_via_desestruturacao).

Math.min() ( https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/min )

substring() ( https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/substring )



```javascript
//SOLUCAO 1
const verificarMenorString = (str, strA, strB) => {
    /*Math.min(strA.length, strB.length) - Verifica qual string tem o menor valor no
    tamanho (Math.min) e armazena o valor na variavel 'index'*/
    /*saida += strA[i] + strB[i]  - concatenação das strings na posição correta*/
    for (let i = 0; i < (index = Math.min(strA.length, strB.length)); i++) str += strA[i] + strB[i];
    
    return [str, strA, strB];
}

const saidaDados = (str, strA, strB) => {
    /*Se a stringA for maior que a stringB, é impresso a substring de A, caso contrario
     imprime a substring de B (utilizado o 'index' para retornar parte da string.) */
    console.log(str += strA.length > strB.length ? strA.substring(index) : strB.substring(index));
}

  //Usado função anonima 
(function entradaDados(num) {
    while (num--) {
        str = '';
        /*As proximas entradas, separa string em array, e cada valor armazena 
        nas variaveis separadas (via desestruturação (destructuring assignment))*/
        let [strA, strB] = gets().split(' '); 
        [str, strA, strB] = verificarMenorString(str, strA, strB);
        saidaDados(str, strA, strB);
    }
})(gets());



//SOLUCAO 2
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
```
