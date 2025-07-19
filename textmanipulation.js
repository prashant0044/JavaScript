// using text content to update the blog title 
const title= document.getElementById('title');
title.textContent="New Blog Title";

// change the bg color
title.style.background='red';

// using inner html to add another paragraph to blog 

const para1=document.getElementById('paragraph');
para1.innerHTML+='<h2>this is a sub heading</h2>';

// using innertext to modify the comments

const comments=document.getElementById('comment1');
comments.innerText='New comment';
