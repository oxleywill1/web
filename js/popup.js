let xOff = 15;
let yOff = 15;
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
    xOff = randomRange(-20, -10);
    window.focus();
}

function newXrt(index) {
    xOff = randomRange(10, 20);
}

function newYup(index) {
    yOff = randomRange(-20, -10);
}

function newYdn(index) {
    yOff = randomRange(10, 20);
}

function playBox(index) {
    xPosArray[index] += xOff;
    yPosArray[index] += yOff;

    if (xPosArray[index] > screen.width - 175 || xPosArray[index] < 0) {
        xOff = -xOff; // Reverse direction when hitting the left or right wall
    }

    if (yPosArray[index] > screen.height - 100 || yPosArray[index] < 0) {
        yOff = -yOff; // Reverse direction when hitting the top or bottom wall
    }

    window.moveTo(xPosArray[index], yPosArray[index]);
    setTimeout(() => playBox(index), 100);
}

window.onload = function () {
    initializeBox();

    for (let i = 0; i < 3; i++) {
        playBox(i);
    }
};
