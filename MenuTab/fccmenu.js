// Menu
const menu = [
    {
        id: 1,
        food: "Berry Pancakes",
        category: 'Breakfast',
        price: 14.99,
        img: 'img/pancakesBF.jpg',
        desc: 'I Jupiter U had Funny junr mothe setp bitter my own family cakes with special tastes the pan of the cake'
    },
    {
        id: 2,
        food: "Yummy fisto",
        category: 'Lunch',
        price: 22.99,
        img: 'img/chickenLunch.jpg',
        desc: 'I Jupiter U had Funny junr mothe setp bitter my own family cakes with special tastes this is the special one'
    },
    {
        id: 3,
        food: "Choco burst",
        category: 'Shake',
        price: 15.99,
        img: 'img/chocoshake.jpg',
        desc: 'I Jupiter U had Funny junr mothe setp bitter my own family cakes with special tastes extraordinary quality taste'
    },
    {
        id: 4,
        food: "Breadilicious",
        category: 'Breakfast',
        price: 13.99,
        img: 'img/bananabreadBF.jpg',
        desc: 'I Jupiter U had Funny junr mothe setp bitter my own family cakes with special tastes yummy fills'
    },
    {
        id: 5,
        food: "Pasta",
        category: 'Lunch',
        price: 14.99,
        img: 'img/pastaLunch.jpg',
        desc: 'I Jupiter U had Funny junr mothe setp bitter my own family cakes with special tastes like a heaven'
    },
    {
        id: 6,
        food: "Oreo Fiest",
        category: 'Shake',
        price: 16.99,
        img: 'img/chocoOreoShake.jpg',
        desc: 'I Jupiter U had Funny junr mothe setp bitter my own family cakes with special tastes fantastic beast'
    },
    {
        id: 7,
        food: "Fruit Stars",
        category: 'Breakfast',
        price: 17.99,
        img: 'img/fruitBF.jpg',
        desc: 'I Jupiter U had Funny junr mothe setp bitter my own family cakes with special tastes literally amazing'
    },
    {
        id: 8,
        food: "Mega Bruno",
        category: 'Lunch',
        price: 19.99,
        img: 'img/brunoLunch.jpg',
        desc: 'I Jupiter U had Funny junr mothe setp bitter my own family cakes with special tastes having special occasion'
    },
    {
        id: 9,
        food: "Double Bursty",
        category: 'Shake',
        price: 14.99,
        img: 'img/brownShake.jpg',
        desc: 'I Jupiter U had Funny junr mothe setp bitter my own family cakes with special tastes fruit bear'
    },
    {
        id: 10,
        food: "Honey Bakes",
        category: 'Breakfast',
        price: 18.99,
        img: 'img/panblueberryBF.jpg',
        desc: 'I Jupiter U had Funny junr mothe setp bitter my own family cakes with special tastes the sweat fun have'
    },
    {
        id: 11,
        food: "Quarantie buddy",
        category: 'Lunch',
        price: 20.99,
        img: 'img/BGLunch.jpg',
        desc: 'I Jupiter U had Funny junr mothe setp bitter my own family cakes with special tastes the sweat fun have'
    },
    {
        id: 12,
        food: "Strawberry Fusion",
        category: 'Shake',
        price: 15.99,
        img: 'img/strawberryShake.jpg',
        desc: 'I Jupiter U had Funny junr mothe setp bitter my own family cakes with special tastes the sweat fun have'
    },
]
//selecting item
const menuList = document.querySelector('.section-center')
const btnContainer = document.querySelector('.btn-container')

// loading items
window.addEventListener('DOMContentLoaded', function(){
    displayMenuItems(menu)
    displayMenuBtns()
})

// display function
function displayMenuItems(menuArr){
    let displayMenu = menuArr.map(function(item){
        
        return `<article class="menu-item">
        <img src=${item.img} alt=${item.food} class="image">
        <div class="item-info">
        <header>
        <h4>${item.food}</h4>
        <h4 class="price">$${item.price}</h4>
        </header>
        <p class="item-text">${item.desc}</p>
        </div>
        </article>`
    })
    displayMenu = displayMenu.join("\n")
    menuList.innerHTML = displayMenu 
} 

//adding dynamically filter-btns
function displayMenuBtns(){
        const categories = menu.reduce(function(values,item){
            if(!values.includes(item.category)){
                values.push(item.category)
            }
            return values
        },['All'])
        const categoryBtn = categories.map(function(category){
            return `<button class="btn" type="button" data-id=${category}>${category}</button>`
        })
        .join("\n");
        btnContainer.innerHTML = categoryBtn
        
        const btns = btnContainer.querySelectorAll('.btn')
        btns.forEach(function(btn){
            btn.addEventListener('click',function(filter){
                const filterDisplay = filter.currentTarget.dataset.id
                const menuCategory = menu.filter(function(menuItems){
                    if (menuItems.category === filterDisplay){
                        return menuItems
                    }
                })
                if(filterDisplay === 'All'){
                    displayMenuItems(menu)
                }
                else{
                    displayMenuItems(menuCategory)
                }
            })
        })
}