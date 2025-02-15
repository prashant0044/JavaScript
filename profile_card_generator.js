const appconatianer=document.getElementById('app');
const button=document.getElementById('generatebtn');

function createcard(){
    const profilecard=document.createElement('div');
    profilecard.className='profile-card';
    const profileimg=document.createElement('img');
    profileimg.src="https://cdn.pixabay.com/photo/2021/10/08/07/13/autumn-6690466_1280.jpg";

    const heading=document.createElement('h2');
    heading.textContent="Prashant Rana";
    const profiledesc=document.createElement('p');
    profiledesc.textContent='A passionate Web developer with experience in JavaScript and React';

    // Append all the elements
    // profilecard.appendChild(profileimg);
    // profilecard.appendChild(heading);
    // profilecard.appendChild(profiledesc);
    // appconatianer.appendChild(profilecard);
    profilecard.append(profileimg,heading,profiledesc);
    appconatianer.append(profilecard);

}

button.addEventListener('click',createcard);