const isCero = require("../exercises/basics.js");

describe("isCero", () => {
  test("debería retornar verdadero para el número 0", () => {
    expect(isCero(0)).toBe(true);
  });

  test("debería retornar falso para números distintos de 0", () => {
    expect(isCero(1)).toBe(false);
    expect(isCero(-1)).toBe(false);
    expect(isCero(0.1)).toBe(false);
    expect(isCero(-0.1)).toBe(false);
    expect(isCero(Infinity)).toBe(false);
    expect(isCero(-Infinity)).toBe(false);
    expect(isCero(NaN)).toBe(false);
    expect(isCero("0")).toBe(false);
    expect(isCero(true)).toBe(false);
    expect(isCero(null)).toBe(false);
    expect(isCero(undefined)).toBe(false);
    expect(isCero({})).toBe(false);
    expect(isCero([])).toBe(false);
  });
});

describe("positiveNumber", () => {
  test("Debería devolver true para números positivos", () => {
    expect(positiveNumber(3)).toBe(true);
    expect(positiveNumber(0.1)).toBe(true);
    expect(positiveNumber(1000)).toBe(true);
  });

  test("Debería devolver false para números negativos", () => {
    expect(positiveNumber(-1)).toBe(false);
    expect(positiveNumber(-0.5)).toBe(false);
    expect(positiveNumber(-1000)).toBe(false);
  });

  test("Debería devolver false para el número 0", () => {
    expect(positiveNumber(0)).toBe(false);
  });
});

describe("isNegativeNumber", () => {
  test("Debería devolver true para -5", () => {
    expect(isNegativeNumber(-5)).toBe(true);
  });

  test("Debería devolver true para -3.14", () => {
    expect(isNegativeNumber(-3.14)).toBe(true);
  });

  test("Debería devolver false para 0", () => {
    expect(isNegativeNumber(0)).toBe(false);
  });

  test("Debería devolver false para 5", () => {
    expect(isNegativeNumber(5)).toBe(false);
  });

  test("Debería devolver false para 3.14", () => {
    expect(isNegativeNumber(3.14)).toBe(false);
  });
});

describe("isEven", () => {
  test("Debe devolver true para números pares", () => {
    expect(isEven(0)).toBe(true);
    expect(isEven(-10)).toBe(true);
    expect(isEven(16)).toBe(true);
    expect(isEven(18)).toBe(true);
  });

  test("Debe devolver false para números impares", () => {
    expect(isEven(-11)).toBe(false);
    expect(isEven(-13)).toBe(false);
    expect(isEven(17)).toBe(false);
    expect(isEven(19)).toBe(false);
  });

  test("Debe devolver true para el número 2", () => {
    expect(isEven(2)).toBe(true);
  });

  test("Debe devolver false para el número 1", () => {
    expect(isEven(1)).toBe(false);
  });

  test("Debe devolver true para números negativos pares", () => {
    expect(isEven(-10)).toBe(true);
    expect(isEven(-12)).toBe(true);
    expect(isEven(-104)).toBe(true);
  });

  test("Debe devolver false para números negativos impares", () => {
    expect(isEven(-11)).toBe(false);
    expect(isEven(-13)).toBe(false);
    expect(isEven(-103)).toBe(false);
  });
});

describe("esImpar", () => {
  test("retorna verdadero para numeros impares", () => {
    expect(esImpar(1)).toBe(true);
    expect(esImpar(3)).toBe(true);
    expect(esImpar(-11)).toBe(true);
    expect(esImpar(-7)).toBe(true);
  });

  test("retorna falso para numeros pares", () => {
    expect(esImpar(2)).toBe(false);
    expect(esImpar(4)).toBe(false);
    expect(esImpar(-10)).toBe(false);
    expect(esImpar(-8)).toBe(false);
  });

  test("retorna falso para el número 0", () => {
    expect(esImpar(0)).toBe(false);
  });
});

describe("remainderOf", () => {
  it("debería devolver 0 si n es divisible por d", () => {
    expect(remainderOf(10, 1)).toBe(0);
    expect(remainderOf(10, 2)).toBe(0);
    expect(remainderOf(10, 5)).toBe(0);
  });

  it("debería devolver el resto si n no es divisible por d", () => {
    expect(remainderOf(10, 3)).toBe(1);
    expect(remainderOf(10, 4)).toBe(2);
    expect(remainderOf(129, 17)).toBe(10);
  });

  it("debería lanzar un error si n o d no son números", () => {
    expect(() => remainderOf("a", 5)).toThrow();
    expect(() => remainderOf(10, "b")).toThrow();
    expect(() => remainderOf([], 5)).toThrow();
    expect(() => remainderOf(10, {})).toThrow();
  });

  it("debería lanzar un error si d es 0", () => {
    expect(() => remainderOf(10, 0)).toThrow();
  });

  it("debería lanzar un error si n es negativo", () => {
    expect(() => remainderOf(-10, 3)).toThrow();
    expect(() => remainderOf(-10, -3)).toThrow();
  });

  it("debería lanzar un error si d es negativo", () => {
    expect(() => remainderOf(10, -3)).toThrow();
    expect(() => remainderOf(-10, -3)).toThrow();
  });
});

describe("esMultiploDe", () => {
  test("Devuelve true si n es múltiplo de d", () => {
    expect(esMultiploDe(6, 2)).toBe(true);
    expect(esMultiploDe(8, 4)).toBe(true);
    expect(esMultiploDe(100, 10)).toBe(true);
  });

  test("Devuelve false si n no es múltiplo de d", () => {
    expect(esMultiploDe(5, 2)).toBe(false);
    expect(esMultiploDe(7, 3)).toBe(false);
    expect(esMultiploDe(101, 10)).toBe(false);
  });
});
