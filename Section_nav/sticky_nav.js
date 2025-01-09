const nav = document.querySelector('.nav-section');
const navLinks = nav.querySelectorAll('a');

const navPosition = nav.getBoundingClientRect().top;

window.addEventListener('scroll',()=>{
    const scrollPostition = window.scrollY;
    nav.style.top = scrollPostition + 'px';

    navLinks.forEach(link =>{
        const sectionElement = document.querySelector(link.hash);
        const offset = 50;
        if (scrollPostition + offset > sectionElement.offsetTop && scrollPostition + offset < sectionElement.offsetTop + sectionElement.offsetHeight) {
            link.classList.add('active');
        }else{
            link.classList.remove('active');
        }
    })
    // console.log(scrollPostition)
})