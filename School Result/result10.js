
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
        const d =Number(document.getElementById("4").value);
        const e =Number(document.getElementById("5").value);
        const f = Number(document.getElementById("6").value);
        if(a>100 || a<0 ||f<0||f>25|| b>100 || b<0|| c>100 || c<0||d>75 || d<0||e>100 || e<0) {
            document.getElementById("result").innerText = "invalid mark.So,re-Enter the mark";
        }
        else{
           
            total =a+b+c+d+e+f;
            //total = a+b+c+d+e;
            console.log(total);
            document.getElementById("result").innerText= total;
        }
    }
    function Percentage(){
        const a =Number(document.getElementById("1").value);
            const b =Number(document.getElementById("2").value);
            const c =Number(document.getElementById("3").value);
            const d =Number(document.getElementById("4").value);
            const e =Number(document.getElementById("5").value);
            const f= Number(document.getElementById("6").value);
            if(a>100 || a<0 ||f<0||f>25|| b>100 || b<0|| c>100 || c<0||d>75 || d<0||e>100 || e<0) {
                document.getElementById("result").innerText = "invalid mark.So,re-Enter the mark";
            }
            else{
            let tot =a+b+c+d+e+f;
            let per = (tot/500)*100;
            document.getElementById("result").innerText= per;
            }
        }
    function result(){
    
        const a =Number(document.getElementById("1").value);
        const b =Number(document.getElementById("2").value);
        const c =Number(document.getElementById("3").value);
        const d =Number(document.getElementById("4").value);
        const e =Number(document.getElementById("5").value);
        const f= Number(document.getElementById("6").value);
        let res ="";
            if(a>100 || a<0 ||f<0||f>25|| b>100 || b<0|| c>100 || c<0||d>75 || d<0||e>100 || e<0) {
                  document.getElementById("result").innerText = "invalid mark.So,re-Enter the mark";
            }
            else{
            if(a<35||b<35||c<35||(d+f<35 && f>=15) ||e<35||f<15){res= "fail";}
            else res = "pass";
            document.getElementById("result").innerText= res;}
 }
                