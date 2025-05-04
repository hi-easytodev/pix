// 1. Спрашиваем название проекта
const titleProject = prompt('Название проекта?');

// 2. Спрашиваем типы экранов
const screensValue = prompt('Какие типы экранов нужны? (например: шаблонные, с уникальным дизайном, с анимациями)');

// 3. Спрашиваем нужен ли респонсив
const responsive = confirm('Нужен ли респонсивный сайт?'); // confirm возвращает true/false

// 4. Дополнительные сервисы
const service1 = prompt('Какой сервис нужен?');
const servicePrice1 = +prompt('Сколько это будет стоить?'); // + превращает строку в число

const service2 = prompt('Какой еще сервис тебе нужен?');
const servicePrice2 = +prompt('Сколько будет стоить этот второй сервис?');

// 5. Общая стоимость проекта
const screenPrice = +prompt('Сколько стоит работа по экранам?'); // если нужно, спроси цену экранов
const fullPrice = screenPrice + servicePrice1 + servicePrice2;

// 6. Итоговая сумма за вычетом процента подрядчику (например, 15%)
const partnerPercent = 15;
const servicePercentPrice = Math.round(fullPrice - (fullPrice * partnerPercent / 100));
console.log('Итоговая сумма за вычетом процента партнеру:', servicePercentPrice);

// 7. Условия скидок
if (fullPrice > 50000) {
    console.log('Сделаем скидку 10%');
} else if (fullPrice > 20000 && fullPrice <= 50000) {
    console.log('Сделаем скидку 5%');
} else if (fullPrice > 0 && fullPrice <= 20000) {
    console.log('Скидка не предусмотрена');
} else if (fullPrice < 0) {
    console.log('Что-то пошло не так');
} else if (fullPrice === 0) {
    console.log('Цена равна нулю. Проект бесплатный?');
} else if (fullPrice === 20000) {
    console.log('Цена ровно 20000. Особый случай!');
} else if (fullPrice === 50000) {
    console.log('Цена ровно 50000. Особый случай!');
}
