
function fd(){
    const month = Number(document.getElementById("input").value)
    console.log(month)
    let rate  = 0;
    if(month < 3) 
        rate = 5.9
    else if(month >=3 && month < 5) 
        rate = 6.4

    else if(month >= 5 && month < 7) 
        rate = 6.8
    
    else if(month>=7 && month < 10)
        rate = 7.2
    
    else 
        rate = 7.5
    
    console.log(rate)
    result.innerHTML = rate.toFixed(1)+"% of fd rate"
}