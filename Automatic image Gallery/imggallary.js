let slideIndex = 0;
display(slideIndex);

function forward(n) {
  display(slideIndex += n);
}
function backward(n){
    display(slideIndex=n);
}
function display(n){
    let i;
    let slide=document.getElementsByClassName("john");
    for(i=0;i<slide.length;i++){
        slide[i].style.display="none";
    }
    slideIndex++;
    if(slideIndex>slide.length){
        slideIndex=1;
    }
    slide[slideIndex-1].style.display="block";
    setTimeout(display,2000);
}
