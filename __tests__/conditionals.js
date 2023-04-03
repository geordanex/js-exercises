const {
  daysInMonthByNumber,
  letterGrade,
  rockPaperScissorsWinner,
} = require("../exercises/conditionals");

describe("daysInMonthByNumber", () => {
  test("debería devolver 31 para Enero", () => {
    expect(daysInMonthByNumber(1)).toBe(31);
  });

  test("debería devolver 28 para Febrero", () => {
    expect(daysInMonthByNumber(2)).toBe(28);
  });

  test("debería devolver 30 para Septiembre", () => {
    expect(daysInMonthByNumber(9)).toBe(30);
  });
});

describe("letterGrade", () => {
  test("debería devolver una F para un puntaje inferior a 60", () => {
    expect(letterGrade(50)).toBe("F");
    expect(letterGrade(59)).toBe("F");
  });

  test("debería devolver una D para un puntaje entre 60 y 62", () => {
    expect(letterGrade(60)).toBe("D-");
    expect(letterGrade(61)).toBe("D-");
    expect(letterGrade(62)).toBe("D-");
  });

  test("debería devolver una C para un puntaje entre 70 y 76", () => {
    expect(letterGrade(70)).toBe("C-");
    expect(letterGrade(73)).toBe("C");
    expect(letterGrade(76)).toBe("C+");
  });

  test("debería devolver una B para un puntaje entre 80 y 86", () => {
    expect(letterGrade(80)).toBe("B-");
    expect(letterGrade(83)).toBe("B");
    expect(letterGrade(86)).toBe("B+");
  });

  test("debería devolver una A para un puntaje entre 90 y 100", () => {
    expect(letterGrade(90)).toBe("A-");
    expect(letterGrade(95)).toBe("A");
    expect(letterGrade(100)).toBe("A+");
  });
});

describe("rockPaperScissorsWinner", () => {
  test('debe devolver "win" si el primer jugador gana', () => {
    expect(rockPaperScissorsWinner(0, 1)).toBe("win"); // tijeras gana a papel
    expect(rockPaperScissorsWinner(1, 2)).toBe("win"); // papel gana a piedra
    expect(rockPaperScissorsWinner(2, 0)).toBe("win"); // piedra gana a tijeras
  });

  test('debe devolver "lose" si el primer jugador pierde', () => {
    expect(rockPaperScissorsWinner(1, 0)).toBe("lose"); // papel pierde ante tijeras
    expect(rockPaperScissorsWinner(2, 1)).toBe("lose"); // piedra pierde ante papel
    expect(rockPaperScissorsWinner(0, 2)).toBe("lose"); // tijeras pierde ante piedra
  });

  test('debe devolver "draw" si ambos jugadores empatan', () => {
    expect(rockPaperScissorsWinner(0, 0)).toBe("draw"); // tijeras vs. tijeras
    expect(rockPaperScissorsWinner(1, 1)).toBe("draw"); // papel vs. papel
    expect(rockPaperScissorsWinner(2, 2)).toBe("draw"); // piedra vs. piedra
  });
});
