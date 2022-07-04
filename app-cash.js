const INCREMENT_5   = 'a';
const INCREMENT_10  = 'z';
const INCREMENT_20  = 'e';
const INCREMENT_100 = 'r';
const DECREMENT_5 = 'w';
const DECREMENT_10 = 'x';
const DECREMENT_20 = 'c';
const DECREMENT_100 = 'v';


var cash = 0;

var cashElement = document.querySelector(".cash .hit");

document.body.onkeyup = function (e) {
    switch(e.key){
        case INCREMENT_5:
            addCash(5);
            break;
        case INCREMENT_10:
            addCash(10);
            break;
        case INCREMENT_20:
            addCash(20);
            break;
        case INCREMENT_100:
            addCash(100);
            break;
        case DECREMENT_100:
            removeCash(100);
            break;
        case DECREMENT_20:
            removeCash(20);
            break;
        case DECREMENT_10:
            removeCash(10);
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
