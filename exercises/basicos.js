// Te piden que devuelva la funcion updateNum a 2, actualmente devuelve 1
function updateNum() {
  let num = 1;
  return num;
}

// Te piden que asignes un valor a la variable num y retorne 5
function assignValue() {
  let num;
}

/**
 * A continuación, intentamos asignar el valor de una variable llamada numOne a la variable numTwo.
 * Pero, esa variable no ha sido declarada todavía.
 * Declara una variable llamada numOne, asignale el valor 3 y devuelve numTwo.
 */
function missingVariable() {
  let numTwo = numOne;
}

/**
 * Actualmente el codigo tiene un error en el if
 * Arreglalo quitandole los comentarios y agregando lo que falta en el if para que
 * la validacion funcione
 * debe devolver el `text`
 */
function addMissingCondition() {
  // let text = 'hello';
  // if () {
  //    text = text + ' world';
  // }
}

/**
 * Escribe una función que tome un número entero de minutos y lo convierta a segundos.
 * Ejemplos:
 *
 * convertir(5) ➞ 300
 * convertir(3) ➞ 180
 * convertir(2) ➞ 120
 */
function convertir(num) {
  // Aqui tu codigo
}

module.exports = {
  updateNum,
  assignValue,
  missingVariable,
  addMissingCondition,
  convertir,
};
