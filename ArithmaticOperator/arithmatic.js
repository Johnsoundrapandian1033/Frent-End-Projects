
function add(){
    const a = Number(document.getElementById("num1").value)
    const b = Number(document.getElementById("num2").value)
    function d(){
    document.getElementById("result").innerHTML = a+b;
    }
    d()
}
function sub(){
    const a = Number(document.getElementById("num1").value)
    const b = Number(document.getElementById("num2").value)
    document.getElementById("result").innerHTML = a-b;
}
function mul(){
    const a = Number(document.getElementById("num1").value)
    const b = Number(document.getElementById("num2").value)
    document.getElementById("result").innerHTML = a*b;
}
function divid(){
    const a = Number(document.getElementById("num1").value)
    const b = Number(document.getElementById("num2").value)
    document.getElementById("result").innerHTML=(a/b).toFixed(2);
}