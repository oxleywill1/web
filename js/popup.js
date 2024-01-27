let xOff = 2; // Adjusted for slower movement
let yOff = 2; // Adjusted for slower movement
let xPos = 400;
let yPos = -100;

function randomRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function newXlt() {
    xOff = randomRange(-4, -2); // Adjusted for slower movement
    window.focus();
}

function newXrt() {
    xOff = randomRange(2, 4); // Adjusted for slower movement
}

function newYup() {
    yOff = randomRange(-4, -2); // Adjusted for slower movement
}

function newYdn() {
    yOff = randomRange(2, 4); // Adjusted for slower movement
}

function playBox() {
    newXlt();
    newYup();

    xPos += xOff;
    yPos += yOff;

    if (xPos > screen.width - 175 || xPos < 0) {
        newXrt();
    }

    if (yPos > screen.height - 100 || yPos < 0) {
        newYdn();
    }

    window.moveTo(xPos, yPos);
    setTimeout(playBox, 1000); // Adjusted for slower movement
}

window.onload = function () {
    playBox();
};
