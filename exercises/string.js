/**
 * Dada una cadena de entrada y una letra objetivo, devuelve el número de veces
 * que aparece la letra objetivo en la cadena.
 *
 * Nota:
 * 1. Puedes usar un bucle `for...of` para iterar a través de los caracteres
 *    de una cadena una letra a la vez.
 * 2. Puedes acceder a un carácter específico usando string[i], como
 *    si la cadena fuera un array.
 *
 * Ambos son suficientes para completar este ejercicio.
 *
 * @example
 * countLetter('hello', 'l'); // => 2
 * countLetter('Mississippi', 's'); // => 4
 * countLetter('Mississippi', 'x'); // => 0
 * countLetter('Mississippi', 'm'); // => 0 (no hay minúsculas m)
 *
 * @param {string} string - La cadena en la que buscar
 * @param {string} letter - La letra objetivo
 * @returns {number} El número de veces que aparece la letra objetivo en la cadena de entrada
 */
function countLetter(string, letter) {
  // Aqui tu codigo
}

/**
 * Dada una cadena de entrada, devuelve una copia de la cadena con la primera letra en mayúscula.
 *
 * Ver:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
 *
 * @param {string} string - La cadena a capitalizar
 * @returns {string} Una copia de la cadena capitalizada
 */
function capitalize(string) {
  // Aqui tu codigo
}

/**
 * Dada una cadena de texto, devuelve la palabra más larga contenida en ella.
 *
 * Para nuestros propósitos, se asume que las palabras siempre están separadas por un solo espacio.
 *
 * @param {string} string - La cadena de entrada
 * @returns {string} La palabra más larga en la cadena de entrada
 */
function longestWord(string) {
  // Aqui tu codigo
}

/**
 * Dada una cadena de entrada, devuelve la palabra más corta contenida en la cadena.
 *
 * Para nuestros propósitos, asumimos que las palabras siempre están separadas por un solo espacio.
 *
 * @param {string} string - La cadena de entrada
 * @returns {string} La palabra más corta en la cadena de entrada
 */
function shortestWord(string) {
  // Aqui tu codigo
}

/**
 * Dada una cadena de entrada, un carácter a encontrar y un carácter de reemplazo, devuelve una copia de la cadena de entrada con el carácter objetivo reemplazado por el carácter de reemplazo.
 *
 * @example
 * replaceCharacter('hello', 'l', '8'); // => 'he88o'
 *
 * @param {string} string - La cadena en la que se reemplazará un carácter
 * @param {string} target - El carácter objetivo a reemplazar
 * @param {string} replaceWith - El carácter de reemplazo
 * @returns {string} Una copia de la cadena de entrada con el objetivo reemplazado por replaceWith
 */
function replaceCharacter(string, target, replaceWith) {
  // Aqui tu codigo
}

/**
 * Dada una cadena de entrada y un diccionario de reemplazo de caracteres,
 * reemplaza cada caracter encontrado como clave en el diccionario con el valor correspondiente.
 *
 * @example
 * replaceCharacters('hello', { 'h': 'y', 'l': '8' }); // => 'ye88o'
 *
 * @param {string} string - La cadena en la que se reemplazarán los caracteres
 * @param {object} replacementDict - El diccionario de reemplazo
 * @returns {string} Una copia de la cadena de entrada con las letras apropiadas
 *   reemplazadas según el diccionario de reemplazo.
 */
function replaceCharacters(string, replacementDict) {
  // Aqui tu codigo
}

/**
 * Dada una cadena de entrada, devuelve una copia de la cadena en minúsculas.
 *
 * No use el método toLowerCase incorporado en JavaScript.
 *
 * Solo se preocupe por los caracteres en el rango ASCII: http://www.asciitable.com/
 *
 * No haga nada con los caracteres que no tienen un carácter en minúsculas correspondiente,
 * no haga nada especial para un espacio, un número, un guión, etc.
 *
 * @example
 * toLowerCase('HelLo fRiends!'); // => 'hello friends!'
 *
 * @param {string} string - La cadena para convertir a minúsculas
 * @returns {string} Una copia en minúsculas de la cadena de entrada
 */
function toLowerCase(string) {
  // Aqui tu codigo
}

/**
 * Dada una cadena de entrada, devuelve una copia de la cadena con todas las letras en mayúsculas.
 *
 * No utilice toUpperCase de JavaScript.
 *
 * Solo preocúpese por los caracteres en el rango ASCII: http://www.asciitable.com/
 *
 * No haga nada con los caracteres que no tienen un carácter mayúscula correspondiente, por ejemplo,
 * no haga nada especial para un espacio, un número, un guion, etc.
 *
 * @example
 * toUpperCase('HelLo fRiends!'); // => 'HELLO FRIENDS!'
 *
 * @param {string} string - La cadena para reemplazar un carácter en
 * @returns {string} Una copia en mayúsculas de la cadena de entrada
 */
function toUpperCase(string) {
  // Aqui tu codigo
}

/**
 * Given an input string, returns a copy of the string in snake case.
 *
 * In snake case, every letter is lowercase and spaces are replaced
 * with underscores.
 *
 * See https://en.wikipedia.org/wiki/Snake_case
 *
 * @example
 * toSnakeCase('HeLlo fRIENds'); // => 'hello_friends'
 *
 * @param {string} string - The string to convert to snake case
 * @returns {string} A snake-case copy of the input string
 */
function toSnakeCase(string) {
  // Aqui tu codigo
}

/**
 * Dada una cadena de entrada, devuelve una copia de la cadena en formato de título.
 *
 * Para nuestros propósitos, el formato de título es que cada palabra esté separada por espacios con
 * la primera letra de cada palabra en mayúscula y todas las demás en minúscula.
 *
 * No hagas nada especial con caracteres no alfabéticos (números, signos de puntuación, etc.). No te preocupes por reglas especiales
 * como no capitalizar los artículos definidos (a, an, the, etc.).
 *
 * @example
 * toTitleCase('wElCoMe to THE wILD wiLD WEST!'); // => 'Welcome To The Wild Wild West!'
 *
 * @param {string} string - La cadena en la que reemplazar un carácter
 * @returns {string} Una copia en formato de título de la cadena de entrada
 */
function toTitleCase(string) {
  // Aqui tu codigo
}

/**
 * Dada una cadena de entrada, devuelve una copia de la cadena en ROT13.
 *
 * Un cifrado por sustitución es un método de cifrar una cadena de entrada
 * reemplazando cada letra de la entrada con otra letra.
 *
 * ROT13 es un cifrado por sustitución donde cada letra se reemplaza por
 * la letra que está 13 letras después en el alfabeto, volviendo al
 * comienzo del alfabeto si es necesario.
 *
 * Por ejemplo, cada instancia de 'A' se reemplaza con 'N', 'M' con 'Z',
 * 'R' con 'E', y así sucesivamente.
 *
 * Ver https://en.wikipedia.org/wiki/ROT13
 *
 * Juega con: https://rot13.com/
 *
 * Debido a que hay 26 letras en el alfabeto, podemos "descifrar" una
 * cadena cifrada en rot13 aplicando rot13 nuevamente.
 *
 * (No, esto no es particularmente seguro).
 *
 * @example
 * rot13('¡Hola, mundo!'); // => '¡Ubyb, zhaqb!'
 * rot13('¡Ubyb, zhaqb!'); // => '¡Hola, mundo!'
 *
 * @param {string} string - La cadena a reemplazar un carácter en
 * @returns {string} Una copia ROT13 de la cadena de entrada
 */
function rot13(string) {
  // Aqui tu codigo
}

module.exports = {
  countLetter,
  capitalize,
  longestWord,
  shortestWord,
  replaceCharacter,
  replaceCharacters,
  toLowerCase,
  toUpperCase,
  toSnakeCase,
  toTitleCase,
  rot13,
};
