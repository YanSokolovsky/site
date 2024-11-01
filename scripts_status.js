// scripts.js
document.getElementById('statusForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const orderNumber = document.getElementById('orderNumber').value;
    const orderStatus = document.getElementById('orderStatus');

    if (orderNumber) {
        // Здесь вы можете добавить логику для проверки состояния заказа
        // Например, запрос к серверу для получения состояния заказа по номеру
        // Для демонстрации используем статический ответ
        const status = getOrderStatus(orderNumber);
        orderStatus.textContent = Состояние `заказа: ${status}`;
    } else {
        orderStatus.textContent = 'Пожалуйста, введите номер заказа.';
    }
});

function getOrderStatus(orderNumber) {
    // Пример статического ответа
    const statuses = ['Поставлен в очередь', 'Отремонтирован', 'Отправлен'];
    return statuses[Math.floor(Math.random() * statuses.length)];
}