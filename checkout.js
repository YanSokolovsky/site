// Класс для управления заказами
class CheckoutManager {
    #orders;

    constructor() {
        this.#orders = [];
    }

    addOrder(order) {
        if (this.validateOrder(order)) {
            this.#orders.push({ ...order, id: this.#generateId(), createdAt: new Date() });
            return true;
        }
        return false;
    }

    getOrders(skip = 0, top = 10) {
        return this.#orders.slice(skip, skip + top);
    }

    validateOrder(order) {
        return order &&
            typeof order.address === 'string' &&
            order.address.trim() !== '' &&
            typeof order.paymentMethod === 'string' &&
            order.paymentMethod.trim() !== '' &&
            typeof order.paymentDetails === 'string' &&
            order.paymentDetails.trim() !== '';
    }

    #generateId() {
        return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }
}

// Экземпляр класса для управления заказами
const checkoutManager = new CheckoutManager();

// Обработка формы оформления заказа
document.getElementById('checkoutForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const address = document.getElementById('address').value;
    const paymentMethod = document.getElementById('paymentMethod').value;
    const paymentDetails = document.getElementById('paymentDetails').value;

    // Создаем новый заказ
    const newOrder = {
        address,
        paymentMethod,
        paymentDetails,
    };

    // Проверяем, можно ли добавить заказ
    if (checkoutManager.addOrder(newOrder)) {
        // Заказ добавлен успешно
        alert('Заказ успешно оформлен! Подробности отправлены на ваш email.');

        // Отправка подтверждения по email (эмуляция отправки)
        sendOrderConfirmationEmail(address, paymentMethod, paymentDetails);

        // Очищаем форму после успешной отправки
        this.reset();
    } else {
        // Ошибка при добавлении заказа
        alert('Ошибка! Проверьте правильность заполнения формы.');
    }

    // Логирование заказов для отладки
    console.log('Заказы:', checkoutManager.getOrders());
});

// Пример функции для отправки email с подтверждением заказа
function sendOrderConfirmationEmail(address, paymentMethod, paymentDetails) {
    // Здесь логика для отправки email через сервер
    console.log(`Отправка email с подтверждением заказа:
    Адрес: ${address}
    Способ оплаты: ${paymentMethod}
    Детали оплаты: ${paymentDetails}`);
}
