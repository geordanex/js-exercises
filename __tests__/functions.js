const { whichIsLarger, makePlusFunction } = require("../exercises/functions");

describe("Pruebas para determinar cuál función devuelve un número más grande", () => {
  test("Cuando f devuelve el número más grande", () => {
    expect(
      whichIsLarger(
        () => 5,
        () => 10
      )
    ).toEqual("g");
  });

  test("Cuando ambas funciones devuelven el mismo número", () => {
    expect(
      whichIsLarger(
        () => 25,
        () => 25
      )
    ).toEqual("neither");
  });

  test("Cuando g devuelve el número más grande", () => {
    expect(
      whichIsLarger(
        () => 505050,
        () => 5050
      )
    ).toEqual("f");
  });
});

describe("makePlusFunction", () => {
  const plusCinco = makePlusFunction(5);
  const plusDiez = makePlusFunction(10);

  it("retorna una función que suma el número base a un nuevo argumento", () => {
    expect(plusCinco(2)).toEqual(7);
    expect(plusCinco(-8)).toEqual(-3);
    expect(plusDiez(0)).toEqual(10);
    expect(plusDiez(188)).toEqual(198);
  });

  it("puede encadenarse con otra función makePlusFunction", () => {
    expect(plusCinco(plusDiez(0))).toEqual(15);
  });
});
