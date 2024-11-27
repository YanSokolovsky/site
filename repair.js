// Класс для управления заявками на ремонт
class RepairRequestsManager {
    #requests;

    constructor() {
        this.#requests = [];
    }

    addRequest(request) {
        if (this.validateRequest(request)) {
            this.#requests.push({ ...request, id: this.#generateId(), createdAt: new Date() });
            return true;
        }
        return false;
    }

    getRequests(skip = 0, top = 10) {
        return this.#requests.slice(skip, skip + top);
    }

    removeRequest(id) {
        const index = this.#requests.findIndex(req => req.id === id);
        if (index === -1) return false;

        this.#requests.splice(index, 1);
        return true;
    }

    validateRequest(request) {
        return request &&
            typeof request.repairType === 'string' &&
            request.problemDescription &&
            request.deliveryOption &&
            request.contactInfo &&
            request.contactInfo.trim().length > 0;
    }

    #generateId() {
        return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }
}

// Экземпляр класса для управления заявками
const repairManager = new RepairRequestsManager();

// Обработка формы отправки заявки на ремонт
document.getElementById('repairForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const repairType = document.getElementById('repairType').value;
    const problemDescription = document.getElementById('problemDescription').value;
    const deliveryOption = document.getElementById('deliveryOption').value;
    const contactInfo = document.getElementById('contactInfo').value;

    const newRequest = {
        repairType,
        problemDescription,
        deliveryOption,
        contactInfo,
    };

    // Добавляем заявку через менеджер заявок
    if (repairManager.addRequest(newRequest)) {
        alert('Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.');
        this.reset(); // Очистить форму после отправки
    } else {
        alert('Ошибка! Проверьте правильность заполнения формы.');
    }

    console.log('Текущие заявки:', repairManager.getRequests());
});
