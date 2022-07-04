const INCREMENT_5   = 'a';
const INCREMENT_20  = 'z';
const INCREMENT_50  = 'e';
const INCREMENT_100 = 'r';
const DECREMENT_5 = 'w';
const DECREMENT_20 = 'x';
const DECREMENT_50 = 'c';
const DECREMENT_100 = 'v';


var cash = 0;

var cashElement = document.querySelector(".cash .hit");

document.body.onkeyup = function (e) {
    switch(e.key){
        case INCREMENT_5:
            addCash(5);
            break;
        case INCREMENT_20:
            addCash(20);
            break;
        case INCREMENT_50:
            addCash(50);
            break;
        case INCREMENT_100:
            addCash(100);
            break;
        case DECREMENT_100:
            removeCash(100);
            break;
        case DECREMENT_50:
            removeCash(50);
            break;
        case DECREMENT_20:
            removeCash(20);
            break;
        case DECREMENT_5:
            removeCash(5);
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
