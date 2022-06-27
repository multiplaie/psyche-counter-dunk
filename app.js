const INCREMENT_2   = 'a';
const INCREMENT_10  = 'z';
const INCREMENT_25  = 'e';
const INCREMENT_100 = 'r';
const DECREMENT_2 = 'w';
const DECREMENT_10 = 'x';
const DECREMENT_25 = 'c';
const DECREMENT_100 = 'v';


var cash = 0;

var cashElement = document.querySelector(".cash .hit");

document.body.onkeyup = function (e) {
    switch(e.key){
        case INCREMENT_2:
            addCash(2);
            break;
        case INCREMENT_10:
            addCash(10);
            break;
        case INCREMENT_25:
            addCash(25);
            break;
        case INCREMENT_100:
            addCash(100);
            break;
        case DECREMENT_100:
            removeCash(100);
            break;
        case DECREMENT_25:
            removeCash(25);
            break;
        case DECREMENT_10:
            removeCash(10);
            break;
        case DECREMENT_2:
            removeCash(2);
            break;
    };
    renderHits();
};


var addCash = function (add) {
    cash+= add;
};

var removeCash = function (remove) {
    cash-= remove;
};


var renderHits = function () {
    cashElement.innerHTML = cash;
};

renderHits();