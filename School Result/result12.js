
let total = 0;

const btn1 =document.getElementById("res");
const btn2 =document.getElementById("per");
const btn3 =document.getElementById("tot");
btn1.addEventListener("click",result);
btn2.addEventListener("click",Percentage);
btn3.addEventListener("click",Total);

    function Total(){
        const a =Number(document.getElementById("1").value);
        const b =Number(document.getElementById("2").value);
        const c =Number(document.getElementById("3").value);
        const d =(70*Number(document.getElementById("4").value))/100;
        const e =(70*Number(document.getElementById("5").value))/100;
        const f = (35*Number(document.getElementById("6").value))/50;
        const g = (35*Number(document.getElementById("7").value))/50;
        const h = Number(document.getElementById("8").value);
        const i = Number(document.getElementById("9").value);
        const j = Number(document.getElementById("10").value);
        const k = Number(document.getElementById("11").value);
        if(a>100 || a<0 ||f<0||f>35|| b>100 || b<0|| c>100 || c<0||d>70 || d<0||e>70 || e<0||g>35||g<0) {
            document.getElementById("result").innerText = "theory mark is invalid mark.So,re-Enter the mark";
        }
        else if(h<0||h>30||i<0||i>30||j<0||j>15||k<0||k>15){
            document.getElementById("result").innerText = "Laboratary mark is invalid mark.So,re-Enter the mark";
        }
        else{
           
            total =a+b+c+d+e+f+g+h+i+j+k;
            let engCo = c+((d+h)/2)+((e+i)/2);
            let medCo = (j+f)+(k+g)+((d+h)/2)+((e+i)/2);
            //total = a+b+c+d+e;
            console.log(total);
            document.getElementById("result").innerText="Total Mark  :"+total+"\n"+"Engineering Cut-Off Mark  :"+engCo+"\n"+"Medical Cut-Off Mark  :"+medCo;
        }
    }
    function Percentage(){
        
        const a =Number(document.getElementById("1").value);
        const b =Number(document.getElementById("2").value);
        const c =Number(document.getElementById("3").value);
        const d =(70*Number(document.getElementById("4").value))/100;
        const e =(70*Number(document.getElementById("5").value))/100;
        const f = (35*Number(document.getElementById("6").value))/50;
        const g = (35*Number(document.getElementById("7").value))/50;
        const h = Number(document.getElementById("8").value);
        const i = Number(document.getElementById("9").value);
        const j = Number(document.getElementById("10").value);
        const k = Number(document.getElementById("11").value);
        if(a>100 || a<0 ||f<0||f>35|| b>100 || b<0|| c>100 || c<0||d>70 || d<0||e>70 || e<0||g>35||g<0) {
            document.getElementById("result").innerText = "theory mark is invalid mark.So,re-Enter the mark";
        }
        else if(h<0||h>30||i<0||i>30||j<0||j>15||k<0||k>15){
            document.getElementById("result").innerText = "Laboratary mark is invalid mark.So,re-Enter the mark";
        }
            else{
            let tot =a+b+c+d+e+f+g+h+i+j+k;
            let per = (tot/600)*100;
            document.getElementById("result").innerText= per.toFixed(5,2);
            }
        }
    function result(){
    
        const a =Number(document.getElementById("1").value);
        const b =Number(document.getElementById("2").value);
        const c =Number(document.getElementById("3").value);
        const d =(70*Number(document.getElementById("4").value))/100;
        const e =(70*Number(document.getElementById("5").value))/100;
        const f = (35*Number(document.getElementById("6").value))/50;
        const g = (35*Number(document.getElementById("7").value))/50;
        const h = Number(document.getElementById("8").value);
        const i = Number(document.getElementById("9").value);
        const j = Number(document.getElementById("10").value);
        const k = Number(document.getElementById("11").value);
        let res ="";
        if(a>100 || a<0 ||f<0||f>35|| b>100 || b<0|| c>100 || c<0||d>70 || d<0||e>70 || e<0||g>35||g<0) {
            document.getElementById("result").innerText = "theory mark is invalid mark.So,re-Enter the mark";
        }
        else if(h<0||h>30||i<0||i>30||j<0||j>15||k<0||k>15){
            document.getElementById("result").innerText = "Laboratary mark is invalid mark.So,re-Enter the mark";
        }
            else{
            if(a<35||b<35||c<35||d<21 ||e<21||f<10.5||g<10.5||h<15||i<15||j<7.5||k<7.5){res= "fail";}
            else res = "pass";
            document.getElementById("result").innerText= res;}
 }
                