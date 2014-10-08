/**
 * BlackJack Logic
 * 1..52   -  ♥ ♦ ♣ ♠
 * 1..13   -  ♥
 * 14..26  -  ♦
 * 27..39  -  ♣
 * 40..52  -  ♠
**/


function deal() {
    //deal a random card
    return Math.floor(Math.random() * 52 + 1);
}