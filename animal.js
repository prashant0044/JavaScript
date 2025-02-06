let button = document.getElementById('button');
let stop = document.getElementById('stop');
let dog_audio = new Audio("audio/dog.mp3");
let cat_audio = new Audio("audio/cat.mp3");
let sheep_audio = new Audio("audio/sheep.mp3");
let tiger_audio = new Audio("audio/tiger.mp3");
button.addEventListener("click", function () {
    let animal_name = document.getElementById('animal_name').value;
    let display = document.getElementById('display');

    switch (animal_name) {
        case "dog":

            dog_audio.play();
            break;
        case "cat":

            cat_audio.play();
            break;
        case "tiger":

            tiger_audio.play();
            break;
        case "sheep":

            sheep_audio.play();
            break;
        default:
            display.innerHTML = "I Do not have the sound of this animal";
    }
})

stop.addEventListener("click", function () {



    dog_audio.pause();


    cat_audio.pasue();


    tiger_audio.pause();


    sheep_audio.pause();



})