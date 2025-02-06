
let submit = document.getElementById('submit');
submit.addEventListener('click', function () {
    let age = document.getElementById('age').value;

    let college = document.getElementById('college').value;
    let ans = document.getElementById('ans');
    if (age < 18) {
        ans.innerHTML = "You are Underage";

    }
    else if (college == 'yes') {
        ans.innerHTML = "Dekhi jayegi";
    }
    else if(college=='no'){
        ans.innerHTML="phir toh aur Piyo ";
    }
    else {
        ans.innerHTML = "You are in legal drinking age Congratulations....."
    }
})