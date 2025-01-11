function fact(){
    let month = Number(document.getElementById("num1").value)
    let mul = 1;
    console.log(mul)
    if(month ==0) mul = 1;
    for(let i =month;i>0;i--){
          mul*=i;
    }
    console.log(mul)
    document.getElementById("result").innerHTML="" +mul;
}