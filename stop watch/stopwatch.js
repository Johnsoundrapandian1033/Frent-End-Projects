let stop = document.getElementsByClassName("stop");
let watch=document.getElementsByClassName("watch");
let id = document.getElementById("pandian");
let btn1=document.getElementById("start");
let btn2=document.getElementById("stops");
let btn3=document.getElementById("reset");
let timer;
let hr=0;
let min=0;
let sec=0;
let msec =0;
let count=0;
btn1.addEventListener("click",function(){
     timer=true;
     display();
});
btn2.addEventListener("click",function(){
    timer=false;
});
btn3.addEventListener("click",function(){
    timer=false;
    hr=0;
    min=0;
    sec=0;
    msec =0;
});
function display(){
    if(timer){
       msec++;
    }
    if(msec==100){
        sec++;
        msec=0;
    }
    if(sec==60){
        min++;
        sec=0;
    }
    if(min==60){
        hr++;
        min=0;
        sec=0;
    }
    let hours= hr;
    let minutes = min;
    let seconds = sec;
    let millisecond = msec;
    if(hours<10){
        hours="0"+hours;
    }
    if(minutes<10){
        minutes="0"+minutes;
    }
    if(seconds<10){
        seconds="0"+seconds;
    }
    if(millisecond<10){
        millisecond ="0"+millisecond;
    }
    document.getElementById("hr").innerHTML=hours;
    document.getElementById("min").innerHTML=minutes;
    document.getElementById("sec").innerHTML=seconds;
    document.getElementById("msec").innerHTML=millisecond;
    setTimeout(display,10);
}