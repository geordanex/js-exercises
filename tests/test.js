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
