const {
  updateNum,
  assignValue,
  missingVariable,
  addMissingCondition,
  convertir,
} = require("../exercises/basicos");

describe("updateNum", () => {
  test("assignNum asigna un nuevo valor a la variable num", () => {
    const result = updateNum();
    expect(result).toBe(2);
  });
});

describe("assignValue", () => {
  test("assignValue debe retornar 5", () => {
    let num = 5;
    expect(assignValue()).toBe(num);
  });
});

describe("missingVariable", () => {
  test("missingVariable debe retornar 3", () => {
    let num = 3;
    expect(missingVariable()).toBe(num);
  });
});

describe("addMissingCondition", () => {
  test("addMissingCondition debe retornar hello world", () => {
    let ans = "hello world";
    expect(addMissingCondition()).toBe(ans);
  });
});

describe("Pruebas para convertir minutos a segundos", () => {
  test("Convertir 5 minutos a segundos", () => {
    expect(convertir(5)).toEqual(300);
  });

  test("Convertir 3 minutos a segundos", () => {
    expect(convertir(3)).toEqual(180);
  });

  test("Convertir 2 minutos a segundos", () => {
    expect(convertir(2)).toEqual(120);
  });
});
