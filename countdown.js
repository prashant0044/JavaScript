function countdown() {
    const input = document.getElementById('time').value;
    const time_display = document.getElementById('result');
    let time_remaining = parseInt(input);

    // Validation
    if (isNaN(time_remaining) || time_remaining <= 0) {
        time_display.innerHTML = 'Please Enter the correct time';
        return;
    }

    // Display Countdown
    const timer = setInterval(() => {
        time_display.textContent = `Time Left: ${time_remaining} Seconds`;
        time_remaining--;

        if (time_remaining < 0) {
            clearInterval(timer);
            time_display.textContent = "Times Up!";
        }
    }, 1000); // Updates every second
}

document.getElementById('start').addEventListener('click', countdown);
