const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const ampm = document.querySelector(".ampm");

function setTime(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    if (h>12){

        h-=12;
        ampm.innerHTML="PM";
    }

    hourEl.innerHTML=h;
    minuteEl.innerHTML=m
    secondEl.innerHTML=s;
    
    setTimeout(()=>{
        setTime();
    },1000);
}

setTime();