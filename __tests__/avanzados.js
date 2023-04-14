const {
   circleValues,
   reverseNum,
   countVowel,
} = require("../exercises/avanzados");

// Prueba unitaria para la función circleValues
describe("circleValues", () => {
   // Prueba para el cálculo del área de un círculo
   test("calcula el área de un círculo", () => {
      expect(circleValues(3).area).toBeCloseTo(28.27);
   });

   // Prueba para el cálculo del perímetro de un círculo
   test("calcula el perímetro de un círculo", () => {
      expect(circleValues(3).perimeter).toBeCloseTo(18.85);
   });
});

// Prueba unitaria para la función reverseNum
describe("reverseNum", () => {
   // Prueba para un número positivo
   test("invierte un número positivo", () => {
      expect(reverseNum(123)).toBe(321);
   });

   // Prueba para un número negativo
   test("invierte un número negativo", () => {
      expect(reverseNum(-456)).toBe(-654);
   });

   // Prueba para cero
   test("invierte cero", () => {
      expect(reverseNum(0)).toBe(0);
   });
});

// Prueba unitaria para la función countVowel
describe("countVowel", () => {
   // Prueba para una cadena de texto con vocales
   test("cuenta el número de vocales en una cadena de texto", () => {
      expect(countVowel("Hola Mundo")).toBe(4);
   });

   // Prueba para una cadena de texto sin vocales
   test("devuelve cero cuando no hay vocales en la cadena de texto", () => {
      expect(countVowel("12345")).toBe(0);
   });

   // Prueba para una cadena de texto vacía
   test("devuelve cero cuando la cadena de texto está vacía", () => {
      expect(countVowel("")).toBe(0);
   });
});
