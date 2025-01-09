// Local reviews
const reviews = [
    {
        id: 1,
        name: "Jack Harper",
        job: "UX Designer",
        img: "./img/person-1.jpg",
        text:
        "I'm Jack Harper from California. I am a UX Designer. It is a good form of skill, turmeric powder. I am patience learner and having a good communication skill with degree of master in science. It is a great app for everyday use."
    },
    {
        id: 2,
        name: "Sarah jones",
        job: "Intern",
        img: "./img/person-2.jpg",
        text:
        "I'm Sarah Jones from Australia. I am a Intern. It is a good form of skill, turmeric powder. I am patience learner and having a good communication skill with degree of master in science and philosphy. It is a great app for everyday use."
    },
    {
        id: 3,
        name: "Geralt Smith",
        job: "Game Developer",
        img: "./img/person-3.jpg",
        text:
        "I'm Geralt Smith from New York. I am a Game Developer. It is a good form of skill, turmeric powder. I am patience learner and having good communication skill with degree of master in science. It is a great app for everyday use, the best one I have used ever."
    },
    {
        id: 4,
        name: "Emily Jackson",
        job: "Web Designer",
        img: "./img/person-4.jpg",
        text:
        "I'm Emily Jackson from Armsterdam. I am a Web Designer. It is a good form of skill, turmeric powder. I am patience learner and having a good communication skill with degree of master in science. It is a great app tuskania for everyday use."
    },
    {
        id: 5,
        name: "Mathew Murdock",
        job: "Lawyer",
        img: "./img/person-5.jpg",
        text:
        "I'm Mathew Murdock from London. I am a Lawyer. It is a good form of skill, turmeric powder. I am patience learner and having a good communication skill with degree of master in science. It is a great app for everyday use."
    },
    {
        id: 6,
        name: "Henry William",
        job: "Python Dev",
        img: "./img/person-6.jpg",
        text:
        "I'm Henry William from America. I am a Python Dev. It is a good form of skill, turmeric powder. I am patience learner and having a good communication skill with degree of master in science. It is a great app for everyday use."
    },
    {
        id: 7,
        name: "Yennefer",
        job: "App Developer",
        img: "./img/person-7.jpg",
        text:
        "I'm Yennefer from Sydney. I am a App Developer. It is a good form of skill, turmeric powder. I am patience learner and having a good communication skill with degree of master in science. It is a great app for everyday use."
    },
    {
        id: 8,
        name: "James Patrick",
        job: "Full Stack Developer",
        img: "./img/person-8.jpg",
        text:
        "I'm James Patrick from San Francisco. I am a Full Stack Developer. It is a good form of skill, turmeric powder. I am patience learner and having a good communication skill with degree of master in science. It is a great app for everyday use."
    },
]
//selecting items
const name = document.getElementById("author")
const job = document.getElementById("job")
const text = document.getElementById("info")
const img = document.getElementById("person-img")

const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")
const randomBtn = document.querySelector(".random")

//set starting item
let currentItem = 0

// Load initial item

window.addEventListener('DOMContentLoaded', function(){
    showPerson(currentItem)
})

// Show person based on item

function showPerson(person){
    const item = reviews[person];
    img.src =  item.img
    name.textContent = item.name
    job.textContent = item.job
    text.textContent = item.text
}

// Show next person

nextBtn.addEventListener("click", function(){
    currentItem ++
    if(currentItem > reviews.length - 1 ){
        currentItem = 0
    }
    showPerson(currentItem)
})
prevBtn.addEventListener("click", function(){
    currentItem --
    if(currentItem < 0 ){
        currentItem = reviews.length-1
    }
    showPerson(currentItem)
})
randomBtn.addEventListener("click", function(){
    currentItem = Math.floor(Math.random()*reviews.length)
    showPerson(currentItem)
})
