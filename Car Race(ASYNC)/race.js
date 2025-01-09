const  carStart = (carNum, maxTime = 5) =>
    new Promise((resolve,reject)=>{
        const random = Math.floor(Math.random()*maxTime)*1000;

        console.log(random);
        setTimeout(()=>{
            resolve(carNum)
        },random);
    })
const carsOrder = []
const updateDisplay = ()=>{
    const raceElement = document.getElementById('race')
    raceElement.innerHTML = '';
    carsOrder.forEach((id,position) =>{
        raceElement.innerHTML += `<div><img src = "./png/car-${id}.png"><span>#${position + 1} Place </div>`
    });
}
carStart(1)
    .then(result =>{
        console.log(result)
        carsOrder.push(result)
    })
    .then(updateDisplay)
carStart(2)
    .then(result =>{
        console.log(result)
        carsOrder.push(result)
    })
    .then(updateDisplay)
carStart(3)
    .then(result =>{
        console.log(result)
        carsOrder.push(result)
    })
    .then(updateDisplay)