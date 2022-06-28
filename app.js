const INCREMENT_SUCCESS_SCORE_BUTTON = 'z';
const DECREMENT_SUCCESS_SCORE_BUTTON = 'x';
const INCREMENT_FAIL_SCORE_BUTTON = 'a';
const DECREMENT_FAIL_SCORE_BUTTON = 'w';



var hits = 0;
var succedHits = 0;
var failedHits = 0;
var hitSuccessElement = document.querySelector(".success .hit");
var hitFailElement = document.querySelector(".fail .hit");
var hitTotalElement = document.querySelector(".total .hit");
document.body.onkeyup = function (e) {
    switch(e.key){
        case INCREMENT_SUCCESS_SCORE_BUTTON:
            addSucessHit();
            break;
        case DECREMENT_SUCCESS_SCORE_BUTTON:
            removeSuccesHit();
            break;
        case INCREMENT_FAIL_SCORE_BUTTON:
            addFailHit();
            break;
        case DECREMENT_FAIL_SCORE_BUTTON:
            removeFailHit();
            break;     
    };
    calculateTotal();
    renderHits();
};

var calculateTotal = function(){
    hits = succedHits + failedHits; 
};

var addSucessHit = function () {
    succedHits++;
};

var removeSuccesHit = function () {
    succedHits--;
};
var addFailHit = function () {
    failedHits++;
};
var removeFailHit = function () {
    failedHits--;
};

var renderHits = function () {
    hitSuccessElement.innerHTML = succedHits;
    hitFailElement.innerHTML = failedHits;
    hitTotalElement.innerHTML = hits;
};

renderHits();