
let button = document.querySelector("button")
button.addEventListener("click",displaystats)
 let resultdiv = document.createElement('div')
 resultdiv.id = 'result' 
 document.getElementById('john').appendChild(resultdiv) 
function displaystats(){
    input = document.getElementById("input")
    city = input.options[input.selectedIndex].value
    console.log(city)
    let population = 0
    let litaracyrate = 0
    let language = ""
    switch(city){
        case 'bengalore':
            population  = 60051489
            litaracyrate = 78.4
            language = "Hindi"
            break;
        case 'chennai':
            population  = 81021268
            litaracyrate = 70.3
            language = "Tamil"
            break;
        case 'mumbai':
            population  = 101148245
            litaracyrate = 85.8
            language = "Hindi"
            break;
        case 'hydrabad':
            population  = 57238942
            litaracyrate = 64.5
            language = "Telugu"
            break;
    };
    let text = ` ${city} population is ${population}. The Litaracy rate is ${litaracyrate}. Mostly speek in ${language}`
    console.log(text)
    
    document.getElementById('result').innerHTML= text;
}