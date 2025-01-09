const colorChangeBtn = document.getElementById('color-btn');
const colorChange = document.getElementById('current-color');

let colors = ['red','blue','rgb(134,200,0)','green','dodgerblue','orange','orangered','rgb(98,55,8)','teal','aliceblue','bisque','rgb(0,145,24)','lightgrey'];

function randomNum(){
    return Math.floor(Math.random()*colors.length)
}

colorChangeBtn.addEventListener('click',()=>{
    let color = colors[randomNum()];
    colorChange.innerText = color;
    document.body.style.backgroundColor = color;
})