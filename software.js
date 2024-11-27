document.addEventListener('DOMContentLoaded', () => {
    const softwareForm = document.getElementById('softwareForm');

    softwareForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Получение данных из формы
        const software = document.getElementById('software').value;
        const deliveryOption = document.getElementById('deliveryOption').value;
        const contactInfo = document.getElementById('contactInfo').value;

        // Проверка данных
        if (!contactInfo.trim()) {
            alert('Пожалуйста, укажите вашу контактную информацию.');
            return;
        }

        // Вывод сообщения об успешной отправке
        alert(`Заявка на установку ПО ${software} успешно отправлена!\nСпособ доставки: ${deliveryOption}\nКонтактная информация: ${contactInfo}`);

        // Очистка формы
        softwareForm.reset();
    });
});
