// scripts.js
document.getElementById('checkoutForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const address = document.getElementById('address').value;
    const paymentMethod = document.getElementById('paymentMethod').value;
    const paymentDetails = document.getElementById('paymentDetails').value;

    if (address && paymentMethod && paymentDetails) {
        // Здесь вы можете добавить логику для отправки данных на сервер
        // Например, отправка данных на сервер и получение ответа
        sendOrderConfirmationEmail(address, paymentMethod, paymentDetails);
        alert('Заказ подтвержден! Подробности отправлены на ваш email.');
        document.getElementById('checkoutForm').reset();
    } else {
        alert('Пожалуйста, заполните все поля формы.');
    }
});

function sendOrderConfirmationEmail(address, paymentMethod, paymentDetails) {
    // Пример функции для отправки email с подтверждением заказа
    // В реальном приложении здесь будет логика для отправки email через сервер
    console.log(`Отправка email с подтверждением заказа:
    Адрес: ${address}
    Способ оплаты: ${paymentMethod}
    Детали оплаты: ${paymentDetails}`);
}