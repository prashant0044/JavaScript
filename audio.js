console.log("Hello World");
const audio1 = new Audio("audio/audio1.mp3");
const audio2 = new Audio("audio/audio2.mp3");
const s1 = document.getElementById('s1').addEventListener('click', function () {

    audio1.play();
})

const s2 = document.getElementById('s2').addEventListener('click', function () {

    audio2.play();
})

const pause = document.getElementById('pause').addEventListener('click', function () {
    audio1.pause();
    audio2.pause();
})
