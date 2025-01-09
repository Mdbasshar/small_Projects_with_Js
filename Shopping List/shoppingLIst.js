class shoppingList {
    constructor(
        itemSelector,
        addItemSelector,
        newItemTextSelector,
        storageKey = 'shoppingList'
    ){
        this.storageKey = storageKey;
        this.itemsElement = document.querySelector(itemSelector);
        this.addItemButtonElement = document.querySelector(addItemSelector);
        this.newItemTextElement = document.querySelector(newItemTextSelector);

        this.items = JSON.parse(localStorage.getItem(this.storageKey)) || [];

        this.initialise();
    }

    initialise(){
        this.addItemButtonElement.addEventListener('click', ()=>{
            const value = this.newItemTextElement.value;
            this.addItem(value);
            this.newItemTextElement.value = '';
            this.renderItems();
            this.storeItems();
        })
    }

    renderItems(){
        this.itemsElement.innerHTML = '';
        if(this.items.length === 0){
            const itemsElement = document.createElement('li')
            itemsElement.textContent = 'No Items';
            this.itemsElement.appendChild(itemsElement)
        }

        this.items.forEach((item,index) =>{
            const itemElement = document.createElement('li');
            itemElement.textContent = item;
            const removeElement = document.createElement('span');
            removeElement.textContent = 'Remove';
            removeElement.classList.add('remove-item');
            removeElement.onclick = () =>{
                this.removeItemAt(index);
                this.renderItems();
                this.storeItems();
            };
            
            itemElement.appendChild(removeElement);
            this.itemsElement.appendChild(itemElement)
        })
    }

    addItem(newItem){
        this.items.push(newItem);
    }

    removeItemAt(indexToRemove){
        this.items =this.items.filter((item,index)=>
            indexToRemove != index);
    }

    storeItems(){
        localStorage.setItem(this.storageKey,JSON.stringify(this.items))
    }
}

const myShoppingList = new shoppingList('#shoppingListItems','#addItem','#newItemText')

myShoppingList.renderItems();