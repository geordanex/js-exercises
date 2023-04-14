/*
  Devuelve verdadero si el número dado es 0 y falso en caso contrario.
*/
function isCero(num) {
   // Aqui va tu codigo
}

// Devuelve true si el número dado es positivo (mayor que 0) y falso en caso contrario.
function isPositiveNumber(num) {
   // Aqui va tu codigo
}

// Devuelve verdadero si el número dado es negativo (menor que 0) y falso en caso contrario.
function isNegativeNumber(num) {
   // Aqui va tu codigo
}

/**
 * Devuelve verdadero si el número dado es par y falso en caso contrario.
 *
 * Un número entero es par si el resto es 0 después de dividirlo por 2.
 * De manera equivalente, un número entero es par si puede escribirse como 2*k
 * para algún entero k.
 *
 * Si un número entero no es par, lo llamamos "impar".
 *
 * Pares: -10, -12, -104, 0, 16, 18, 2
 * Impares: -11, -13, -103, -1, 1, 17, 19, 3
 */
function isEven(num) {
   // Aqui va tu codigo
}

/**
 * Devuelve verdadero si el número dado es impar (resto de la división por 2 es 1) y falso en caso contrario.
 * Un entero es impar si se puede escribir como 2*k + 1 para algún entero k.
 * Si un número no es impar, lo llamamos "par".
 *
 * Par: -10, -12, -104, 0, 16, 18, 2
 * Impar: -11, -13, -103, -1, 1, 17, 19, 3
 */
function isOdd(num) {
   // Aqui va tu codigo
}

/**
 *  Dados dos números positivos, num y d, devuelve el resto de num después de dividirlo por d.
 *
 *  No uses el operador de módulo (%) incorporado. El objetivo es obtener
 *  comprensión de cómo funciona el operador de módulo.
 *
 *  @example
 *  remainderOf(10, 1); // => 0
 *  remainderOf(10, 2); // => 0
 *  remainderOf(10, 3); // => 1
 *  remainderOf(10, 4); // => 2
 *  remainderOf(129, 17); // => 10
 *
 */

function remainderOf(num, d) {
   // Aqui va tu codigo
}

/**
 *
 * Dados dos números enteros, n y d, devuelve verdadero si n es múltiplo de d y falso en caso contrario.
 * "n es múltiplo de d" significa que d divide a n sin dejar resto. Equivalente a:
 *
 * n = d*k para algún entero k
 * d es un divisor de n
 * d es un factor de n
 * n es múltiplo de d
 *
 */
function esMultiploDe(n, d) {
   // Aqui va tu codigo
}

/**
 *
 *    Dados una base y un exponente entero positivo, devuelve la base elevada a la potencia del exponente.
 *
 *    @example
 *    power(2, 3) // => 8 (es decir, 2 * 2 * 2)
 *    power(-2, 3) // => -4 (es decir, -2 * -2 * -2)
 *    power(5, 6) // => 15625 (es decir, 5 * 5 * 5 * 5 * 5 * 6)
 */
function power(base, exp) {
   // Aqui va tu codigo
}

/**
 *
 *    Dados dos enteros no negativos, "num" y "base", devuelve true si num es una potencia de base y false en caso contrario.
 *    Un número es una potencia de "base" si se puede escribir como base**k para algún entero no negativo k, donde "**" representa el operador de exponenciación.
 *
 *    Por ejemplo, 8 es una potencia de 2 ya que 8 es igual a 2 * 2 * 2 === 2**3.
 *    Por el contrario, 81 no es una potencia de 2 ya que no existe un entero k tal que 81 === 2**k.
 *    Sin embargo, 81 sí es una potencia de 3 ya que 81 === 3**4.
 *
 *    @example
 *    isPowerOf(2, 2) // => true
 *    isPowerOf(3, 3) // => true
 *    isPowerOf(10, 2) // => false
 */
function isPowerOf(num, base) {
   // Aqui va tu codigo
}

/**
 *
 *   Dado un número entero no negativo como entrada, devuelve true si es una potencia de 2
 *   y false de lo contrario.
 *
 *   Un número es una potencia de 2 si puede ser escrito como 2**k para algún entero no negativo k,
 *   donde "**" representa el operador de exponenciación.
 *
 *   Por ejemplo, 8 es una potencia de 2 porque 8 es igual a 2 * 2 * 2 === 2**3.
 *   Por el contrario, 81 no es una potencia de 2 porque no existe un entero k tal que
 *   81 === 2**k.
 *
 *    @example
 *    isPowerOfTwo(2) // => true
 *    isPowerOfTwo(3) // => false
 *    isPowerOfTwo(4) // => true
 *    isPowerOfTwo(2**20) // => true
 *    isPowerOfTwo(2**20 + 1) // => false
 */
function isPowerofTwo(num) {
   // Aqui va tu codigo
}

/**
 *
 *    Determine si el número entero dado es un cuadrado perfecto.
 *    Un entero n es un cuadrado perfecto si hay algún otro entero k tal que
 *    k * k === n. Es decir, si la raíz cuadrada de n también es un entero.
 *
 *    Advertencia: Si utiliza Math.sqrt, obtendrá respuestas incorrectas. Trate de encontrar
 *    otra manera.
 *
 *    @example
 *    isPerfectSquare(-1); // => false (ningún número entero al cuadrado puede ser negativo)
 *    isPerfectSquare(0); // => true
 *    isPerfectSquare(1); // => true
 *    isPerfectSquare(2); // => false
 *    isPerfectSquare(9); // => true (ya que 3*3 es 9)
 */
function isPerfectSquare(num) {
   // Aqui va tu codigo
}

/**
 *
 *    Dado un entero positivo, devuelve una array (arreglo) que consiste en todos sus factores
 *    ordenados de menor a mayor.
 *
 *    @example
 *    factors(2); // => [1, 2]
 *    factors(4); // => [1, 2, 4]
 *    factors(12); // => [1, 2, 3, 4, 6, 12]
 */
function factors(num) {
   // Aqui va tu codigo
}

/**
 *
 *    Devuelve true si el número entero positivo dado es primo y false en caso contrario.
 *    Un número entero positivo es primo si sus únicos factores son 1 y el mismo.
 *    Ver https://es.wikipedia.org/wiki/N%C3%BAmero_primo
 *
 *    Primos: 2, 3, 5, 7, 11, 13, 17, ...
 *
 *    @param {num} n - El número entero positivo a verificar si es primo.
 *    @returns {boolean} true si el número es primo, false en caso contrario.
 *
 *    @example
 *    isPrime(2); // => true
 *    isPrime(4); // => false
 *    isPrime(11); // => true
 *    isPrime(15); // => false
 */
function isPrime(n) {
   // Aqui va tu codigo
}

/**
 *
 *    Dado un entero positivo, devuelve un array con todos sus factores primos
 *    ordenados de menor a mayor. Cada primo aparece en el array tantas veces como
 *    veces divide al entero dado.
 *
 *    @example
 *    primeFactors(2); // => [2]
 *    primeFactors(2 * 2); // => [2, 2]
 *    primeFactors(2 * 2 * 3); // => [2, 2, 3]
 *    primeFactors(2 * 2 * 3 * 17 * 197); // => [2, 2, 3, 17, 197]
 *    primeFactors(917329); // => [7, 7, 97, 193]
 */
function primeFactors(num) {
   // Aqui va tu codigo
}

/**
 *
 *    Dados dos enteros, devuelve la suma de todos los enteros entre esos dos enteros, incluyéndolos.
 *    Por ejemplo:
 *
 *    @example
 *    sumOfRange(1, 5) // => 15 (es decir, 1 + 2 + 3 + 4 + 5)
 *    sumOfRange(-3, 4) // => 4 (es decir, -3 + -2 + -1 + 0 + 1 + 2 + 3 + 4)
 */
function sumOfRange(n1, n2) {
   // Aqui va tu codigo
}

/**
 *
 *    Dado un entero no negativo, devuelve su factorial.
 *    Si n es un entero no negativo, su factorial se define como
 *    n * (n - 1) * (n - 2) * ... * 2 * 1.
 *
 *    Por ejemplo, el factorial
 *    de 5 es 5 * 4 * 3 * 2 * 1 o 120.
 *
 *    En papel, escribimos `5!` para representar el factorial de 5, pero en el código
 *    definiríamos una función como factorial(5).
 *    Ver https://en.wikipedia.org/wiki/Factorial
 *
 *    La función factorial crece muy rápido.
 *    @example
 *    factorial(1); // => 1
 *    factorial(2); // => 2
 *    factorial(3); // => 6
 *    factorial(5); // => 120
 *    factorial(10); // => 3628800
 */
function factorial(num) {
   // Aqui va tu codigo
}

/**
 * Dada una temperatura en grados Celsius, devuelve la temperatura en grados Fahrenheit.
 *
 * @param {number} temp - La temperatura en grados Celsius
 * @returns {number} La temperatura en grados Fahrenheit
 */
function celsiusToFahrenheit(temp) {
   // Aqui va tu codigo
}

/**
 * Dada una temperatura en grados Fahrenheit, devuelve la temperatura en grados Celsius.
 *
 * @param {number} temp - La temperatura en grados Fahrenheit
 * @returns {number} La temperatura en grados Celsius
 */
function fahrenheitToCelsius(temp) {
   // Aqui va tu codigo
}

/**
 *
 *    Dado un número entero no negativo n, devuelve el n-ésimo número de Fibonacci.
 *    Los números de Fibonacci se definen así:
 *    fib(n): 0 1 1 2 3 5 8 13 21 34 55 ...
 *        n: 0  1  2  3  4  5  6   7   8   9  10  ...
 *
 *  Es decir, comenzando con 0 y 1, el siguiente número de Fibonacci es la suma
 *  de los dos anteriores. El "0-ésimo" número de Fibonacci es 0 y el primer
 *  número de Fibonacci es 1.
 *  Ver https://es.wikipedia.org/wiki/Sucesi%C3%B3n_de_Fibonacci
 *
 *  @example
 *  fibonacci(0); // => 0
 *  fibonacci(1); // => 1
 *  fibonacci(10); // => 55
 *  fibonacci(12); // => 144
 *
 *  @param {number} n - Un número entero no negativo
 *  @returns {number} El n-ésimo número de Fibonacci
 */
function fibonacci(n) {
   // Aqui va tu codigo
}

module.exports = {
   isCero,
   isPositiveNumber,
   isNegativeNumber,
   isEven,
   isOdd,
   remainderOf,
   esMultiploDe,
   power,
   isPowerOf,
   isPowerofTwo,
   isPerfectSquare,
   factors,
   isPrime,
   primeFactors,
   sumOfRange,
   factorial,
   celsiusToFahrenheit,
   fahrenheitToCelsius,
   fibonacci,
};
