const shoes = [
    { id: 1, name: 'Nike Air Max', price: 120, image: 'images/shoe1.jpg' },
    { id: 2, name: 'Adidas Ultraboost', price: 180, image: 'images/shoe2.jpg' },
    { id: 3, name: 'Puma Running Shoes', price: 90, image: 'images/shoe3.jpg' }
];

function displayShoes() {
    const shoeList = document.querySelector('.shoe-list');
    shoes.forEach(shoe => {
        const shoeItem = document.createElement('div');
        shoeItem.classList.add('shoe-item');
        
        shoeItem.innerHTML = `
            <img src="${shoe.image}" alt="${shoe.name}">
            <h2>${shoe.name}</h2>
            <p>$${shoe.price}</p>
            <button onclick="addToCart(${shoe.id})">Add to Cart</button>
        `;
        
        shoeList.appendChild(shoeItem);
    });
}

let cart = [];

function addToCart(id) {
    const shoe = shoes.find(shoe => shoe.id === id);
    cart.push(shoe);
    alert(`${shoe.name} has been added to the cart!`);
}

displayShoes();
