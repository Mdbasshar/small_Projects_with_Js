const counterValue = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
let total = 0;
let limit = 25;
const updateCounter = () =>{
    if (total > limit){
        total = limit;
    }
    
    if(total < 0){
        total = 0;
    }
    counterValue.innerText = total;
    document.body.style.backgroundColor = `rgb(${(total/limit )*255},80,10)`
}
updateCounter()
incrementBtn.addEventListener('click',()=>{
    total += 1;
    updateCounter()
})
decrementBtn.addEventListener('click',()=>{
    total -= 1;
    updateCounter()
})