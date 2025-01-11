const span = document.getElementById("color")
const button = document.getElementById("click")
const div  = document.getElementById("soundar")
const arr=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
console.log(arr.length)
button.addEventListener("click",colorflip);
function colorflip(){
    let hex = "#"
    for(let i =1; i <= 6;i++){
       hex+= hexcolor()
    }
    console.log(hex)
    div.style.backgroundColor = hex
    span.innerHTML = hex
}
function hexcolor(){
    let hexcl = Math.floor(Math.random()*16)
    return arr[hexcl]
}