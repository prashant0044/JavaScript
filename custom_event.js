const username = document.getElementById("uname");
const submit = document.getElementById("submit");

document.addEventListener('unamesubmitted', function(event) {
    console.log(`username ${event.detail.text} has been submitted`);
});

submit.addEventListener('click', function() {
    // Create a fresh event every time
    const unamesubmitted = new CustomEvent("unamesubmitted", {
        bubbles: true,
        cancelable: true,
        detail: { text: username.value }
    });

    document.dispatchEvent(unamesubmitted);
});