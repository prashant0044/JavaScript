const btn=document.getElementById('button')
btn.addEventListener('click',function(event){
    console.log('button is clicked');
})

btn.addEventListener('dblclick',function(){
    console.log('button is double clicked');
})

btn.addEventListener('mouseenter',function(){
    console.log("mouse is entered");
    
})

btn.addEventListener('mouseleave',()=>{
    console.log("mouse is leaving");
    
})