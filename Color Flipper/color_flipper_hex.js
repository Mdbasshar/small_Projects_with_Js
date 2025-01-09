const colorChangeBtn = document.getElementById('color-btn');
const colorValue = document.getElementById('current-color');


let colorsElement = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
let color = '#';

function random(){
    return Math.floor(Math.random()*colorsElement.length);
} 

function colorGenerator(){
    color = '#';
    for (i=0;i<6;i++){
    color += colorsElement[random()];
    }
    return color
}
// console.log(colorGenerator())

colorChangeBtn.addEventListener('click', ()=>{
    let newColor = colorGenerator()
    console.log(newColor)
    colorValue.innerText = newColor;
    document.body.style.backgroundColor = newColor
})