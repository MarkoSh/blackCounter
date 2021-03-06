/**
 * BlackJack Logic
 **/

var cardSuits = {
    1: 'Hearts',
    2: 'Diamonds',
    3: 'Spades',
    4: 'Clubs'
};

var cardNames = {
    1: 'Ace',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
    10: 'Ten',
    11: 'Jack',
    12: 'Queen',
    13: 'King'
};

// Конструктор карты
var Card = function (s, n) {
    var suit = s;
    var number = n;

    //getter: номер масти
    this.getSuitNum = function () {
        return suit;
    };

    //getter: масть карты
    this.getSuit = function () {
        return cardSuits[suit];
    };

    //getter: номер карты
    this.getCardNum = function () {
        return number;
    };

    //getter: имя карты
    this.getCard = function () {
        return cardNames[number];
    };

    //getter: калькулятор значений карт (A/1 -> 11, K/13 -> 10, Q/12 -> 10, J/11 -> 10)
    this.getValue = function () {
        if (number === 11 || number === 12 || number === 13) {
            return 10
        }

        if (number === 1) {
            return 11; // todo надо реализовать пересчет, если в руке при получении туза стало больше 21, то туз становится единицей, а не 11
        }

        return number;
    }
};

//сдать случайную карту
function deal() {
    var randSuit = Math.floor(Math.random() * 4 + 1);
    var randNumber = Math.floor(Math.random() * 13 + 1);

    return new Card(randSuit, randNumber);
}
//todo
// сделать возможность сплитовать сдачу, если карты одинаковые выпали игроку, то он может разделить их на две руки
//Конструктор руки с подсчетом карт
var Hand = function () {
    var cards = [deal(), deal()];

    //getter: список карт в руке
    this.getHand = function () {
        return cards;
    };

    //getter: подсчет карт
    this.score = function () {
        var totalScore = 0;
        var aces = 0;

        cards.forEach(function (card) {
            totalScore += card.getValue();

            if (card.getCardNum() === 0)
                aces++;
        });

        return totalScore;
    };

    //getter: человекопонятный список карт
    this.print = function () {
        var hands = [];

        cards.forEach(function (card) {
            var hand = card.getCard() + ' of ' + card.getSuit();
            hands.push(hand);
        });

        return hands.join(', ');
    };

    //сдать/добавить другие карты
    this.hitMe = function () {
        cards.push(deal());
    };
    
    //
    this.AI = function () {
        //код искуственного интелекта будет тут
    }

};


//TESTING TESTING TESTING:

var hand1 = new Hand();
var hand2 = new Hand();

console.log("Player 1 Score: " + hand1.score());
console.log("Player 1 Hand:  " + hand1.print());
console.log("\n");
console.log("Player 2 Score: " + hand2.score());
console.log("Player 2 Hand:  " + hand2.print());
