// let button = document.getElementById('button');
//     button.addEventListener("click",table());
function table(){
    document.getElementById("result").innerText="";
    let a = Number(document.getElementById("hi").value);
    for(let i= 1; i<=20;i++){
        document.getElementById("result").innerText +=a+" x "+i+ " = "+a*i+"\n";
    }
}