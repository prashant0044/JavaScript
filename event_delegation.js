document.getElementById("datalist").addEventListener('click',function(event){
    const clickedel=event.target;
    console.log(clickedel.tagName);
    if(clickedel.tagName=='BUTTON'){
        const itemno=clickedel.getAttribute('data-item');
        console.log('You clicked on' + " "+itemno);
    }
})