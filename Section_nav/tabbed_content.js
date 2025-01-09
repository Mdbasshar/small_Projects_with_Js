const navSection = document.querySelector('.nav-section');
const navLink = navSection.querySelectorAll('a');
const sectionElements = document.querySelectorAll('section')
const removeActiveLink = ()=>{
    navLink.forEach(link =>{
        link.parentElement.classList.remove('active')
    })
}
const hideSection = ()=>{
    sectionElements.forEach(section =>{
        section.classList.add('hidden')
    })
}
navLink.forEach(link=>{
    link.addEventListener('click',()=>{
        removeActiveLink();
        hideSection();
        link.parentElement.classList.add('active')
        const sectionElement = document.querySelector(link.hash);
        sectionElement.classList.remove('hidden');
    })  
})