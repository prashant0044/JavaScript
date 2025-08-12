// document.getElementById('parentdiv').addEventListener('click',function(event){
//     alert("parent div is selected");
// },true)
document.getElementById('parentdiv').addEventListener('click', function() {
    alert("Parent - Capturing Phase");
}, true); // true = capturing

document.getElementById('parentdiv').addEventListener('click', function() {
    alert("Parent - Bubbling Phase");
}, false); // false = bubbling

document.getElementById('childbtn').addEventListener('click', function() {
    alert("Child Clicked");
});