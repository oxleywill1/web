let xOff = 5; // Adjusted for faster movement
let yOff = 5; // Adjusted for faster movement
let xPosArray = [];
let yPosArray = [];

function randomRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function initializeBox() {
    for (let i = 0; i < 3; i++) {
        xPosArray[i] = randomRange(0, screen.width - 175);
        yPosArray[i] = randomRange(0, screen.height - 100);
    }
}

function newXlt(index) {
    xOff = randomRange(-10, -5); // Adjusted for faster movement
    window.focus();
}

function newXrt(index) {
    xOff = randomRange(5, 10); // Adjusted for faster movement
}

function newYup(index) {
    yOff = randomRange(-10, -5); // Adjusted for faster movement
}

function newYdn(index) {
    yOff = randomRange(5, 10); // Adjusted for faster movement
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

    window.moveTo(xPosArray[index], yPosArray[index]);
    setTimeout(() => playBox(index), 500); // Adjusted for faster movement
}

window.onload = function () {
    initializeBox();

    for (let i = 0; i < 3; i++) {
        playBox(i);
    }
};
