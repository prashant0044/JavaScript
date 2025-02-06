let reset = document.getElementById('reset');
let add_button = document.getElementById('add_number');

add_button.addEventListener('click', function () {
    let number_one = document.getElementById("one").value;
    let number_two = document.getElementById('two').value;
    let result = document.getElementById('result');
    let ans = parseFloat(number_one) + parseFloat(number_two);  
    result.innerHTML = ans;
});

reset.addEventListener('click', function () {
    let number_one = document.getElementById("one");
    let number_two = document.getElementById('two');
    let result = document.getElementById('result');
    
    // Clear the input fields
    number_one.value = "";
    number_two.value = "";

    // Clear the result
    result.innerHTML = "";
});
