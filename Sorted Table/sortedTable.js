const data = [
    {
        Id :  1,
        title : 'Samsung S24 Ultra',
        price : 124999,
        InStock : true,
        category : 'smartphones'
    },
    {
        Id :  2,
        title : 'iPhone 16 Pro Max',
        price : 129999,
        InStock : true,
        category : 'smartphones'
    },
    {
        Id :  3,
        title : 'Samsung S23',
        price : 39999,
        InStock : true,
        category : 'smartphones'
    },
    {
        Id :  4,
        title : 'Motorola edge 50',
        price : 26999,
        InStock : false,
        category : 'smartphones'
    },
    {
        Id :  5,
        title : 'Pixel 8',
        price : 39999,
        InStock : true,
        category : 'smartphones'
    },
    {
        Id :  6,
        title : 'iPhone 16',
        price : 79999,
        InStock : true,
        category : 'smartphones'
    },
    {
        Id :  7,
        title : 'iPhone 16',
        price : 79999,
        InStock : true,
        category : 'smartphones'
    },
    {
        Id :  8,
        title : 'iPhone 16',
        price : 209999,
        InStock : true,
        category : 'smartphones'
    },
    {
        Id :  9,
        title : 'Samsung Galaxy Book',
        price : 224999,
        InStock : true,
        category : 'smartphones'
    },
    {
        Id :  10,
        title : 'MacBook pro',
        price : 239999,
        InStock : true,
        category : 'laptops'
    },
    {
        Id :  11,
        title : 'Infinix INBOOK',
        price : 54999,
        InStock : true,
        category : 'laptops'
    },
    {
        Id :  12,
        title : 'Infinix INBOOK',
        price : 54999,
        InStock : true,
        category : 'laptops'
    },
]

const createTable = productData =>{
    const table = document.createElement('table');
    const tableHead = document.createElement('thead');
    const tableBody = document.createElement('tBody');

    const headers = Object.keys(productData[0]);
    tableHead.appendChild(createHeaderRow(headers));

    productData.forEach(rowData =>{
        tableBody.appendChild(createProductRow(rowData));
    }
    )

    table.appendChild(tableHead);
    table.appendChild(tableBody);
    return table;
};

const createProductRow = product =>{
    const tr = document.createElement('tr');
    Object.values(product).forEach(value =>{
        const td = document.createElement('td');
        td.textContent = value;
        tr.appendChild(td);
    });
    return tr;
};
const createHeaderRow = columnNames =>{
    const tr = document.createElement('tr');
    columnNames.forEach(columnName =>{
        const th = document.createElement('th');
        th.textContent = columnName[0].toUpperCase() + columnName.slice(1);

        const searchUp = document.createElement('span');
        searchUp.textContent = '🔼';
        const searchDown = document.createElement('span');
        searchDown.textContent = '🔽';

        searchUp.onclick = () => sortDataBy(columnName,'ASC')
        searchDown.onclick = () => sortDataBy(columnName,'DSC')

        th.appendChild(searchDown);
        th.appendChild(searchUp);
        tr.appendChild(th);
    });

    return tr;
}

const sortDataBy = (columnName,direction) =>{
    const sortedASCData = [...data.sort((a,b) => a[columnName] > b[columnName]? 1 : -1)];
    const sortedDSCData = [...data.sort((a,b) => a[columnName] < b[columnName]? 1 : -1)];

    renderTable(direction === 'ASC' ? sortedASCData : sortedDSCData);
}
const renderTable = productData =>{
    const container = document.getElementById('sortable-table');
    container.innerHTML = '';
    container.appendChild(createTable(productData));

}

renderTable(data);






// const IdContainer  = document.createElement('div');
// IdContainer.classList.add('id-container');
// container.appendChild(IdContainer)

// const titleContainer  = document.createElement('div');
// titleContainer.classList.add('title-container');
// container.appendChild(titleContainer)
// const priceContainer  = document.createElement('div');
// priceContainer.classList.add('price-container');
// container.appendChild(priceContainer)
// const stockContainer  = document.createElement('div');
// stockContainer.classList.add('stock-container');
// container.appendChild(stockContainer)
// const categoryContainer  = document.createElement('div');
// categoryContainer.classList.add('category-container');
// container.appendChild(categoryContainer)

// for (i = 0;i<sortableData.length;i++){
//     IdContainer.innerText += `${sortableData[i].Id}\n`
//     titleContainer.innerText += `${sortableData[i].title}\n`
//     priceContainer.innerText += `${sortableData[i].price}\n`
//     stockContainer.innerText += `${sortableData[i].InStock}\n`
//     categoryContainer.innerText += `${sortableData[i].category}\n`
// }

