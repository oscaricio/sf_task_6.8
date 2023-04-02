const trafficLightEls = document.querySelectorAll('.trafficLight');

function makeBlack() {
    for (let i = 0; i < trafficLightEls.length; i++) {
        trafficLightEls[i].style.background = ('black');
    }
}

function makeGreen() {
    makeBlack();
    trafficLightEls[0].style.background = ('green');
    trafficLightEventListener(makeYellow, makeGreen);
}

function makeYellow() {
    makeBlack();
    trafficLightEls[1].style.background = ('yellow');
    trafficLightEventListener(makeRed, makeYellow);
}

function makeRed() {
    makeBlack();
    trafficLightEls[2].style.background = ('red');
    trafficLightEventListener(makeGreen, makeRed);
}

function trafficLightEventListener(addListenerFun, removeListenerFun) {
    for (let i = 0; i < trafficLightEls.length; i++) {
        if (removeListenerFun) {
            trafficLightEls[i].removeEventListener("click", removeListenerFun);
        }
        trafficLightEls[i].addEventListener("click", addListenerFun);
    }
}

trafficLightEventListener(makeGreen, false);