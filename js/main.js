let xOff = 15; // Adjusted for faster movement
let yOff = 15; // Adjusted for faster movement
let xPosArray = [];
let yPosArray = [];
let maxPopups = 3; // Maximum number of popups to open
let popupCount = 0;

function randomRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function initializeBox() {
    for (let i = 0; i < maxPopups; i++) {
        xPosArray[i] = randomRange(0, screen.width - 175);
        yPosArray[i] = randomRange(0, screen.height - 100);
    }
}

function newXlt(index) {
    xOff = randomRange(-20, -10); // Adjusted for faster movement
    window.focus();
}

function newXrt(index) {
    xOff = randomRange(10, 20); // Adjusted for faster movement
}

function newYup(index) {
    yOff = randomRange(-20, -10); // Adjusted for faster movement
}

function newYdn(index) {
    yOff = randomRange(10, 20); // Adjusted for faster movement
}

function playBox(index) {
    newXlt(index);
    newYup(index);

    xPosArray[index] += xOff;
    yPosArray[index] += yOff;

    if (xPosArray[index] > screen.width - 175 || xPosArray[index] < 0) {
        newXrt(index);
    }

    if (yPosArray[index] > screen.height - 100 || yPosArray[index] < 0) {
        newYdn(index);
    }

    window.open('about:blank', '_blank', 'width=357,height=330,top=' + yPosArray[index] + ',left=' + xPosArray[index]);

    popupCount++;

    if (popupCount < maxPopups) {
        playBox(popupCount);
    }
}

window.onload = function () {
    initializeBox();
    playBox(0);
};
