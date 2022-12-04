window.onload = function () {
    "use strict";
    // put all of your code here
    let selectedAnimation;
    let textArea = document.getElementById("text-area");
    let startBtn = document.getElementById("start");
    let stopBtn = document.getElementById("stop");
    let animation = document.getElementById("animation");
    let fontSize = document.getElementById('fontsize');
    let turbo = document.getElementById('turbo');
    let currentFrameIndex;
    let animationInterval;
    let frames;
    let size = [];
    size['Tiny'] = '7pt'
    size['Small'] = '10pt';
    size['Medium'] = '12pt';
    size['Large'] = '16pt';
    size['Extra Large'] = '24pt';
    size['XXL'] = '32pt';

    animation.onchange = function () {
        textArea.value = ANIMATIONS[this.value]
        selectedAnimation = textArea.value;
    }

    startBtn.onclick = function () {
        frames = selectedAnimation.split("=====\n");
        currentFrameIndex = 0;
        animationInterval = setInterval(runAnimation, 250)
        stopBtn.disabled = false;
        this.disabled = true;
        animation.disabled = true;
    }

    function runAnimation() {
        textArea.value = frames[currentFrameIndex];
        currentFrameIndex = (currentFrameIndex + 1) % frames.length;
    }

    stopBtn.onclick = function () {
        clearInterval(animationInterval);
        this.disabled = true;
        startBtn.disabled = false;
        animation.disabled = false;
        if (frames) {
            let initialFrames = frames.join("=====\n");
            textArea.value = initialFrames;
        }
    }

    fontSize.onchange = function () {
        textArea.style.fontSize = size[this.value];
    }

    turbo.onchange = function () {
        let checked = this.checked;
        clearInterval(animationInterval)
        if (checked) {
            animationInterval = setInterval(runAnimation, 50);
        }
        else {
            animationInterval = setInterval(runAnimation, 250);
        }
    }
}