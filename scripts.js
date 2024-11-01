// scripts.js
let cart = [];
let totalPrice = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    totalPrice = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - ${item.price}$`;
        cartItems.appendChild(li);
        totalPrice += item.price;
    });

    document.getElementById('total-price').textContent = totalPrice;
}

function checkout() {
    alert('Заказ оформлен! Общая сумма: ' + totalPrice + '$');
    cart = [];
    updateCart();
}