/**
 *    Dada una array, devuelve el elemento más grande de la array.
 *    Se supone que la array solo contiene números.
 *
 *    @param {number[]} array - La array de entrada
 *    @returns {number} El elemento más grande en la array
 */
function largest(array) {
  // Aqui tu codigo
}

/**
 * Dado un array, devuelve el elemento más pequeño del array.
 *
 * Se asume que el array contiene solo números.
 *
 * @param {number[]} array - El array de entrada.
 * @returns {number} El elemento más pequeño del array.
 */
function smallest(array) {
  // Aqui tu codigo
}

/**
 * Dada una array, devuelve el elemento más largo de la array.
 *
 * Se asume que la array contiene solo cadenas de texto.
 *
 * @param {string[]} array - La array de entrada
 * @returns {number} La cadena de texto más larga en la array
 */
function longest(array) {
  // Aqui tu codigo
}

/**
 * Dado un arreglo, devuelve el elemento más largo en el arreglo.
 *
 * Se asume que el arreglo solo contiene cadenas de texto.
 *
 * @param {string[]} array - El arreglo de entrada
 * @returns {number} La cadena más larga en el arreglo
 */
function shortest(array) {
  // Aqui tu codigo
}

/**
 * Dado un arreglo de números, devuelve su suma.
 *
 * @example
 * sum([1, 2, 3]); // => 6 (es decir, 1 + 2 + 3)
 * sum([-10, 10]); // => 0 (es decir, -10 + 10)
 *
 * @param {number[]} array - Un arreglo de números
 * @returns {number} La suma de los números en el arreglo
 */
function sum(array) {
  // Aqui tu codigo
}

/**
 * Dado un array de números, devuelve su media aritmética. Usamos "media aritmética"
 * en lugar de "promedio" porque "promedio" puede significar muchas cosas — media,
 * mediana o moda — mientras que media siempre significa una sola cosa.
 *
 * La media de tres números a,b,c es (a + b + c) / 3.
 *
 * La media de cuatro números a,b,c,d es (a + b + c + d) / 4.
 *
 * etc.
 *
 * Ver https://en.wikipedia.org/wiki/Arithmetic_mean
 *
 * @example
 * mean([30, 10, 20]); // => 20 (es decir, (30 + 10 + 20) / 3)
 * mean([-10, 10]); // => 0 (es decir, (-10 + 10) / 2)
 *
 * @param {number[]} array - Un array de números
 * @returns {number} La media de los números en el array
 */
function mean(array) {
  // Aqui tu codigo
}

/**
 * Dado un arreglo de números, devuelve su mediana. La mediana de una lista de números
 * es el valor que separa la mitad superior de la mitad inferior.
 *
 * La mediana de [1, 2, 14, 199, 5] es 5 porque la mitad de los números en la lista son
 * menores que 5 y la otra mitad son mayores que 5.
 *
 * Si la lista tiene un número impar de elementos, siempre habrá un valor "medio"
 * en la lista y ese valor se toma como la mediana. Si la lista tiene un número par
 * de elementos, entonces la mediana se toma como la media de los dos elementos medios.
 *
 * Ver https://es.wikipedia.org/wiki/Mediana
 *
 * @example
 * median([900, 10, 20]); // => 20 ya que 20 es el elemento medio
 * median([-10, 20, 400, 10]); // => 15 ya que 10 y 20 son los elementos medios
 *
 * @param {number[]} array - Un arreglo de números
 * @returns {number} La mediana de los números en el arreglo
 */
function median(array) {
  // Aqui tu codigo
}

/**
 * Dado un array de números, devuelve su producto.
 *
 * @example
 * product([2, 4, 6]); // => 48 (es decir, 2 * 4 * 6)
 * product([-10, 10]); // => -100 (es decir, -10 * 10)
 *
 * @param {number[]} array - Un array de números
 * @returns {number} El producto de los números en el array
 */
function product(array) {
  // Aqui tu codigo
}

/**
 * Dada una array y un valor, devuelve verdadero si se encuentra el valor en la array y falso en caso contrario.
 *
 * La array no necesita contener un solo tipo de datos.
 *
 * Cuando se busca algo en una array, es común referirse a la array como el "pajar" y lo que se está buscando como la "aguja",
 * como en "Buscando una aguja en un pajar".
 *
 * @example
 * includes([1, 2, 30, -10], 480); // => false
 * includes([1, 2, 30, -10], 30); // => true
 * includes(['waffle', 'giraffe', 'banana'], 'giraffe'); // => true
 * includes(['waffle', 'giraffe', 'banana'], 'lemons'); // => false
 *
 * @param {object[]} pajar - Una array
 * @param {object} aguja - El valor a buscar
 * @returns {boolean} Verdadero si la array contiene el valor, falso en caso contrario.
 */
function includes(pajar, aguja) {
  // Aqui tu codigo
}

/**
 * Dado un arreglo y un valor, devuelve el índice de la primera ocurrencia del valor.
 * Si el valor no se encuentra, devuelve -1.
 *
 * El arreglo no necesita contener un solo tipo de dato.
 *
 * @example
 * firstIndexOf([10, 20, 30, 20], 20); // => 1
 * firstIndexOf([10, 20, 30, 20], 17); // => -1
 * firstIndexOf(['giraffe', giraffe', 'banana'], 'giraffe'); // => 0
 * firstIndexOf(['giraffe', giraffe', 'banana'], 'banana'); // => 2
 *
 * @param {object[]} arreglo - Un arreglo
 * @param {object} valor - El valor a buscar
 * @returns {number} El índice de la primera ocurrencia del valor en el arreglo,
 *  o -1 si no se encuentra.
 */
function firstIndexOf(arreglo, valor) {
  // Aqui tu codigo
}

/**
 * Dado un array y un valor, devuelve el índice de la última ocurrencia del valor.
 * Si el valor no se encuentra, devuelve -1.
 *
 * El array no necesita contener un solo tipo de datos.
 *
 * @example
 * lastIndexOf([10, 20, 30, 20], 20); // => 3
 * lastIndexOf([10, 20, 30, 20], 17); // => -1
 * lastIndexOf(['jirafa', 'jirafa', 'banana'], 'jirafa'); // => 1
 * lastIndexOf(['jirafa', 'jirafa', 'banana'], 'banana'); // => 2
 *
 * @param {object[]} array - Un array
 * @param {object} valor - El valor a buscar
 * @returns {number} El índice de la última ocurrencia del valor en el
 * array, o -1 si no se encuentra.
 */
function lastIndexOf(array, valor) {
  // Aqui tu codigo
}

/**
 * Dado un array de números enteros, devuelve la cantidad de números pares en el array.
 *
 * Ver https://es.wikipedia.org/wiki/N%C3%BAmero_par
 *
 * @example
 * countEvens([1, 2, 3, 4, 5]); // => 2
 * countEvens([10, 10, 10]); // => 3
 * countEvens([1, 1, 1, 2]); // => 2
 *
 * @param {number[]} array - Un array de números
 * @returns {number} La cantidad de números pares en el array
 */
function countEvens(array) {
  // Aqui tu codigo
}

/**
 * Dado un arreglo de enteros, retorna la cantidad de enteros impares en el arreglo.
 *
 * Ver https://es.wikipedia.org/wiki/N%C3%BAmero_impar
 *
 * @example
 * countOdds([1, 2, 3, 4, 5, 19]); // => 4
 * countOdds([10, 10, 10]); // => 0
 * countOdds([1, 1, 1, 2]); // => 3
 *
 * @param {number[]} array - Un arreglo de números
 * @returns {number} La cantidad de enteros impares en el arreglo
 */
function countOdds(array) {
  // Aqui tu codigo
}

/**
 *
 *    Dado un array de números y un número umbral, devuelve la cantidad de elementos en el array
 *    estrictamente mayores que el número umbral.
 *
 *    "Estrictamente mayor que" significa que queremos números mayores que (>) y no
 *    mayores que o iguales a (>=).
 *
 *    @example
 *    countGreaterThan([1, 2, 3, 4, 5], 2); // => 3
 *    countGreaterThan([1, 2, 3, 4, 5], 17); // => 0
 *    countGreaterThan([1, 2, 1, 2, 3, 4, 1, 2, 1], 1); // => 5
 *    countGreaterThan([10, 10, 10, -10, 15], 10); // => 1
 *
 *    @param {number[]} array - Un array de números
 *    @param {number} threshold - El umbral para contar
 *    @returns {number} La cantidad de elementos en el array mayores que el umbral
 */
function countGreaterThan(array, threshold) {
  // Aqui tu codigo
}

/**
 *    Dado un array de números y un número umbral, devuelve la cantidad de elementos en el array
 *    estrictamente menor que el número umbral.
 *
 *    "Estrictamente menor" significa que queremos números menores que (<) y no menores o iguales a (<=).
 *
 *    @example
 *    countLessThan([1, 2, 3, 4, 5], 2); // => 1
 *    countLessThan([1, 2, 3, 4, 5], 17); // => 5
 *    countLessThan([1, 2, 1, 2, 3, 4, 1, 2, 1], 1); // => 0
 *    countLessThan([10, 10, 10, -10, 15, 7], 10); // => 2
 *
 *    @param {number[]} array - Un array de números
 *    @param {number} threshold - El umbral para contar
 *    @returns {number} La cantidad de elementos en el array menor que el umbral
 */
function countLessThan(array, threshold) {
  // Aqui tu codigo
}

/**
 * Dado un array y un valor, devuelve el número de veces que se encuentra
 * ese valor en el array.
 *
 * @example
 * countValue([1, 2, 3, 4, 5], 2); // => 1
 * countValue([1, 2, 3, 4, 5], 17); // => 0
 * countValue([1, 2, 1, 2, 3, 4, 1, 2, 1], 1); // => 4
 * countValue([10, 10, 10, -10], 10); // => 3
 * countValue(['hello', 'bananas', 'hello'], 'hello'); // => 2
 * countValue(['hello', 'bananas', 'hello'], 'giraffe'); // => 0
 *
 * @param {object[]} array - Un array
 * @param {object} value - El valor a contar
 * @returns {number} El número de veces que aparece el valor en el array
 */
function countValue(array, value) {
  // Aqui tu codigo
}

/**
 * Dado un array de enteros, devuelve un nuevo array que consta solo
 * de los enteros pares del array original.
 *
 * Devuelve un array vacío si no hay números pares.
 *
 * @example
 * selectEvens([1, 2, 3, 4, 5]); // => [2, 4]
 * selectEvens([10, 2, 19, 10]); // => [10, 2, 10]
 * selectEvens([1, 1, 1, 2]); // => [2]
 * selectEvens([11, 21, 31]); // => []
 *
 * @param {number[]} array - Un array de números
 * @returns {number[]} Un nuevo array que consta de todos los números pares en el array de entrada
 */
function selectEvens(array) {
  // Aqui tu codigo
}

/**
 * Dado un arreglo de enteros, devuelve un nuevo arreglo que consiste
 * solamente de los enteros impares del arreglo original.
 *
 * Retorna un arreglo vacío si no existen tales números.
 *
 * @example
 * selectOdds([1, 2, 3, 4, 5]); // => [1, 3, 5]
 * selectOdds([10, 2, 19, 10, -103]); // => [19, -103]
 * selectOdds([1, 1, 2, 1]); // => [1, 1, 1]
 * selectOdds([10, 20, 30]); // => []
 *
 * @param {number[]} array - Un arreglo de números
 * @returns {number[]} Un nuevo arreglo que consiste solamente de los números impares del arreglo de entrada
 */
function selectOdds(array) {
  // Aqui tu codigo
}

/**
 * Dado un arreglo de números y un valor umbral, devuelve un nuevo arreglo
 * que contiene sólo los números estrictamente mayores que el umbral.
 *
 * Devuelve un arreglo vacío si no existen tales números.
 *
 * @example
 * selectGreaterThan([1, 2, 3, 4, 5], 2); // => [3, 4, 5]
 * selectGreaterThan([1, 2, 3, 4, 5], 17); // => []
 * selectGreaterThan([1, 2, 1, 2, 3, 4, 1, 2, 1], 1); // => [2, 2, 3, 4, 2];
 * selectGreaterThan([10, 10, 10, -10, 15], 10); // => [15]
 * selectGreaterThan([10, 20, 30, 40], 100); // => []
 *
 * @param {number[]} array - Un arreglo de números
 * @param {number} threshold - El umbral para seleccionar
 * @returns {number[]} Un nuevo arreglo que contiene sólo los números del arreglo de entrada
 *  que son estrictamente mayores que el umbral
 */
function selectGreaterThan(array, threshold) {
  // Aqui tu codigo
}

/**
 * Dado un array de números y un valor umbral, devuelve un nuevo array
 * que consiste únicamente de aquellos números estrictamente menores que el umbral.
 *
 * Devuelve un array vacío si no existen tales números.
 *
 * @example
 * selectLessThan([1, 2, 3, 4, 5], 2); // => [1]
 * selectLessThan([1, 2, 3, 4, 5], 17); // => [1, 2, 3, 4, 5]
 * selectLessThan([-20, 2, 1, 0, 1, 2, 1, 2], 1); // => [-20, 0];
 * selectLessThan([10, 4, 10, -10, 15], 10); // => [4, -10]
 * selectLessThan([10, 20, 30, 40], -100); // => []
 *
 * @param {number[]} array - Un array de números
 * @param {number} threshold - El umbral para seleccionar
 * @returns {number[]} Un nuevo array que consiste en todos los números en el array de entrada
 *  estrictamente menores que el umbral
 */
function selectLessThan(array, threshold) {
  // Aqui tu codigo
}

/**
 * Dado un arreglo de cadenas y un valor umbral de longitud, devuelve un nuevo arreglo
 * que contiene solo las cadenas con longitud estrictamente mayor que el umbral dado.
 *
 * Devuelve un arreglo vacío si no existen cadenas que cumplan la condición.
 *
 * @example
 * selectLongerThan(['', 'aaa', 'bb', 'c', 'dddd'], -1); // => ['', 'aaa', 'bb', 'c', 'dddd']
 * selectLongerThan(['', 'aaa', 'bb', 'c', 'dddd'], 0); // => ['aaa', 'bb', 'c', 'dddd']
 * selectLongerThan(['', 'aaa', 'bb', 'c', 'dddd'], 1); // => ['aaa', 'bb', dddd']
 * selectLongerThan(['', 'aaa', 'bb', 'c', 'dddd'], 2); // => ['aaa', dddd']
 * selectLongerThan(['', 'aaa', 'bb', 'c', 'dddd'], 3); // => ['dddd']
 * selectLongerThan(['', 'aaa', 'bb', 'c', 'dddd'], 4); // => []
 *
 * @param {string[]} array - Un arreglo de cadenas
 * @param {number} threshold - Un umbral de longitud
 * @returns {string[]} Un arreglo que contiene todas las cadenas del arreglo de entrada
 *  con longitud estrictamente mayor que el umbral dado
 */
function selectLongerThan(array, threshold) {
  // Aqui tu codigo
}

/**
 * Dada una matriz de cadenas y una longitud umbral, devuelve una nueva matriz
 * que consiste solo en las cadenas con una longitud estrictamente menor que el
 * umbral dado.
 *
 * Devuelve una matriz vacía si no existen cadenas con una longitud menor que el umbral.
 *
 * @example
 * selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 0); // => []
 * selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 1); // => ['']
 * selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 2); // => ['', 'c']
 * selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 3); // => ['', 'bb', 'c']
 * selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 4); // => ['', 'aaa', 'bb', 'c']
 * selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 5); // => ['', 'aaa', 'bb', 'c', 'dddd']
 *
 * @param {string[]} array - Una matriz de cadenas
 * @param {number} threshold - Un umbral de longitud
 * @returns {string[]} Una matriz de todas las cadenas en la matriz de entrada con longitud
 *  estrictamente menor que el umbral dado
 */
function selectShorterThan(array, threshold) {
  // Aqui tu codigo
}

/**
 * Dado un array de números, devuelve true si cada elemento es positivo
 * y false en caso contrario.
 *
 * @example
 * allPositive([1, 2, 3, 4, 5]); // => true
 * allPositive([1, 2, -3, 4, 5]); // => false
 * allPositive([0, 0, 1]); // => false
 *
 * @param {number[]} array - Un array de números
 * @returns {boolean} Verdadero si cada número en el array de entrada es positivo
 *   y falso en caso contrario.
 */
function allPositive(array) {
  // Aqui tu codigo
}

/**
 * Dada una matriz de números, devuelve verdadero si _algún_ elemento es positivo y falso en caso contrario.
 *
 * @example
 * anyPositive([1, 2, 3, 4, 5]); // => true
 * anyPositive([1, 2, -3, 4, 5]); // => true
 * anyPositive([0, 0, 1]); // => true
 * anyPositive([-10, -10, -10]); // => false
 * anyPositive([-10, -10, 1]); // => true
 *
 * @param {number[]} array - Una matriz de números
 * @returns {boolean} Verdadero si algún número en la matriz de entrada es positivo y falso en caso contrario.
 */
function anyPositive(array) {
  // Aqui tu codigo
}

/**
 * Dada dos arreglos, devuelve un nuevo arreglo que es la concatenación de los dos arreglos dados.
 *
 * "Concatenación" significa que los dos arreglos se unen o pegan uno al final del otro.
 *
 * Los arreglos en JavaScript tienen un método de concatenación incorporado. ¡No lo uses!
 * El objetivo es comprender mejor cómo funciona la concatenación, no navegar
 * la documentación de JavaScript.
 *
 * Consulta https://en.wikipedia.org/wiki/Concatenation
 *
 * @example
 * concat([1, 2, 3], [4, 5, 6]); // => [1, 2, 3, 4, 5, 6]
 * concat([-10, undefined], [true, 'waffles']); // => [-10, undefined, true, 'waffles']
 * concat([], []); // => []
 * concat([20, 104], []); // => [20, 104]
 * concat([], ['hello', 'world']); // => ['hello', 'world']
 *
 * @param {object[]} leftArray - El primer arreglo para concatenar
 * @param {object[]} rightArray - El segundo arreglo para concatenar
 * @returns {object[]} La concatenación de los dos arreglos dados.
 */
function concat(leftArray, rightArray) {
  // Aqui tu codigo
}

/**
 * Dada una matriz de cadenas, devuelve una nueva matriz con todos los elementos
 * de la matriz original excepto null, undefined y la cadena vacía ''.
 *
 * @example
 * removeEmpty([null, '', '']); // => []
 * removeEmpty(['Jesse', undefined, 'Farmer']); // => ['Jesse', 'Farmer']
 * removeEmpty(['one', '', 'two', '', 'three']); // => ['one', 'two', 'three']
 *
 * @param {string[]} array - Una matriz de cadenas
 * @returns {string[]} Una nueva matriz que consta de todos los valores no vacíos en la
 * matriz de entrada.
 */
function removeEmpty(array) {
  // Aqui tu codigo
}

/**
 * Dado un arreglo y un elemento, devuelve un nuevo arreglo sin todas las instancias del
 * elemento dado.
 *
 * @example
 * removeElement([1, 1, 1], 1); // => []
 * removeElement([1, 2, 1], 1); // => [2]
 * removeElement(['one', 'two', 'three'], 'two'); // => ['one', 'three']
 * removeElement(['Jesse', undefined, 'Farmer'], undefined); // => ['Jesse', 'Farmer']
 *
 * @param {object[]} array - Un arreglo
 * @param {object} element - Un elemento para eliminar
 * @returns {object[]} Una copia del arreglo de entrada con todas las instancias del
 *   elemento dado eliminadas.
 */
function removeElement(array, element) {
  // Aqui tu codigo
}

/**
 * Dado un arreglo de números, devuelve un nuevo arreglo que consiste en cada
 * número en el arreglo de entrada estrictamente mayor que la media.
 *
 * Retorna un arreglo vacío si no hay números que satisfagan la condición.
 *
 * @example
 * selectAboveMean([1, 1, 1]); // => []
 * selectAboveMean([-10, -10, 0, 10]); // => [0, 10]
 * selectAboveMean([1, 2, 3, 4, 5]); // => [4, 5]
 * selectAboveMean([100, 0, 100, 200, 100, 0]); // => [100, 100, 200, 100]
 *
 * @param {number[]} array - Un arreglo de números
 * @returns {number[]} Un nuevo arreglo que consiste en todos los números en el arreglo
 *   de entrada mayores que la media.
 */
function selectAboveMean(array) {
  // Aqui tu codigo
}

module.exports = {
  largest,
  smallest,
  longest,
  shortest,
  sum,
  mean,
  median,
  product,
  includes,
  firstIndexOf,
  lastIndexOf,
  countEvens,
  countOdds,
  countGreaterThan,
  countLessThan,
  countValue,
  selectEvens,
  selectOdds,
  selectGreaterThan,
  selectLessThan,
  selectLongerThan,
  selectShorterThan,
  allPositive,
  anyPositive,
  concat,
  removeEmpty,
  removeElement,
  selectAboveMean,
};
