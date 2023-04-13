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

/**
 * Crea una función que tome un arreglo que contenga solamente números y devuelva el primer elemento.
 * Ejemplos:
 *
 * getFirstValue([1, 2, 3]) ➞ 1
 * getFirstValue([80, 5, 100]) ➞ 80
 * getFirstValue([-500, 0, 50]) ➞ -500
 */
function getFirstValue(array) {
  // Aqui tu codigo
}

/**
 *Crea una función que tome un número como argumento. Suma todos los números desde 1 hasta el número que pasaste a la función. Por ejemplo, si el número de entrada es 4, entonces tu función debería devolver 10, porque 1 + 2 + 3 + 4 = 10.
 *Ejemplos:
 *addUp(4) ➞ 10
 *addUp(13) ➞ 91
 *addUp(600) ➞ 180300
 */
function addUp(num) {
  // Aqui tu codigo
}

module.exports = {
  updateNum,
  assignValue,
  missingVariable,
  addMissingCondition,
  convertir,
  getFirstValue,
  addUp,
};
