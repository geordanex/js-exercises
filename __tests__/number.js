const {
   isCero,
   isPositiveNumber,
   isNegativeNumber,
   isEven,
   isOdd,
   remainderOf,
   esMultiploDe,
   power,
   isPowerOf,
   isPowerofTwo,
   isPerfectSquare,
   factors,
   isPrime,
   primeFactors,
   sumOfRange,
   factorial,
   celsiusToFahrenheit,
   fahrenheitToCelsius,
   fibonacci,
} = require("../exercises/number.js");

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

describe("isPositiveNumber", () => {
   test("Debería devolver true para números positivos", () => {
      expect(isPositiveNumber(3)).toBe(true);
      expect(isPositiveNumber(0.1)).toBe(true);
      expect(isPositiveNumber(1000)).toBe(true);
   });

   test("Debería devolver false para números negativos", () => {
      expect(isPositiveNumber(-1)).toBe(false);
      expect(isPositiveNumber(-0.5)).toBe(false);
      expect(isPositiveNumber(-1000)).toBe(false);
   });

   test("Debería devolver false para el número 0", () => {
      expect(isPositiveNumber(0)).toBe(false);
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

describe("isOdd", () => {
   test("retorna verdadero para numeros impares", () => {
      expect(isOdd(1)).toBe(true);
      expect(isOdd(3)).toBe(true);
      expect(isOdd(-11)).toBe(true);
      expect(isOdd(-7)).toBe(true);
   });

   test("retorna falso para numeros pares", () => {
      expect(isOdd(2)).toBe(false);
      expect(isOdd(4)).toBe(false);
      expect(isOdd(-10)).toBe(false);
      expect(isOdd(-8)).toBe(false);
   });

   test("retorna falso para el número 0", () => {
      expect(isOdd(0)).toBe(false);
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

describe("power", () => {
   test("devuelve la base elevada al exponente", () => {
      expect(power(2, 3)).toEqual(8);
      expect(power(-2, 3)).toEqual(-8);
      expect(power(5, 6)).toEqual(15625);
   });

   test("lanza un error al elevar una base negativa a un exponente fraccionario", () => {
      expect(() => power(-2, 0.5)).toThrowError("Exponente no entero");
   });
});

describe("isPowerOf", () => {
   test("debería devolver true cuando num es una potencia de base", () => {
      expect(isPowerOf(8, 2)).toBe(true);
      expect(isPowerOf(16, 2)).toBe(true);
      expect(isPowerOf(27, 3)).toBe(true);
      expect(isPowerOf(81, 3)).toBe(true);
      expect(isPowerOf(625, 5)).toBe(true);
      expect(isPowerOf(1, 1)).toBe(true);
   });

   test("debería devolver false cuando num no es una potencia de base", () => {
      expect(isPowerOf(10, 2)).toBe(false);
      expect(isPowerOf(15, 2)).toBe(false);
      expect(isPowerOf(40, 3)).toBe(false);
      expect(isPowerOf(100, 5)).toBe(false);
      expect(isPowerOf(50, 7)).toBe(false);
   });
});

describe("isPowerOfTwo", () => {
   test("retorna verdadero para potencias de 2", () => {
      expect(isPowerOfTwo(2)).toBe(true);
      expect(isPowerOfTwo(4)).toBe(true);
      expect(isPowerOfTwo(2 ** 10)).toBe(true);
   });

   test("retorna falso para números que no son potencias de 2", () => {
      expect(isPowerOfTwo(3)).toBe(false);
      expect(isPowerOfTwo(5)).toBe(false);
      expect(isPowerOfTwo(2 ** 10 + 1)).toBe(false);
   });
});

describe("isPerfectSquare", () => {
   test("retorna true si el número es un cuadrado perfecto", () => {
      expect(isPerfectSquare(0)).toBe(true);
      expect(isPerfectSquare(1)).toBe(true);
      expect(isPerfectSquare(4)).toBe(true);
      expect(isPerfectSquare(9)).toBe(true);
      expect(isPerfectSquare(16)).toBe(true);
      expect(isPerfectSquare(25)).toBe(true);
      expect(isPerfectSquare(36)).toBe(true);
      expect(isPerfectSquare(49)).toBe(true);
      expect(isPerfectSquare(64)).toBe(true);
      expect(isPerfectSquare(81)).toBe(true);
      expect(isPerfectSquare(100)).toBe(true);
   });

   test("retorna false si el número no es un cuadrado perfecto", () => {
      expect(isPerfectSquare(2)).toBe(false);
      expect(isPerfectSquare(3)).toBe(false);
      expect(isPerfectSquare(5)).toBe(false);
      expect(isPerfectSquare(7)).toBe(false);
      expect(isPerfectSquare(10)).toBe(false);
      expect(isPerfectSquare(15)).toBe(false);
      expect(isPerfectSquare(20)).toBe(false);
      expect(isPerfectSquare(30)).toBe(false);
      expect(isPerfectSquare(50)).toBe(false);
      expect(isPerfectSquare(99)).toBe(false);
   });

   test("retorna false si el número es negativo", () => {
      expect(isPerfectSquare(-1)).toBe(false);
      expect(isPerfectSquare(-2)).toBe(false);
      expect(isPerfectSquare(-10)).toBe(false);
   });
});

describe("factors", () => {
   test("devuelve un array con los factores de un número en orden ascendente", () => {
      expect(factors(1)).toEqual([1]);
      expect(factors(2)).toEqual([1, 2]);
      expect(factors(4)).toEqual([1, 2, 4]);
      expect(factors(12)).toEqual([1, 2, 3, 4, 6, 12]);
      expect(factors(15)).toEqual([1, 3, 5, 15]);
   });

   it("debería lanzar un error si el array resultante no está en orden ascendente", () => {
      const result = factors(12);
      for (let i = 0; i < result.length - 1; i++) {
         expect(result[i]).toBeLessThan(result[i + 1]);
      }
   });
});

describe("isPrime", () => {
   it("Debería devolver true si el número es primo", () => {
      expect(isPrime(2)).toBe(true);
      expect(isPrime(3)).toBe(true);
      expect(isPrime(5)).toBe(true);
      expect(isPrime(7)).toBe(true);
      expect(isPrime(11)).toBe(true);
      expect(isPrime(13)).toBe(true);
      expect(isPrime(17)).toBe(true);
   });

   it("Debería devolver false si el número no es primo", () => {
      expect(isPrime(4)).toBe(false);
      expect(isPrime(6)).toBe(false);
      expect(isPrime(9)).toBe(false);
      expect(isPrime(15)).toBe(false);
      expect(isPrime(21)).toBe(false);
   });

   it("Debería devolver false si el número es 1", () => {
      expect(isPrime(1)).toBe(false);
   });

   it("Debería devolver false si el número es negativo", () => {
      expect(isPrime(-2)).toBe(false);
      expect(isPrime(-7)).toBe(false);
   });

   it("Debería devolver false si el número es cero", () => {
      expect(isPrime(0)).toBe(false);
   });
});

describe("primeFactors", () => {
   test("devuelve un array con los factores primos del número", () => {
      expect(primeFactors(2)).toEqual([2]);
      expect(primeFactors(4)).toEqual([2, 2]);
      expect(primeFactors(12)).toEqual([2, 2, 3]);
      expect(primeFactors(34)).toEqual([2, 17]);
      expect(primeFactors(917329)).toEqual([7, 7, 97, 193]);
   });

   test("devuelve un array vacío para números menores o iguales a 1", () => {
      expect(primeFactors(0)).toEqual([]);
      expect(primeFactors(1)).toEqual([]);
      expect(primeFactors(-10)).toEqual([]);
   });

   test("devuelve un array vacío para números no enteros", () => {
      expect(primeFactors(2.5)).toEqual([]);
      expect(primeFactors(Math.PI)).toEqual([]);
   });

   test("devuelve un array vacío para números grandes", () => {
      expect(primeFactors(10 ** 10)).toEqual([]);
   });

   test("devuelve factores primos en orden ascendente incluso si no están ordenados", () => {
      expect(primeFactors(2 * 2 * 3 * 17 * 197)).toEqual([2, 2, 3, 17, 197]);
      expect(primeFactors(3 * 7 * 11)).toEqual([3, 7, 11]);
      expect(primeFactors(2 * 2 * 2 * 2 * 7)).toEqual([2, 2, 2, 2, 7]);
      expect(primeFactors(17)).toEqual([17]);
   });
});

describe("sumOfRange", () => {
   test("retorna la suma de los enteros en el rango dado", () => {
      expect(sumOfRange(1, 5)).toBe(15);
      expect(sumOfRange(-3, 4)).toBe(4);
      expect(sumOfRange(0, 0)).toBe(0);
      expect(sumOfRange(-10, -5)).toBe(-45);
   });

   test("retorna 0 si los valores de inicio y final son iguales", () => {
      expect(sumOfRange(2, 2)).toBe(2);
      expect(sumOfRange(0, 0)).toBe(0);
      expect(sumOfRange(-3, -3)).toBe(-3);
   });

   test("retorna NaN si alguno de los parámetros no es un número", () => {
      expect(sumOfRange(2, "5")).toBe(NaN);
      expect(sumOfRange(true, 5)).toBe(NaN);
      expect(sumOfRange("hola", "mundo")).toBe(NaN);
   });
});

describe("factorial", () => {
   test("retorna el factorial de un número dado", () => {
      expect(factorial(0)).toBe(1);
      expect(factorial(1)).toBe(1);
      expect(factorial(2)).toBe(2);
      expect(factorial(5)).toBe(120);
      expect(factorial(10)).toBe(3628800);
   });

   test("retorna un error si el número es negativo", () => {
      expect(() => factorial(-1)).toThrow("El número debe ser no negativo");
      expect(() => factorial(-10)).toThrow("El número debe ser no negativo");
   });
});

describe("celsiusToFahrenheit", () => {
   test("debería devolver la temperatura en Fahrenheit", () => {
      expect(celsiusToFahrenheit(0)).toBe(32);
      expect(celsiusToFahrenheit(10)).toBe(50);
      expect(celsiusToFahrenheit(20)).toBe(68);
      expect(celsiusToFahrenheit(30)).toBe(86);
   });
});

describe("fahrenheitToCelsius", () => {
   test("convierte 32 grados Fahrenheit a 0 grados Celsius", () => {
      expect(fahrenheitToCelsius(32)).toBe(0);
   });

   test("convierte 68 grados Fahrenheit a 20 grados Celsius", () => {
      expect(fahrenheitToCelsius(68)).toBe(20);
   });

   test("convierte -22 grados Fahrenheit a -30 grados Celsius", () => {
      expect(fahrenheitToCelsius(-22)).toBe(-30);
   });
});

describe("fibonacci", () => {
   test("devuelve el n-ésimo número de Fibonacci", () => {
      expect(fibonacci(0)).toBe(0);
      expect(fibonacci(1)).toBe(1);
      expect(fibonacci(5)).toBe(5);
      expect(fibonacci(10)).toBe(55);
   });

   test("devuelve 0 para n = 0", () => {
      expect(fibonacci(0)).toBe(0);
   });

   test("devuelve 1 para n = 1", () => {
      expect(fibonacci(1)).toBe(1);
   });
});
