const colorel = document.querySelector(".color");
const fontel = document.querySelector(".font");
const resetel = document.querySelector(".reset");
const bodyel = document.querySelector("body");

console.log(colorel, fontel, resetel, bodyel);

// Change background color
colorel.addEventListener('click', function () {
    bodyel.style.backgroundColor = "red";
});

// Change font size of the paragraph
fontel.addEventListener('click', function () {
    const paragraph = document.querySelector("p.font");
    paragraph.style.fontSize = "50px";
});

// Reset styles
resetel.addEventListener('click', function () {
    bodyel.style.backgroundColor = ""; // Reset background color
    const paragraph = document.querySelector("p.font");
    paragraph.style.fontSize = ""; // Reset font size
});