//SOLUCAO 1 - Usado função anonima
(function cString(numEntrada) {
    while (numEntrada--) {
        str = '';
        [strA, strB] = gets().split(' ');
        for (let i = 0; i < (index = Math.min(strA.length, strB.length)); i++) str += strA[i] + strB[i];
        console.log(str += strA.length > strB.length ? strA.substring(index) : strB.substring(index));
    }
})(gets());