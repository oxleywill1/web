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
    xOff = Math.ceil(-3 * Math.random()) * 2 - 4; // Adjusted for slower movement
    window.focus();
}

function newXrt() {
    xOff = Math.ceil(4 * Math.random()) * 2 - 4; // Adjusted for slower movement
}

function newYup() {
    yOff = Math.ceil(-3 * Math.random()) * 2 - 4; // Adjusted for slower movement
}

function newYdn() {
    yOff = Math.ceil(4 * Math.random()) * 2 - 4; // Adjusted for slower movement
}

function playBall() {
    xPos += xOff;
    yPos += yOff;

    if (xPos > screen.width - 175) {
        newXlt();
    }
    if (xPos < 0) {
        newXrt();
    }
    if (yPos > screen.height - 100) {
        newYup();
    }
    if (yPos < 0) {
        newYdn();
    }

    window.moveTo(xPos, yPos);
    setTimeout(playBall, 10); // Adjusted for slower movement
}

window.onload = function () {
    playBall();
};
