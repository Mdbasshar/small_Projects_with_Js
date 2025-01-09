const hours = document.getElementById('hoursInput');
const minutes = document.getElementById('minutesInput');
const seconds = document.getElementById('secondsInput');
const start = document.getElementById('start-btn');

const hoursVal = document.getElementById('hours-value');
const minutesVal = document.getElementById('minutes-value');
const secondsVal = document.getElementById('seconds-value');

let startValue = false;

let hoursValue = hours.value;
let minutesValue = minutes.value;
let secondsValue = seconds.value;


function countdown(){
    if(minutesValue > 60){
        minutesValue = 60 
    }
    if(secondsValue > 60){
        secondsValue = 60 
    }
    if(hoursValue <10){
        hoursVal.innerText = `0${hoursValue}`
    } else{ hoursVal.innerText = `${hoursValue}`}
    if(minutesValue <10){
        minutesVal.innerText = `0${minutesValue}`
    } else{ minutesVal.innerText = `${minutesValue}`}
    if(secondsValue <10){
        secondsVal.innerText = `0${secondsValue}`
    } else{ secondsVal.innerText = `${secondsValue}`}
    
    if(hoursValue > 0 || minutesValue > 0 ||secondsValue > 0){
        secondsValue -= 1
        if((hoursValue > 0 || minutesValue >= 0) && secondsValue < 0 ){
            minutesValue -= 1
            secondsValue = 59
        }
        if(hoursValue > 0 && minutesValue <0){
            hoursValue -= 1;
            minutesValue = 59;

        }
    }
}
start.addEventListener('click',()=>{
    if (startValue === false){
        setInterval(countdown,1000)
    }
    if(hoursValue > 0 || minutesValue > 0 ||secondsValue > 0){
        startValue = true;
    }
})
