/*// 1. Переменные
let screenPrice = 10000;
let percentage = 10;
let allServicePrices;
let newTitle = '';
let titleProject
let screensValue;
let responsive;


// 2. Функция для расчета всех услуг
const asking = function() {
titleProject = prompt('Название проекта')
screensValue = prompt('Шаблонные, с уникальным дизайном, с анимациями');
responsive = prompt('Нужна ли респонсивность?');
}




let service = prompt('Какой дополнительный вид услуги нужен?');
let servicePrice = +prompt('Сколько это будет стоить?');
let serviceSecond = prompt('Какой второй дополнительный вид услуги нужен?');
let servicePriceSecond = +prompt('Сколько это будет стоить?');





// 3. Функции
const getAllServicePrices = function() {
  return servicePrice + servicePriceSecond;
};

function getFullPrice() {
  return allServicePrices + screenPrice;
}

const getServicePercentPrices = function() {
  return fullPrice - (fullPrice * (percentage / 100))
}

const getTitle = function() {
  return titleProject[0].toUpperCase() + titleProject.slice(1).toLowerCase()
}




// 4. Предоставление скидки
if(fullPrice > 50000) {
  console.log('Сделаем скидку 10%');
} else if(fullPrice > 20000 && fullPrice <= 40000) {
  console.log('Сделаем скидку 5%');
} else if(fullPrice < 20000 && fullPrice > 0) {
 console.log('Скидка не предусмотрена');
} else if(fullPrice < 0) {
  console.log('Что-то пошло не так');
} else if(fullPrice === 0 || fullPrice === 20000 || fullPrice === 50000) {
    console.log('Цена равна нулю. Косяк! Проект бесплатный?')
}


// 5. Вызов функций
asking()
allServicePrices = getAllServicePrices()
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
newTitle = getTitle();




console.log('Название проекта:', titleProject);
console.log('Типы экранов:', screensValue);
console.log('Нужна ли респонсивность:', responsive);
console.log(service);
console.log(servicePrice);
console.log(serviceSecond);
console.log(servicePriceSecond);
console.log(Math.ceil(servicePercentPrice));
*/


// 1. Переменные
let screenPrice;
let percentage = 10;
let allServicePrices;
let newTitle = '';
let titleProject;
let screensValue;
let responsive;
let fullPrice;
let servicePercentPrice;

// 2. Функция проверки на число
function checkIsNumber(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}

// 3. Функция для запроса числа с валидацией
function askNumber(message) {
  let value;
  do {
    value = prompt(message);
    if (value === null) break;
    value = value.trim();
  } while (!checkIsNumber(value));
  return value === null ? 0 : parseFloat(value);
}

// 4. Функция для расчета всех услуг с помощью цикла
function getAllServicePrices() {
  let sum = 0;
  for (let i = 0; i < 2; i++) {
    let serviceName = prompt(`Какой дополнительный вид услуги нужен? (№${i + 1})`);
    let price = askNumber(`Сколько это будет стоить? (услуга: ${serviceName || 'без названия'})`);
    sum += price;
  }
  return sum;
}

// 5. Функция для сбора основной информации
const asking = function() {
  titleProject = prompt('Название проекта');
  screensValue = prompt('Шаблонные, с уникальным дизайном, с анимациями');
  responsive = prompt('Нужна ли респонсивность?');
}

// 6. Функции для расчётов
function getFullPrice() {
  return allServicePrices + screenPrice;
}

function getServicePercentPrices() {
  return fullPrice - (fullPrice * (percentage / 100));
}

function getTitle() {
  if (!titleProject) return '';
  return titleProject[0].toUpperCase() + titleProject.slice(1).toLowerCase();
}

// 7. Основной сценарий
asking();

screenPrice = askNumber('Сколько это будет стоить экран?');
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
newTitle = getTitle();

// 8. Предоставление скидки
if (fullPrice > 50000) {
  console.log('Сделаем скидку 10%');
} else if (fullPrice > 20000 && fullPrice <= 40000) {
  console.log('Сделаем скидку 5%');
} else if (fullPrice < 20000 && fullPrice > 0) {
  console.log('Скидка не предусмотрена');
} else if (fullPrice < 0) {
  console.log('Что-то пошло не так');
} else if (fullPrice === 0 || fullPrice === 20000 || fullPrice === 50000) {
  console.log('Цена равна нулю. Косяк! Проект бесплатный?');
}

// 9. Вывод результатов
console.log('Название проекта:', newTitle);
console.log('Типы экранов:', screensValue);
console.log('Нужна ли респонсивность:', responsive);
console.log('Цена за экран:', screenPrice);
console.log('Сумма услуг:', allServicePrices);
console.log('Общая цена:', fullPrice);
console.log('Цена с учётом процента:', Math.ceil(servicePercentPrice));
