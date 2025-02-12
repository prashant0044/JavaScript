function countdown(){
    const input=document.getElementById('time');
    const time_display=document.getElementById('result');
    const time_remaining=parseInt(input);
    
    if(isNaN(time_remaining || time_remaining<=0)){
        time_display.innerHTML='Please Enter the correct time';
    }

    time_display.textContent=`Time Left: ${time_remaining} Seconds`;
    for (let i=time_remaining; i>=0;i--){
        (function(count){
            if(count>0){
                time_display.textContent=`Time Left: ${count} Seconds `;
            }
            else{
                time_display.textContent="Times Up!";
            }
            setTimeout(()=>{},(time_remaining-count)*1000 )
        })(i)
    }
};

document.getElementById('start').addEventListener('click',countdown);
