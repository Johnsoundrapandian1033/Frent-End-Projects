document.addEventListener("DOMContentLoaded",function(){
    const span = document.getElementById("color")
    const buttons = document.querySelectorAll("button")
    // const button2 = document.getElementById("decreaseb")
    // const button3 = document.getElementById("resetb")
    let count=0;


// button1.addEventListener("click",increase);
// button2.addEventListener("click",decrease);
// button3.addEventListener("click",reset);
function increase(){
    count++;
    span.textContent = count
}
function decrease(){
    if(count>0){
    count--;
    span.innerHTML = count
    }
}
function reset(){
    count = 0;
    span.innerHTML = count
}
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        if(button.id==="increaseb"){
            increase();
        }
        else if(button.id==="decreaseb"){
            decrease();
        }
        else if(button.id==="resetb") {reset();}
    })
});
});