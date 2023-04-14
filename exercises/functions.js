/**
 *Tu función recibirá dos funciones, f y g, que no toman ningún parámetro. Tu función tiene que llamarlas y devolver una cadena que indique cuál función devolvió el número más grande.
 *
 *Si f devuelve el número más grande, devuelve la cadena f.
 *Si g devuelve el número más grande, devuelve la cadena g.
 *Si las funciones devuelven el mismo número, devuelve la cadena neither.
 *
 *Ejemplos:
 *
 *whichIsLarger(() => 5, () => 10) ➞ "g"
 *
 *whichIsLarger(() => 25, () => 25) ➞ "neither"
 *
 *whichIsLarger(() => 505050, () => 5050) ➞ "f"
 *
 *Notas:
 *
 *Este ejercicio está diseñado como una introducción a las funciones de orden superior (funciones que utilizan otras funciones para hacer su trabajo).
 */
function whichIsLarger(f, g) {
   // Aqui tu codigo
}

/**
Crea una función que tome un "número base" como argumento. 
Esta función debe devolver otra función que tome un nuevo argumento y devuelva la suma del "número base" y el nuevo argumento.

Por favor, comprueba los ejemplos a continuación para una representación más clara del comportamiento esperado.

// Ejemplos:
// Llamando a makePlusFunction(5) devuelve una nueva función que toma una entrada,
// y devuelve el resultado al agregarle 5.

const plusFive = makePlusFunction(5);

console.log(plusFive(2)); // Output: 7

console.log(plusFive(-8)); // Output: -3

// Llamando a makePlusFunction(10) devuelve una nueva función que toma una entrada,
// y devuelve el resultado al agregarle 10.

const plusTen = makePlusFunction(10);

console.log(plusTen(0)); // Output: 10

console.log(plusTen(188)); // Output: 198

console.log(plusFive(plusTen(0))); // Output: 15

// Notas:
// Todos los inputs serán números válidos.
*/
function makePlusFunction(baseNum) {
   // Aqui tu codigo
}

module.exports = {
   whichIsLarger,
   makePlusFunction,
};
