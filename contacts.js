// Класс для управления сообщениями
class ContactMessagesManager {
    #messages;

    constructor() {
        this.#messages = [];
    }

    addMessage(message) {
        if (this.validateMessage(message)) {
            this.#messages.push({ ...message, id: this.#generateId(), createdAt: new Date() });
            return true;
        }
        return false;
    }

    getMessages(skip = 0, top = 10) {
        return this.#messages.slice(skip, skip + top);
    }

    removeMessage(id) {
        const index = this.#messages.findIndex(msg => msg.id === id);
        if (index === -1) return false;

        this.#messages.splice(index, 1);
        return true;
    }

    validateMessage(message) {
        return message &&
            typeof message.name === 'string' &&
            message.name.trim() !== '' &&
            typeof message.email === 'string' &&
            message.email.trim() !== '' &&
            typeof message.text === 'string' &&
            message.text.trim() !== '';
    }

    #generateId() {
        return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }
}

// Экземпляр класса для управления сообщениями
const contactManager = new ContactMessagesManager();

// Обработка формы
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const text = document.getElementById('message').value;

    const newMessage = {
        name,
        email,
        text,
    };

    if (contactManager.addMessage(newMessage)) {
        alert('Сообщение успешно отправлено!');
        this.reset(); // Очистить форму
    } else {
        alert('Ошибка! Проверьте правильность заполнения формы.');
    }

    console.log('Сообщения:', contactManager.getMessages());
});
