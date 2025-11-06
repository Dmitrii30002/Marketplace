const calculateDiscount = function (ageCategory) {
    if (ageCategory === 'young') {
        return { type: 'Молодежная', percent: 10, categoryName: 'До 20 лет' };
    } else if (ageCategory === 'senior') {
        return { type: 'Пенсионная', percent: 20, categoryName: 'Старше 65 лет' };
    } else {
        return { type: 'Стандартная', percent: 0, categoryName: 'От 20 до 65 лет' };
    }
};

const determineAppliance = function (amount) {
    if (amount >= 300 && amount <= 3000) {
        return {
            name: 'чайник',
            image: 'source/teapot.jpg',
            priceRange: '300-3000 руб.'
        };
    } else if (amount >= 3001 && amount <= 10000) {
        return {
            name: 'пылесос',
            image: 'source/cleaner.jpg',
            priceRange: '3001-10000 руб.'
        };
    } else if (amount > 10000) {
        return {
            name: 'холодильник',
            image: 'source/fridge.jpg',
            priceRange: 'свыше 10000 руб.'
        };
    } else {
        return {
            name: 'недостаточно средств',
            image: 'source/cash.jpg',
            priceRange: 'менее 300 руб.'
        };
    }
};

function calculatePrice() {
    const ageCategory = document.getElementById('age').value;

    if (!ageCategory) {
        alert('Пожалуйста, выберите вашу возрастную категорию');
        return;
    }

    const moneyInput = prompt('Введите сумму денег на покупку (руб.):');
    const moneyAmount = parseFloat(moneyInput);

    if (!moneyAmount || moneyAmount <= 0) {
        alert('Пожалуйста, введите корректную сумму');
        return;
    }

    const discount = calculateDiscount(ageCategory);
    const appliance = determineAppliance(moneyAmount);
    const finalAmount = moneyAmount - (moneyAmount/100)*discount.percent

    const resultDiv = document.getElementById('result');

    let resultHTML = `
                <h2>Результат расчета</h2>
                <div class="price-info"><strong>Возрастная категория:</strong> ${discount.categoryName}</div>
                <div class="price-info"><strong>Сумма:</strong> ${moneyAmount} руб.</div>
                <div class="price-info"><strong>Сумма со скидкой:</strong> ${finalAmount} руб.</div>
            `;

    if (discount.percent > 0) {
        resultHTML += `
                    <div class="discount-badge">
                        ${discount.type} скидка - ${discount.percent}%
                    </div>
                `;
    }

    resultHTML += `
                <div class="price-info"><strong>Рекомендуемая техника:</strong> ${appliance.name}</div>
                <div class="price-info"><strong>Диапазон цен:</strong> ${appliance.priceRange}</div>
                <img src="${appliance.image}" alt="${appliance.name}" class="appliance-image">
            `;

    if (moneyAmount < 300) {
        resultHTML += `<p style="color: #e74c3c; font-weight: bold;">Недостаточно средств для покупки техники</p>`;
    } else {
        resultHTML += `<p style="color: #27ae60; font-weight: bold;">Отличный выбор!</p>`;
    }

    resultDiv.innerHTML = resultHTML;
    resultDiv.classList.remove('hidden');
}