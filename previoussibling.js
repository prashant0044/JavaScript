// select the buttons 
const button1=document.getElementById('button1');
const button2=document.getElementById('button2');

const text1=button1.previousSibling;
// console.log(text1);
const text2=button2.previousSibling;
// console.log(text2);

if(text1.nodeType==3){
    text1.textContent='Text 1 has been updated';

}

if(text2.nodeType==3){
    text2.textContent='Text 2 has been updated';
}