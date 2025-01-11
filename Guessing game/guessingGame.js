
const buttons = document.querySelector("button");
//const span  =  document.getElementById("result");
buttons.addEventListener("click",guessing);
function guessing(){
    const input = Number(document.getElementById("input").value);
    if(input==NaN) document.getElementById("result").innerHTML= "only using numbers with below 1000";
   let count =0 ;
   let i =0,j =1000;
   
   console.log(input);
   let mid=0;
   while(input!=mid){
      mid = Math.round((i+j)/2);
      count++;
     
     if(mid < input) i = mid;
     else if(mid>input) j = mid;
     else if(mid == input) {  
        console.log(count);  
         document.getElementById("result").textContent= count +"th Attempt find the number" ;
     }
     else document.getElementById("result").innerHTML= "only using numbers with below 1000";
  }

}