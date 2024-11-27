// Данные категорий
const categories = [
    {
        id: '1',
        name: 'Серверы',
        description: 'Высокопроизводительные серверы для бизнеса.',
        imageUrl: 'images/servers.jpg',
        link: 'buy.html'
    },
    {
        id: '2',
        name: 'Настольные ПК',
        description: 'Надежные настольные компьютеры.',
        imageUrl: 'images/desktops.jpg',
        link: 'buy.html'
    },
    {
        id: '3',
        name: 'Ноутбуки',
        description: 'Портативные устройства для работы и дома.',
        imageUrl: 'images/laptops.jpg',
        link: 'buy.html'
    }
];

// Класс для работы с категориями
class CategoryManager {
    #categories;

    constructor(categories = []) {
        this.#categories = categories;
    }

    getCategories(skip = 0, top = 10) {
        return this.#categories.slice(skip, skip + top);
    }

    addCategory(category) {
        if (this.validateCategory(category)) {
            this.#categories.push(category);
            return true;
        }
        return false;
    }

    editCategory(id, updatedFields) {
        const category = this.#categories.find(cat => cat.id === id);
        if (!category) return false;

        Object.assign(category, updatedFields);
        return true;
    }

    removeCategory(id) {
        const index = this.#categories.findIndex(cat => cat.id === id);
        if (index === -1) return false;

        this.#categories.splice(index, 1);
        return true;
    }

    validateCategory(category) {
        return category &&
            typeof category.id === 'string' &&
            category.name &&
            category.description &&
            category.imageUrl;
    }
}

// Создание объекта для управления категориями
const categoryManager = new CategoryManager(categories);

// Функция для создания HTML для категорий
function renderCategories() {
    const section = document.createElement('section');
    section.className = 'categories';
    section.innerHTML = `
        <h2>Категории компьютеров</h2>
        <ul>
            ${categoryManager.getCategories().map(cat => `
                <li>
                    <a href="${cat.link}">
                        <img src="${cat.imageUrl}" alt="${cat.name}">
                    </a>
                    ${cat.name}
                </li>
            `).join('')}
        </ul>
    `;

    const main = document.querySelector('main');
    main.appendChild(section);
}

// Рендер категорий при загрузке страницы
renderCategories();
