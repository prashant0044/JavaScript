const usercard= document.getElementById('usercard');
// console.log(usercard);
const userid=usercard.getAttribute('data-user-id');
// // console.log(userid);

const username=usercard.getAttribute('data-user-role');
// console.log(username);

usercard.setAttribute("data-user-role","super-admin");
// console.log(usercard);

usercard.setAttribute("data-user-id","000");
// console.log(usercard);
console.log(username);
console.log(userid);