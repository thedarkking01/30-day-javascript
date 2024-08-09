// Sample product data
const products = [
    {
        name: "Product 1",
        price: 29.99,
        description: "Description for Product 1",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Product 2",
        price: 49.99,
        description: "Description for Product 2",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Product 3",
        price: 19.99,
        description: "Description for Product 3",
        image: "https://via.placeholder.com/150"
    }
];

let cart = [];

// Function to display products
function displayProducts() {
    const productContainer = document.getElementById('product-list');
    products.forEach(product => {
        const productCard = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <p>$${product.price}</p>
                <button onclick="addToCart('${product.name}')">Add to Cart</button>
            </div>
        `;
        productContainer.innerHTML += productCard;
    });
}

// Function to add a product to the cart
function addToCart(productName) {
    const existingProduct = cart.find(prod => prod.name === productName);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        const product = products.find(prod => prod.name === productName);
        product.quantity = 1;
        cart.push(product);
    }
    updateCart();
}

// Function to update the cart display
function updateCart() {
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = "<h2>Shopping Cart</h2>";
    cart.forEach((item, index) => {
        cartContainer.innerHTML += `
            <div class="cart-item">
                <p>${item.name} - $${item.price} (x${item.quantity})</p>
                <button onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
    });
}

// Function to remove a product from the cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Function to handle the checkout process
document.getElementById('checkout-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Order placed successfully!');
    cart = [];
    updateCart();
});

// Initialize product display on page load
window.onload = displayProducts;
