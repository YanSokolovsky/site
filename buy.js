// Массив для хранения товаров в корзине
let cart = [];

// Функция добавления товара в корзину
function addToCart(productName, price) {
    const product = { name: productName, price: price };
    cart.push(product);
    updateCart();
}

// Обновление корзины на странице
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');

    // Очистить список товаров в корзине
    cartItems.innerHTML = '';

    let total = 0;

    // Добавить товары в корзину
    cart.forEach((product, index) => {
        const li = document.createElement('li');
        li.textContent = `${product.name} - ${product.price}$`;

        // Кнопка для удаления товара из корзины
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Удалить';
        removeButton.onclick = () => removeFromCart(index);
        li.appendChild(removeButton);

        cartItems.appendChild(li);
        total += product.price;
    });

    // Обновить общую сумму
    totalPrice.textContent = total;
}

// Удаление товара из корзины
function removeFromCart(index) {
    cart.splice(index, 1); // Удалить товар по индексу
    updateCart();
}

// Оформление заказа
function checkout() {
    if (cart.length === 0) {
        alert('Корзина пуста! Добавьте товары перед оформлением заказа.');
        return;
    }

    // Подтверждение оформления заказа
    const confirmation = confirm(`Общая сумма: ${document.getElementById('total-price').textContent}$. Оформить заказ?`);
    if (confirmation) {
        alert('Заказ успешно оформлен!');
        cart = []; // Очистить корзину после оформления
        updateCart();
    }
}
