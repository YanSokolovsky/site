// scripts.js
document.getElementById('softwareForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const software = document.getElementById('software').value;
    const deliveryOption = document.getElementById('deliveryOption').value;
    const contactInfo = document.getElementById('contactInfo').value;

    if (software && deliveryOption && contactInfo) {
        alert('Заявка на установку ПО отправлена! Мы свяжемся с вами в ближайшее время.');
        document.getElementById('softwareForm').reset();
    } else {
        alert('Пожалуйста, заполните все поля формы.');
    }
});