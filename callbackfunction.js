// API call
function fetchdata(callback){
    console.log('fetching weather data...');
    setTimeout(() => {
        console.log('Weather data fetched successfully...');
        callback();
    }, 2000);
}

// function to process the data
function processdata(){
    console.log("Processing the data and displaying it...");
    
}


fetchdata(processdata);