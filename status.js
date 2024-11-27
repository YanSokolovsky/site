document.addEventListener('DOMContentLoaded', () => {
    const statusForm = document.getElementById('statusForm');
    const orderStatusDiv = document.getElementById('orderStatus');

    statusForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const orderNumber = document.getElementById('orderNumber').value.trim();

        if (orderNumber === '') {
            alert('Пожалуйста, введите номер заказа.');
            return;
        }

        // Статический объект с номерами заказов и их статусами
        const orders = {
            '123': 'Заказ в обработке.',
            '456': 'Заказ отправлен.',
            '789': 'Заказ доставлен.'
        };

        // Проверка существования заказа по введенному номеру
        if (orders[orderNumber]) {
            orderStatusDiv.innerHTML = `<p>Статус заказа №${orderNumber}: ${orders[orderNumber]}</p>`;
        } else {
            orderStatusDiv.innerHTML = `<p>Заказ с таким номером не найден.</p>`;
        }
    });
});
