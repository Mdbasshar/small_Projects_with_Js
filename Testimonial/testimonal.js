const testimonialData = [
    {
        'name' : 'Junaid Ahmed',
        'testimonal' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident ratione praesentium vero iste ipsum cum dolorem consequatur voluptatibus aliquam non, dolores sunt nobis Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, rem.',
        'image' : '../images/person-8.jpg"',
        'date' : 'Written on 23rd Aug'
    },
    {
        'name' : 'Md Reyaan Khan',
        'testimonal' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga commodi harum amet praesentium voluptatum officia saepe exercitationem distinctio sequi obcaecati sapiente vero velit numquam quia quo, error, nihil pariatur ducimus officiis impedit.',
        'image' : '../images/person-3.jpg"',
        'date' : 'Written on 25th Aug'
    },
    {
        'name' : 'Noor Md',
        'testimonal' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga commodi harum amet praesentium voluptatum officia saepe exercitationem Lorem distinctio sequi obcaecati sapiente vero velit numquam quia quo, error, nihil pariatur ducimus officiis impedit.',
        'image' : '../images/person-6.jpg"',
        'date' : 'Written on 19th Aug'
    },
    {
        'name' : 'Md Anas',
        'testimonal' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga commodi harum amet praesentium voluptatum officia saepe exercitationem distinctio sequi obcaecati sapiente vero velit numquam quia quo, error, nihil pariatur ducimus officiis impedit.',
        'image' : '../images/person-2.jpg"',
        'date' : 'Written on 28th Aug'
    },
    {
        'name' : 'Kamran Ansari',
        'testimonal' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga commodi harum amet praesentium voluptatum officia saepe exercitationem distinctio sequi obcaecati sapiente vero velit numquam quia quo, error, nihil pariatur ducimus officiis impedit.',
        'image' : '../images/person-4.jpg"',
        'date' : 'Written on 30th Aug'
    }
]

const container = document.getElementById('container');

const imgContainer = document.querySelector('.img-container');
const img = imgContainer.querySelector('img');

const personName  = imgContainer.querySelector('.name');
const testimony = document.querySelector('.testimony');
const writtenDate = document.querySelector('.written-date');

const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');


let i = 0;

function next(){
    img.src = `${testimonialData[i].image}`;
    personName.innerText = `${testimonialData[i].name}`
    testimony.innerText = `${testimonialData[i].testimonal}`
    writtenDate.innerText = `${testimonialData[i].date}`
}
nextBtn.addEventListener('click',()=>{
    i = i+1;
    if(i>testimonialData.length){
        i = 0;
    }
    next()
})
prevBtn.addEventListener('click',()=>{
    i = i-1;
    if(i<0){
        i = testimonialData.length;
    }
    next()
})