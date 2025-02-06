
let convert = document.getElementById('convert');
let reset=document.getElementById('reset');
convert.addEventListener('click', function () {
    let result = document.getElementById('result');
    let temperature = document.getElementById('temperature').value;
    let option = document.getElementById('conversion').value;
    if (option == 'Celcius') {
        let celcius = (temperature - 32) * 5 / 9;
        result.innerHTML = (celcius.toFixed('2'));
    }
    else if (option == 'Farenheit') {
        let Farenheit = (9 / 5 + temperature) + 32;
        result.innerHTML =  (Farenheit.toFixed('2'));

    }

})

reset.addEventListener('click',function(){
    let result = document.getElementById('result');
    let temperature = document.getElementById('temperature');
    result.innerHTML="";
    temperature.value="";
    
})