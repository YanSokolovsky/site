// scripts.js
document.getElementById('repairForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const repairType = document.getElementById('repairType').value;
    const problemDescription = document.getElementById('problemDescription').value;
    const deliveryOption = document.getElementById('deliveryOption').value;
    const contactInfo = document.getElementById('contactInfo').value;

    if (repairType && problemDescription && deliveryOption && contactInfo) {
        alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
        document.getElementById('repairForm').reset();
    } else {
        alert('Пожалуйста, заполните все поля формы.');
    }
});