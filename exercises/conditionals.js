/**
 * Dado un mes (representado como un número entre 1 y 12), devuelve el número
 * de días en ese mes.
 *
 * Por ejemplo, enero es una entrada de 1, febrero es una entrada de 2, marzo es una
 * entrada de 3, y así sucesivamente.
 *
 * Se asume que febrero tiene 29 días (sin años bisiestos).
 *
 * @example
 * daysInMonthByNumber(1); // => 31
 * daysInMonthByNumber(9); // => 30
 *
 * @param {number} monthNum - Un número que representa el mes, con 1 para enero
 *   y 12 para diciembre.
 * @return {number} El número de días en el mes dado
 */
function daysInMonthByNumber(monthNum) {
   // Aqui tu codigo
}

/**
 * Dada una calificación numérica de 0 a 100, devuelve una calificación de letra.
 *
 * Los puntos de corte de menos/más son en 2 y 6, respectivamente. Por ejemplo,
 * 80-82 es un B+, 83-86 es un B, y 87-89 es un B+. Cualquier cosa por debajo de 60 es una F.
 *
 * @example
 * letterGrade(50); // => 'F'
 * letterGrade(70); // => 'C-'
 * letterGrade(89); // => 'B+'
 *
 * @param {number} percentGrade - Un número entre 0 y 100 (inclusive), que representa
 *  la calificación de un estudiante en porcentaje.
 * @return {string} La calificación de letra correspondiente para la calificación de porcentaje dada.
 */
function letterGrade(percentGrade) {
   // Código de la función
}

/**
 *
 *    Dados dos números que representan las jugadas de dos jugadores en un juego de piedra,
 *    papel o tijeras, devuelve si la jugada del primer jugador fue una victoria,
 *    derrota o empate.
 *
 *    Para jugar, dos personas cuentan hasta tres. En el tercer número, cada uno muestra
 *    su mano en forma de piedra, papel o tijeras. Tijeras ganan a papel, papel gana a piedra
 *    y piedra gana a tijeras. Si ambos jugadores juegan el mismo objeto, es un empate.
 *    Ver https://es.wikipedia.org/wiki/Piedra,_papel_o_tijeras
 *
 *    Representaremos tijeras con el número 0, papel con el número 1
 *    y piedra con el número 2.
 *
 *    @example
 *    rockPaperScissorsWinner(0, 1); // => 'win' (tijeras ganan a papel)
 *    rockPaperScissorsWinner(1, 0); // => 'lose' (papel pierde contra tijeras)
 *    rockPaperScissorsWinner(1, 2); // => 'win' (papel gana a piedra)
 *    rockPaperScissorsWinner(2, 2); // => 'draw' (ambos jugadores jugaron piedra)
 *
 *    @param {number} firstPlayerMove - La jugada del primer jugador
 *    @param {number} secondPlayerMove - La jugada del segundo jugador
 *    @returns {string} Devuelve 'win', 'lose' o 'draw' dependiendo de si
 *    el primer jugador ganó, perdió o empató el partido.
 */
function rockPaperScissorsWinner(firstPlayerMove, secondPlayerMove) {
   // Aqui tu codigo
}

module.exports = {
   daysInMonthByNumber,
   letterGrade,
   rockPaperScissorsWinner,
};
