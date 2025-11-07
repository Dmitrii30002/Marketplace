const products = [
    { name: "iPhone 15 Pro", category: "Смартфоны", price: "89 999 ₽", rating: "4.9", status: "in-stock", image: "images/props/iphone.jpg" },
    { name: "MacBook Air M2", category: "Ноутбуки", price: "124 999 ₽", rating: "4.8", status: "in-stock", image: "images/props/mac.jpg" },
    { name: "Samsung Galaxy S24", category: "Смартфоны", price: "79 999 ₽", rating: "4.7", status: "in-stock", image: "images/props/s24.jpg" },
    { name: "Sony WH-1000XM5", category: "Наушники", price: "29 999 ₽", rating: "4.9", status: "out-of-stock", image: "images/props/sh.jpg" },
    { name: "iPad Air", category: "Планшеты", price: "54 999 ₽", rating: "4.6", status: "in-stock", image: "images/props/ipad.jpg" },
    { name: "Apple Watch Series 9", category: "Часы", price: "32 999 ₽", rating: "4.7", status: "in-stock", image: "images/props/watch.jpg" },
    { name: "PlayStation 5", category: "Консоли", price: "49 999 ₽", rating: "4.8", status: "out-of-stock", image: "images/props/ps.jpg" },
    { name: "Xbox Series X", category: "Консоли", price: "44 999 ₽", rating: "4.5", status: "in-stock", image: "images/props/xbox.jpg" },
    { name: "Nintendo Switch", category: "Консоли", price: "27 999 ₽", rating: "4.4", status: "in-stock", image: "images/props/nintendo.jpg" },
    { name: "Canon EOS R6", category: "Фотоаппараты", price: "156 999 ₽", rating: "4.9", status: "in-stock", image: "images/props/canon.jpg" },
    { name: "AirPods Pro", category: "Наушники", price: "22 999 ₽", rating: "4.6", status: "in-stock", image: "images/props/air.jpg" },
    { name: "Dell XPS 13", category: "Ноутбуки", price: "98 999 ₽", rating: "4.7", status: "out-of-stock", image: "images/props/dell.jpg" },
    { name: "Samsung Odyssey G7", category: "Мониторы", price: "45 999 ₽", rating: "4.5", status: "in-stock", image: "images/props/odisey.jpg" },
    { name: "Logitech MX Keys", category: "Клавиатуры", price: "8 999 ₽", rating: "4.4", status: "in-stock", image: "images/props/key.jpg" },
    { name: "Razer Viper", category: "Мыши", price: "5 999 ₽", rating: "4.3", status: "in-stock", image: "images/props/razer.jpg" },
    { name: "GoPro Hero 12", category: "Камеры", price: "32 999 ₽", rating: "4.6", status: "in-stock", image: "images/props/gopro.jpg" },
    { name: "Kindle Paperwhite", category: "Электронные книги", price: "12 999 ₽", rating: "4.5", status: "out-of-stock", image: "images/props/paper.jpg" },
    { name: "JBL Flip 6", category: "Колонки", price: "9 999 ₽", rating: "4.4", status: "in-stock", image: "images/props/jbl.jpg" },
    { name: "Xiaomi Robot Vacuum", category: "Техника для дома", price: "24 999 ₽", rating: "4.3", status: "in-stock", image: "images/props/xvacuum.jpg" },
    { name: "ASUS ROG Strix", category: "Ноутбуки", price: "134 999 ₽", rating: "4.7", status: "in-stock", image: "images/props/asus.jpg" }
];

const descriptions = [
    "Инновационный дизайн и передовые технологии",
    "Высокая производительность для профессиональных задач",
    "Стильный внешний вид и удобство использования",
    "Лучшее качество звука на рынке",
    "Идеальное сочетание мощности и портативности",
    "Современные функции для активного образа жизни",
    "Погрузитесь в мир современных игр",
    "Мощная игровая консоль нового поколения",
    "Портативная консоль для игр в любом месте",
    "Профессиональная съемка в любых условиях",
    "Беспроводные наушники с шумоподавлением",
    "Ультрабук с премиальным дизайном",
    "Игровой монитор с высокой частотой обновления",
    "Эргономичная клавиатура для комфортной работы",
    "Высокоточная игровая мышь",
    "Экшн-камера для активного отдыха",
    "Электронная книга с подсветкой",
    "Портативная колонка с мощным звуком",
    "Умный пылесос с навигацией",
    "Игровой ноутбук с топовой видеокартой"
];

function addCards(count) {
    const flexContainer = document.getElementById('flex-container');
    if (!flexContainer) {
        console.error('Контейнер flexContainer не найден!');
        return;
    }
    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * products.length);
        const product = products[randomIndex];
        const description = descriptions[randomIndex];

        const card = document.createElement('div');
        card.className = 'card';
        card.id = randomIndex
        card.innerHTML = `
                    <img src=${product.image} class="card-image">
                    <h3>${product.name}</h3>
                    <p>${description}</p>
                    <p>${product.price}</p>
                    <p>${product.category}</p>
                    <button class=card-btn onclick="addToBasket(this)">
                        <span>Добавить в корзину</span>
                    </button>
                `;
        flexContainer.appendChild(card);
    }
}


window.onload = function () {
    const profile = document.getElementById('profile')
    profile.addEventListener('click', () => {
        const menu = document.getElementById('menu')
        if(menu.style.display == 'none') {
            menu.style.display = 'flex'
        }else{
            menu.style.display = 'none'
        }
    })
    addCards(28);
};

function addToBasket(btn) {
    const card = btn.parentElement
    alert('Товар с id: ' + card.id + ' был добавлен в вашу корзину')
}