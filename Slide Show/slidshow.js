let slideIndex = 1;
display(slideIndex);

function forward(n) {
  display(slideIndex += n);
}
function backward(n){
    display(slideIndex=n);
}
// function display(n){
//     let i;
//     let slide=document.getElementsByClassName("john");
//     for(i=0;i<slide.length;i++){
//         slide[i].style.display="none";
//     }
//     slideIndex++;
//     if(slideIndex>slide.length){
//         slideIndex=1;
//     }
//     slide[slideIndex-1].style.display="block";
//     setTimeout(display,2000);
// }
function display(n) {
  let i;
  let slides = document.getElementsByClassName("john");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if(n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for(i=0;i<dots.length;i++){
    dots[i].className=dots[i].className.replace("active","");
  }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className +=" active"; 
  // dots[slideIndex-1].className += " active";
  // setTimeout(display,2000);
}