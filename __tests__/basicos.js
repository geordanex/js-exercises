const {
   updateNum,
   assignValue,
   missingVariable,
   addMissingCondition,
   convertir,
   getFirstValue,
   addUp,
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

describe("Pruebas para obtener el primer valor de un arreglo de números", () => {
   test("Obtener el primer valor de [1, 2, 3]", () => {
      expect(getFirstValue([1, 2, 3])).toEqual(1);
   });

   test("Obtener el primer valor de [80, 5, 100]", () => {
      expect(getFirstValue([80, 5, 100])).toEqual(80);
   });

   test("Obtener el primer valor de [-500, 0, 50]", () => {
      expect(getFirstValue([-500, 0, 50])).toEqual(-500);
   });
});

describe("Pruebas para sumar números desde 1 hasta el número dado", () => {
   test("Sumar números desde 1 hasta 4", () => {
      expect(addUp(4)).toEqual(10);
   });

   test("Sumar números desde 1 hasta 13", () => {
      expect(addUp(13)).toEqual(91);
   });

   test("Sumar números desde 1 hasta 600", () => {
      expect(addUp(600)).toEqual(180300);
   });
});
