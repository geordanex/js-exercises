const {
   countLetter,
   capitalize,
   longestWord,
   shortestWord,
   replaceCharacter,
   replaceCharacters,
   toLowerCase,
   toUpperCase,
   toSnakeCase,
   toTitleCase,
   rot13,
} = require("../exercises/string");

describe("countLetter", () => {
   test("devuelve el número de veces que una letra objetivo aparece en una cadena de entrada", () => {
      expect(countLetter("hello", "l")).toBe(2);
      expect(countLetter("Mississippi", "s")).toBe(4);
      expect(countLetter("Mississippi", "x")).toBe(0);
      expect(countLetter("Mississippi", "m")).toBe(0);
   });

   test("devuelve 0 si se proporciona una cadena de entrada vacía", () => {
      expect(countLetter("", "x")).toBe(0);
   });
});

describe("capitalize", () => {
   test("devuelve la cadena con la primera letra en mayúscula", () => {
      expect(capitalize("hola")).toBe("Hola");
      expect(capitalize("mundo")).toBe("Mundo");
      expect(capitalize("Hola Mundo")).toBe("Hola Mundo");
      expect(capitalize("1234")).toBe("1234");
      expect(capitalize("")).toBe("");
   });
});

describe("longestWord", () => {
   test("Debería devolver la palabra más larga en un string", () => {
      expect(longestWord("Hola mundo")).toBe("mundo");
      expect(longestWord("La programación es divertida")).toBe("programación");
      expect(longestWord("JavaScript es un lenguaje de programación")).toBe(
         "programación"
      );
   });

   test("Debería devolver la palabra si el string solo contiene una palabra", () => {
      expect(longestWord("programación")).toBe("programación");
   });

   test("Debería devolver una cadena vacía si se proporciona un string vacío", () => {
      expect(longestWord("")).toBe("");
   });
});

describe("shortestWord", () => {
   test("debería devolver la palabra más corta en una cadena", () => {
      const input = "Hola soy una cadena de texto";
      const output = shortestWord(input);
      expect(output).toBe("de");
   });

   test("debería devolver la única palabra en una cadena de una sola palabra", () => {
      const input = "Javascript";
      const output = shortestWord(input);
      expect(output).toBe("Javascript");
   });

   test("debería devolver una cadena vacía si se proporciona una cadena vacía", () => {
      const input = "";
      const output = shortestWord(input);
      expect(output).toBe("");
   });

   test("debería manejar correctamente signos de puntuación y espacios", () => {
      const input = "¡Hola, soy una cadena de texto!";
      const output = shortestWord(input);
      expect(output).toBe("¡Hola,");
   });
});

describe("replaceCharacter", () => {
   test("reemplaza el primer carácter de la cadena", () => {
      expect(replaceCharacter("hola", "h", "H")).toBe("Hola");
   });

   test("reemplaza todas las ocurrencias del carácter en la cadena", () => {
      expect(replaceCharacter("banana", "a", "o")).toBe("bonono");
   });

   test("no hace cambios si el carácter no está presente en la cadena", () => {
      expect(replaceCharacter("perro", "e", "a")).toBe("parro");
   });
});

describe("replaceCharacters", () => {
   it("debería reemplazar las letras de acuerdo al diccionario de reemplazo", () => {
      const string = "hello";
      const replacementDict = { h: "y", l: "8" };
      expect(replaceCharacters(string, replacementDict)).toBe("ye88o");
   });

   it("debería devolver la misma cadena si no hay caracteres para reemplazar", () => {
      const string = "hello";
      const replacementDict = { x: "y", z: "8" };
      expect(replaceCharacters(string, replacementDict)).toBe("hello");
   });

   it("debería devolver una cadena vacía si se le da una cadena vacía", () => {
      const string = "";
      const replacementDict = { h: "y", l: "8" };
      expect(replaceCharacters(string, replacementDict)).toBe("");
   });
});

describe("toLowerCase", () => {
   test("devuelve una copia en minúscula de la cadena de entrada", () => {
      const input = "HELLO WORLD";
      const expectedOutput = "hello world";
      expect(toLowerCase(input)).toEqual(expectedOutput);
   });

   test("no cambia los caracteres que no tienen un equivalente en minúscula", () => {
      const input = "12345!@#$%";
      const expectedOutput = "12345!@#$%";
      expect(toLowerCase(input)).toEqual(expectedOutput);
   });
});

describe("toUpperCase", () => {
   it("convierte todas las letras a mayúsculas", () => {
      expect(toUpperCase("hello")).toBe("HELLO");
      expect(toUpperCase("goodbye")).toBe("GOODBYE");
      expect(toUpperCase("hello world")).toBe("HELLO WORLD");
      expect(toUpperCase("The quick brown fox jumps over the lazy dog")).toBe(
         "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG"
      );
   });
   it("no afecta caracteres especiales o números", () => {
      expect(toUpperCase("1234")).toBe("1234");
      expect(toUpperCase("!?#$%")).toBe("!?#$%");
      expect(toUpperCase("h3ll0")).toBe("H3LL0");
      expect(toUpperCase("Hello World!")).toBe("HELLO WORLD!");
   });
   it("maneja caracteres en la tabla ASCII", () => {
      expect(toUpperCase("ñ")).toBe("Ñ");
      expect(toUpperCase("áéíóú")).toBe("ÁÉÍÓÚ");
   });
});

describe("toSnakeCase", () => {
   it("Debería convertir una frase en snake case", () => {
      expect(toSnakeCase("Hola mundo")).toBe("hola_mundo");
      expect(toSnakeCase("Esta Es Una Prueba")).toBe("esta_es_una_prueba");
      expect(toSnakeCase("PalabrasUnidas")).toBe("palabrasunidas");
   });

   it('debería convertir "EstaEsUnaCadena" a "esta_es_una_cadena"', () => {
      expect(toSnakeCase("EstaEsUnaCadena")).toBe("esta_es_una_cadena");
   });

   it('debería convertir "  Hola  mundo  " a "hola_mundo"', () => {
      expect(toSnakeCase("  Hola  mundo  ")).toBe("hola_mundo");
   });

   it('debería convertir "cadenaConNúmeros123" a "cadena_con_números123"', () => {
      expect(toSnakeCase("cadenaConNúmeros123")).toBe("cadena_con_números123");
   });

   it("Debería manejar correctamente las cadenas vacías", () => {
      expect(toSnakeCase("")).toBe("");
   });
});

describe("toTitleCase", () => {
   it("Debería convertir una cadena en formato título", () => {
      expect(toTitleCase("hOla mUNdo")).toBe("Hola Mundo");
      expect(toTitleCase("BIENVENIDOS A MI CUMPLEAÑOS")).toBe(
         "Bienvenidos A Mi Cumpleaños"
      );
      expect(toTitleCase("    eJemplo de    texto    con espacios   ")).toBe(
         "    Ejemplo De    Texto    Con Espacios   "
      );
   });

   it("Debería devolver una cadena vacía si se proporciona una cadena vacía", () => {
      expect(toTitleCase("")).toBe("");
   });

   it("Debería manejar correctamente caracteres no alfabéticos", () => {
      expect(toTitleCase("1234 Hola MUNDO!")).toBe("1234 Hola Mundo!");
      expect(toTitleCase("...¡¡¡¡Ejemplo de signos de puntuación!!!...")).toBe(
         "...¡¡¡¡Ejemplo De Signos De Puntuación!!!..."
      );
   });
});

describe("rot13", () => {
   it("debería devolver un string encriptado en ROT13", () => {
      expect(rot13("Hola, mundo!")).toEqual("Ubyn, zhaqb!");
      expect(rot13("¡Este es un mensaje secreto!")).toEqual(
         "¡Rfg r fha zrttrgr frpergb!"
      );
      expect(
         rot13("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz")
      ).toEqual("NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm");
   });

   it("debería devolver un string descencriptado al aplicar rot13 dos veces", () => {
      const mensajeEncriptado = "Uryyb, jbeyq!";
      const mensajeDescencriptado = "Hello, world!";

      expect(rot13(rot13(mensajeEncriptado))).toEqual(mensajeDescencriptado);
   });
});
