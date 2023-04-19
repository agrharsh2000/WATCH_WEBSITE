const body = document.querySelector("body")
const hourHand = document.querySelector(".hour")
const minuteHand = document.querySelector(".minute")
const secondHand = document.querySelector(".second")


let startTimer=document.querySelector(".on-switch")
let stopTimer=document.querySelector(".off-switch")


const updateTime=()=>{
    let date=new Date();
    let  secToDeg = (date.getSeconds()/60)*360;
    let  minToDeg = (date.getMinutes()/60)*360;
    let  hourToDeg = (date.getHours()/12)*360;

   secondHand.style.transform = `rotate(${secToDeg}deg)`;
   minuteHand.style.transform = `rotate(${minToDeg}deg)`;
   hourHand.style.transform = `rotate(${hourToDeg}deg)`;
};

let intervalId;

startTimer.onclick=()=>{
    console.log("hello");
    intervalId = setInterval(updateTime,1000);
    updateTime();
};

stopTimer.onclick=()=>{
    clearInterval(intervalId);
}





