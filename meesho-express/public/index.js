// Sample products data
const products = [
    { id: 1, name: 'Kurti', price: 299, emoji: '👗' },
    { id: 2, name: 'Saree', price: 549, emoji: '👚' },
    { id: 3, name: 'Lehenga', price: 899, emoji: '💃' },
    { id: 4, name: 'Top', price: 199, emoji: '👕' },
    { id: 5, name: 'Jeans', price: 449, emoji: '👖' },
    { id: 6, name: 'Shoes', price: 799, emoji: '👠' },
    { id: 7, name: 'Handbag', price: 599, emoji: '👜' },
    { id: 8, name: 'Scarf', price: 149, emoji: '🧣' }
];

let cart = [];

// Load products on page load
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
});

// Display products
function displayProducts() {
    const productsList = document.getElementById('productsList');
    let html = '';
    
    products.forEach(product => {
        html += `
            <div class="product-card">
                <div class="product-image">${product.emoji}</div>
                <div class="product-info">
                    <div class="product-name">${product.name}</div>
                    <div class="product-price">₹${product.price}</div>
                    <button class="add-to-cart" onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
                </div>
            </div>
        `;
    });
    
    productsList.innerHTML = html;
}

// Add to cart
function addToCart(name, price) {
    cart.push({ name, price });
    updateCartCount();
    alert(`${name} added to cart! Total items: ${cart.length}`);
}

// Update cart count
function updateCartCount() {
    document.getElementById('cartLink').textContent = `🛒 Cart (${cart.length})`;
}

// Shop Now button
function shopNow() {
    alert('Welcome to Meesho Express!');
}

// Search functionality
document.getElementById('searchInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const searchTerm = e.target.value.toLowerCase();
        if (searchTerm) {
            alert(`Search results for: ${searchTerm}`);
        }
    }
});
