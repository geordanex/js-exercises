const {
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
} = require("../exercises/arrays");

describe("largest", () => {
  it("debería devolver el número más grande del array", () => {
    expect(largest([1, 2, 3, 4, 5])).toBe(5);
    expect(largest([-5, -3, 0, 3, 5])).toBe(5);
    expect(largest([10])).toBe(10);
  });
});

describe("smallest", () => {
  it("retorna el número más pequeño en un arreglo de números", () => {
    expect(smallest([1, 2, 3])).toBe(1);
    expect(smallest([0, 5, 7, 2])).toBe(0);
    expect(smallest([-1, 0, 1])).toBe(-1);
  });

  it("deberia manejar un array vacio devolviendo undefined", () => {
    expect(findSmallestElement([])).toBeUndefined();
  });
});

describe("longest", () => {
  it("retorna la cadena más larga del array", () => {
    const arr = ["manzana", "banana", "naranja", "pera"];
    expect(longest(arr)).toEqual("manzana");
  });

  it("retorna la cadena vacía si el array está vacío", () => {
    const arr = [];
    expect(longest(arr)).toEqual("");
  });
});

describe("shortest function", () => {
  test("should return the shortest string in the array", () => {
    const arr = ["apple", "banana", "kiwi", "pear"];
    expect(shortest(arr)).toBe("kiwi");
  });

  test("should return the only string in the array", () => {
    const arr = ["orange"];
    expect(shortest(arr)).toBe("orange");
  });

  test("should return an empty string if the array is empty", () => {
    const arr = [];
    expect(shortest(arr)).toBe("");
  });

  test("should return the first shortest string in the array if there are multiple shortest strings", () => {
    const arr = ["pear", "kiwi", "apple", "cat", "dog", "rat"];
    expect(shortest(arr)).toBe("cat");
  });
});

describe("sum", () => {
  test("debería devolver la suma de un array de números", () => {
    expect(sum([1, 2, 3])).toBe(6);
    expect(sum([-10, 10])).toBe(0);
    expect(sum([0, 0, 0])).toBe(0);
    expect(sum([5])).toBe(5);
  });
});

describe("mean", () => {
  test("calcula el promedio de los números en un arreglo", () => {
    expect(mean([30, 10, 20])).toBe(20);
    expect(mean([-10, 10])).toBe(0);
    expect(mean([0, 0, 0])).toBe(0);
    expect(mean([1, 2, 3, 4])).toBe(2.5);
  });

  test("retorna NaN si el arreglo es vacío", () => {
    expect(mean([])).toBeNaN();
  });
});

describe("median", () => {
  test("calcula la mediana de una lista de números impares", () => {
    expect(median([1, 2, 14, 199, 5])).toBe(5);
  });

  test("calcula la mediana de una lista de números pares", () => {
    expect(median([-10, 20, 400, 10])).toBe(15);
  });

  test("devuelve NaN para una lista vacía", () => {
    expect(median([])).toBeNaN();
  });

  test("median of [1, 2, 3, 4, 5] is 3", () => {
    expect(median([1, 2, 3, 4, 5])).toBe(3);
  });

  test("median of [1, 2, 3, 4, 5, 6] is 3.5", () => {
    expect(median([1, 2, 3, 4, 5, 6])).toBe(3.5);
  });

  test("median of [5] is 5", () => {
    expect(median([5])).toBe(5);
  });

  test("median of [5, 3, 10, 4, 1] is 4", () => {
    expect(median([5, 3, 10, 4, 1])).toBe(4);
  });

  test("median of [10, 20, 30, 40] is 25", () => {
    expect(median([10, 20, 30, 40])).toBe(25);
  });

  test("median of [7, 1, 8, 2, 9] is 7", () => {
    expect(median([7, 1, 8, 2, 9])).toBe(7);
  });
});

describe("product", () => {
  test("devuelve el producto de los números en un arreglo", () => {
    expect(product([2, 4, 6])).toBe(48);
    expect(product([-10, 10])).toBe(-100);
  });

  test("devuelve 0 si el arreglo está vacío", () => {
    expect(product([])).toBe(0);
  });

  test("devuelve 0 si algún número en el arreglo es 0", () => {
    expect(product([2, 0, 4])).toBe(0);
    expect(product([0, 0, 0])).toBe(0);
  });

  test("devuelve NaN si algún número en el arreglo es NaN", () => {
    expect(product([2, NaN, 4])).toBe(NaN);
  });
});

describe("includes", () => {
  test("devuelve verdadero cuando el valor se encuentra en el array", () => {
    const resultado = includes([1, 2, 3], 2);
    expect(resultado).toBe(true);
  });

  test("devuelve falso cuando el valor no se encuentra en el array", () => {
    const resultado = includes([1, 2, 3], 4);
    expect(resultado).toBe(false);
  });

  test("trata correctamente los valores de tipo distinto", () => {
    const resultado = includes(["hola", true, 42, null], null);
    expect(resultado).toBe(true);
  });
});

describe("firstIndexOf", () => {
  it("debe devolver el índice de la primera aparición del valor si se encuentra en el array", () => {
    expect(firstIndexOf([10, 20, 30, 20], 20)).toBe(1);
    expect(firstIndexOf(["giraffe", "giraffe", "banana"], "giraffe")).toBe(0);
    expect(firstIndexOf(["foo", { bar: "baz" }, 42, "foo"], "foo")).toBe(0);
  });

  it("debe devolver -1 si el valor no se encuentra en el array", () => {
    expect(firstIndexOf([10, 20, 30, 20], 17)).toBe(-1);
    expect(firstIndexOf(["giraffe", "giraffe", "banana"], "lemons")).toBe(-1);
    expect(firstIndexOf(["foo", { bar: "baz" }, 42, "foo"], 43)).toBe(-1);
  });

  it("debe manejar arrays vacíos y valores nulos o undefined", () => {
    expect(firstIndexOf([], 42)).toBe(-1);
    expect(firstIndexOf([null, undefined], null)).toBe(0);
    expect(firstIndexOf([null, undefined], undefined)).toBe(1);
  });

  it("debe manejar la búsqueda de valores primitivos y no primitivos", () => {
    const obj1 = { a: 1 };
    const obj2 = { a: 1 };
    expect(firstIndexOf([obj1, obj2, { b: 2 }], obj1)).toBe(0);
    expect(firstIndexOf([obj1, obj2, { b: 2 }], { a: 1 })).toBe(-1);
  });
});

describe("lastIndexOf", () => {
  it("debería devolver el índice de la última ocurrencia del valor en el arreglo", () => {
    expect(lastIndexOf([10, 20, 30, 20], 20)).toBe(3);
    expect(lastIndexOf(["giraffe", "giraffe", "banana"], "giraffe")).toBe(1);
  });

  it("debería devolver -1 si el valor no se encuentra en el arreglo", () => {
    expect(lastIndexOf([10, 20, 30, 20], 17)).toBe(-1);
    expect(lastIndexOf(["waffle", "giraffe", "banana"], "pancake")).toBe(-1);
  });

  it("debería manejar arreglos con diferentes tipos de datos", () => {
    expect(lastIndexOf([10, "giraffe", true, null], true)).toBe(2);
    expect(lastIndexOf(["waffle", "giraffe", "banana"], 42)).toBe(-1);
  });
});

describe("countEvens", () => {
  test("debería devolver la cantidad de números pares en el arreglo", () => {
    expect(countEvens([1, 2, 3, 4, 5])).toBe(2);
    expect(countEvens([10, 10, 10])).toBe(3);
    expect(countEvens([1, 1, 1, 2])).toBe(2);
  });

  test("debería devolver 0 si el arreglo está vacío", () => {
    expect(countEvens([])).toBe(0);
  });

  test("debería devolver 0 si no hay números pares en el arreglo", () => {
    expect(countEvens([1, 3, 5, 7])).toBe(0);
  });
});

describe("countOdds", () => {
  it("debería devolver el número de enteros impares en el array", () => {
    expect(countOdds([1, 2, 3, 4, 5, 19])).toBe(4);
    expect(countOdds([10, 10, 10])).toBe(0);
    expect(countOdds([1, 1, 1, 2])).toBe(3);
    expect(countOdds([4, 6, 8, 2, 0])).toBe(0);
    expect(countOdds([])).toBe(0);
  });
});

describe("countGreaterThan", () => {
  test("Debe retornar el conteo de elementos mayores al valor umbral", () => {
    expect(countGreaterThan([1, 2, 3, 4, 5], 2)).toEqual(3);
    expect(countGreaterThan([1, 2, 3, 4, 5], 17)).toEqual(0);
    expect(countGreaterThan([1, 2, 1, 2, 3, 4, 1, 2, 1], 1)).toEqual(5);
    expect(countGreaterThan([10, 10, 10, -10, 15], 10)).toEqual(1);
  });

  test("countGreaterThan retorna la cantidad de elementos mayores al umbral (threshold) especificado", () => {
    expect(countGreaterThan([1, 2, 3, 4, 5], 3)).toBe(2);
    expect(countGreaterThan([1, 2, 3, 4, 5], 0)).toBe(5);
    expect(countGreaterThan([-1, -2, -3, -4, -5], -3)).toBe(2);
    expect(countGreaterThan([1.1, 2.2, 3.3, 4.4, 5.5], 3.3)).toBe(2);
    expect(countGreaterThan([], 0)).toBe(0);
  });
});

describe("countLessThan", () => {
  it("Debería devolver la cantidad de números estrictamente menores al umbral", () => {
    expect(countLessThan([1, 2, 3, 4, 5], 2)).toBe(1);
    expect(countLessThan([1, 2, 3, 4, 5], 17)).toBe(5);
    expect(countLessThan([1, 2, 1, 2, 3, 4, 1, 2, 1], 1)).toBe(0);
    expect(countLessThan([10, 10, 10, -10, 15, 7], 10)).toBe(2);
  });

  test("countLessThan devuelve el número correcto de elementos menores al umbral", () => {
    expect(countLessThan([1, 2, 3, 4, 5], 3)).toBe(2);
    expect(countLessThan([10, 20, 30, 40], 50)).toBe(4);
    expect(countLessThan([-1, -2, -3, -4], -1)).toBe(0);
    expect(countLessThan([0.5, 0.2, 0.8, 1.1, 1.5], 1)).toBe(2);
  });

  test("countLessThan devuelve cero cuando todos los elementos son mayores o iguales al umbral", () => {
    expect(countLessThan([1, 2, 3], 1)).toBe(0);
    expect(countLessThan([10, 20, 30], 20)).toBe(0);
  });

  test("countLessThan devuelve cero cuando el array es vacío", () => {
    expect(countLessThan([], 5)).toBe(0);
  });
});

describe("countValue", () => {
  test("debería devolver el número de veces que un valor aparece en el arreglo", () => {
    expect(countValue([1, 2, 3, 4, 5], 2)).toBe(1);
    expect(countValue([1, 2, 3, 4, 5], 17)).toBe(0);
    expect(countValue([1, 2, 1, 2, 3, 4, 1, 2, 1], 1)).toBe(4);
    expect(countValue([10, 10, 10, -10], 10)).toBe(3);
    expect(countValue(["hello", "bananas", "hello"], "hello")).toBe(2);
    expect(countValue(["hello", "bananas", "hello"], "giraffe")).toBe(0);
  });
});

describe("selectEvens", () => {
  it("debe devolver un array vacío cuando no hay números pares", () => {
    expect(selectEvens([1, 3, 5])).toEqual([]);
  });

  it("debe devolver solo los números pares", () => {
    expect(selectEvens([1, 2, 3, 4, 5])).toEqual([2, 4]);
    expect(selectEvens([10, 2, 19, 10])).toEqual([10, 2, 10]);
    expect(selectEvens([1, 1, 1, 2])).toEqual([2]);
  });
});

describe("selectOdds", () => {
  test("devuelve un arreglo con los números impares del arreglo de entrada", () => {
    expect(selectOdds([1, 2, 3, 4, 5])).toEqual([1, 3, 5]);
    expect(selectOdds([10, 2, 19, 10, -103])).toEqual([19, -103]);
    expect(selectOdds([1, 1, 2, 1])).toEqual([1, 1, 1]);
    expect(selectOdds([10, 20, 30])).toEqual([]);
  });

  test("devuelve un arreglo vacío si no hay números impares en el arreglo de entrada", () => {
    expect(selectOdds([2, 4, 6, 8])).toEqual([]);
    expect(selectOdds([])).toEqual([]);
  });
});

describe("selectGreaterThan", () => {
  it("debe devolver un array vacío si no hay números mayores al umbral", () => {
    expect(selectGreaterThan([1, 2, 3], 5)).toEqual([]);
    expect(selectGreaterThan([], 0)).toEqual([]);
    expect(selectGreaterThan([-1, -2, -3], -1)).toEqual([]);
  });

  it("debe devolver un nuevo array con los números mayores al umbral", () => {
    expect(selectGreaterThan([1, 2, 3], 2)).toEqual([3]);
    expect(selectGreaterThan([1, 2, 1, 2, 3, 4, 1, 2, 1], 1)).toEqual([
      2, 2, 3, 4, 2,
    ]);
    expect(selectGreaterThan([10, 10, 10, -10, 15], 10)).toEqual([15]);
  });

  it("no debe modificar el array original", () => {
    const arr = [1, 2, 3];
    selectGreaterThan(arr, 1);
    expect(arr).toEqual([1, 2, 3]);
  });
});

describe("selectLessThan", () => {
  it("debería devolver un array vacío si no hay números menores al umbral", () => {
    expect(selectLessThan([1, 2, 3], 0)).toEqual([]);
    expect(selectLessThan([1, 2, 3, 4, 5], -1)).toEqual([]);
  });

  it("debería devolver un nuevo array con números menores que el umbral", () => {
    expect(selectLessThan([1, 2, 3, 4, 5], 3)).toEqual([1, 2]);
    expect(selectLessThan([-1, 0, 1, 2, 3], 2)).toEqual([-1, 0, 1]);
    expect(selectLessThan([1, 2, 3, 4, 5], 2)).toEqual([1]);
    expect(selectLessThan([1, 2, 3, 4, 5], 17)).toEqual([1, 2, 3, 4, 5]);
    expect(selectLessThan([-20, 2, 1, 0, 1, 2, 1, 2], 1)).toEqual([-20, 0]);
    expect(selectLessThan([10, 4, 10, -10, 15], 10)).toEqual([4, -10]);
  });

  it("maneja otros casos correctamente", () => {
    expect(selectLessThan([], 0)).toEqual([]);
    expect(selectLessThan([1], 1)).toEqual([]);
    expect(selectLessThan([1], -1)).toEqual([1]);
    expect(selectLessThan([1, 2, 3], -100)).toEqual([1, 2, 3]);
    expect(selectLessThan([1, 2, 3], 100)).toEqual([]);
  });
});

describe("selectLongerThan", () => {
  it("Devuelve un arreglo vacío si no existen strings con una longitud mayor al umbral dado", () => {
    expect(selectLongerThan(["a", "bb", "ccc"], 3)).toEqual([]);
  });

  it("Devuelve un arreglo con todos los strings si se ingresa un umbral menor a cero", () => {
    expect(selectLongerThan(["a", "bb", "ccc"], -1)).toEqual([
      "a",
      "bb",
      "ccc",
    ]);
  });

  it("Devuelve un arreglo con todos los strings si se ingresa un umbral igual a cero", () => {
    expect(selectLongerThan(["a", "bb", "ccc"], 0)).toEqual(["a", "bb", "ccc"]);
  });

  it("Devuelve un arreglo con los strings de longitud mayor a 2", () => {
    expect(selectLongerThan(["a", "bb", "ccc"], 2)).toEqual(["ccc"]);
  });

  it("Devuelve un arreglo con los strings de longitud mayor a 1", () => {
    expect(selectLongerThan(["a", "bb", "ccc"], 1)).toEqual(["bb", "ccc"]);
  });

  it("Devuelve un arreglo con todos los strings si se ingresa un umbral mayor a la longitud de todos los strings", () => {
    expect(selectLongerThan(["a", "bb", "ccc"], 10)).toEqual([
      "a",
      "bb",
      "ccc",
    ]);
  });
});

describe("selectShorterThan", () => {
  it("debería devolver una matriz vacía si no hay cadenas con longitud menor que el umbral", () => {
    expect(selectShorterThan(["", "aaa", "bb", "c", "dddd"], -1)).toEqual([]);
  });

  it("debería devolver la matriz original si todas las cadenas tienen una longitud mayor o igual que el umbral", () => {
    expect(selectShorterThan(["", "aaa", "bb", "c", "dddd"], 0)).toEqual([]);
    expect(selectShorterThan(["", "aaa", "bb", "c", "dddd"], 1)).toEqual([""]);
    expect(selectShorterThan(["", "aaa", "bb", "c", "dddd"], 2)).toEqual([
      "",
      "c",
    ]);
    expect(selectShorterThan(["", "aaa", "bb", "c", "dddd"], 3)).toEqual([
      "",
      "bb",
      "c",
    ]);
    expect(selectShorterThan(["", "aaa", "bb", "c", "dddd"], 4)).toEqual([
      "",
      "aaa",
      "bb",
      "c",
    ]);
    expect(selectShorterThan(["", "aaa", "bb", "c", "dddd"], 5)).toEqual([
      "",
      "aaa",
      "bb",
      "c",
      "dddd",
    ]);
  });
});

describe("allPositive", () => {
  test("retorna true si todos los elementos son positivos", () => {
    expect(allPositive([1, 2, 3, 4, 5])).toBe(true);
    expect(allPositive([100, 500, 0.5])).toBe(true);
    expect(allPositive([0.1, 0.01, 0.001])).toBe(true);
  });

  test("retorna false si algún elemento es negativo o cero", () => {
    expect(allPositive([1, 2, -3, 4, 5])).toBe(false);
    expect(allPositive([-100, 500, 0.5])).toBe(false);
    expect(allPositive([0, 0, 1])).toBe(false);
  });

  test("retorna true si el arreglo está vacío", () => {
    expect(allPositive([])).toBe(true);
  });
});

describe("anyPositive", () => {
  test("devuelve verdadero cuando algún número en la matriz es positivo", () => {
    expect(anyPositive([1, 2, 3, 4, 5])).toBe(true);
    expect(anyPositive([1, 2, -3, 4, 5])).toBe(true);
    expect(anyPositive([0, 0, 1])).toBe(true);
    expect(anyPositive([-10, -10, 1])).toBe(true);
  });

  test("devuelve falso cuando ningún número en la matriz es positivo", () => {
    expect(anyPositive([-10, -10, -10])).toBe(false);
  });
});

describe("concat", () => {
  test("concatena dos arreglos", () => {
    const left = [1, 2, 3];
    const right = [4, 5, 6];
    const expected = [1, 2, 3, 4, 5, 6];
    const result = concat(left, right);
    expect(result).toEqual(expected);
  });

  test("concatena dos arreglos con tipos de datos diferentes", () => {
    const left = [-10, undefined];
    const right = [true, "waffles"];
    const expected = [-10, undefined, true, "waffles"];
    const result = concat(left, right);
    expect(result).toEqual(expected);
  });

  test("concatena dos arreglos vacíos", () => {
    const left = [];
    const right = [];
    const expected = [];
    const result = concat(left, right);
    expect(result).toEqual(expected);
  });

  test("concatena un arreglo vacío y uno no vacío", () => {
    const left = [20, 104];
    const right = [];
    const expected = [20, 104];
    const result = concat(left, right);
    expect(result).toEqual(expected);
  });

  test("concatena un arreglo no vacío y uno vacío", () => {
    const left = [];
    const right = ["hello", "world"];
    const expected = ["hello", "world"];
    const result = concat(left, right);
    expect(result).toEqual(expected);
  });
});

describe("removeEmpty", () => {
  test("retorna una nueva matriz sin valores vacíos", () => {
    expect(removeEmpty([null, "", ""])).toEqual([]);
    expect(removeEmpty(["Jesse", undefined, "Farmer"])).toEqual([
      "Jesse",
      "Farmer",
    ]);
    expect(removeEmpty(["one", "", "two", "", "three"])).toEqual([
      "one",
      "two",
      "three",
    ]);
  });

  test("no modifica la matriz original", () => {
    const input = [null, "", ""];
    removeEmpty(input);
    expect(input).toEqual([null, "", ""]);
  });
});

describe("removeElement", () => {
  it("debe devolver un array nuevo sin las instancias del elemento dado", () => {
    expect(removeElement([1, 1, 1], 1)).toEqual([]);
    expect(removeElement([1, 2, 1], 1)).toEqual([2]);
    expect(removeElement(["one", "two", "three"], "two")).toEqual([
      "one",
      "three",
    ]);
    expect(removeElement(["Jesse", undefined, "Farmer"], undefined)).toEqual([
      "Jesse",
      "Farmer",
    ]);
  });
  it("elimina varios elementos", () => {
    expect(removeElement([1, 2, 3, 2], 2)).toEqual([1, 3]);
    expect(
      removeElement(["hola", "adios", "hola", "hasta luego"], "hola")
    ).toEqual(["adios", "hasta luego"]);
    expect(removeElement(["a", "b", "c", "d", "a", "e"], "a")).toEqual([
      "b",
      "c",
      "d",
      "e",
    ]);
  });

  it("maneja correctamente tipos de datos mixtos", () => {
    expect(
      removeElement(["1", 1, true, "hello", null, undefined], null)
    ).toEqual(["1", 1, true, "hello", undefined]);
    expect(removeElement([{}, [], "hola", 0, ""], [])).toEqual(["hola", 0, ""]);
  });

  it("devuelve una copia del array original", () => {
    const array = [1, 2, 3];
    const result = removeElement(array, 2);
    expect(result).not.toBe(array);
    expect(array).toEqual([1, 2, 3]);
  });

  it("devuelve un array vacío si se eliminan todos los elementos", () => {
    expect(removeElement(["hola", "hola", "hola"], "hola")).toEqual([]);
  });

  it("devuelve el array original si el elemento no está presente", () => {
    expect(removeElement(["hola", "adios"], "chau")).toEqual(["hola", "adios"]);
  });
});

describe("selectAboveMean", () => {
  it("debería devolver un array vacío si no hay números mayores que la media", () => {
    expect(selectAboveMean([1, 1, 1])).toEqual([]);
  });

  it("debería devolver un array con los números mayores que la media", () => {
    expect(selectAboveMean([-10, -10, 0, 10])).toEqual([0, 10]);
    expect(selectAboveMean([1, 2, 3, 4, 5])).toEqual([4, 5]);
    expect(selectAboveMean([100, 0, 100, 200, 100, 0])).toEqual([
      100, 100, 200, 100,
    ]);
  });

  it("debería devolver un array vacío si el array de entrada está vacío", () => {
    expect(selectAboveMean([])).toEqual([]);
  });
});
