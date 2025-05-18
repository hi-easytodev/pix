// Допустим, у нас есть такие услуги:
let service1Price = 1000;
let service2Price = 2000;
let service3Price = 500;

// Создаём функцию, которая считает сумму всех услуг
const getAllServicePrices = function() {
  return service1Price + service2Price + service3Price;
};

// Сохраняем результат работы функции в переменную
let allServicePrices = getAllServicePrices();

console.log("Стоимость всех услуг:", allServicePrices);


let screenPrice = 3000; // цена вёрстки

// Создаём функцию, которая считает всё вместе
function getFullPrice() {
  return allServicePrices + screenPrice;
}

let fullPrice = getFullPrice();

console.log("Полная стоимость:", fullPrice);

let titleProject = "мой крутой ПРОЕКТ";

function getTitle() {
  return titleProject[0].toUpperCase() + titleProject.slice(1).toLowerCase();
}

let formattedTitle = getTitle();

console.log("Название проекта:", formattedTitle);


let percentForContractor = 10; // например, 10%

function getServicePercentPrices() {
  return fullPrice - (fullPrice * percentForContractor / 100);
}

let servicePercentPrice = getServicePercentPrices();

console.log("Стоимость после вычета процента подрядчику:", servicePercentPrice);


function getRollbackMessage() {
    let discount = 0;
    if (fullPrice > 5000) {
      discount = 10; // 10% скидка
    } else if (fullPrice > 3000) {
      discount = 5; // 5% скидка
    } else {
      discount = 0;
    }
    let clientDiscount = fullPrice * discount / 100;
    console.log(`Скидка для клиента: ${clientDiscount} рублей (${discount}%)`);
  }
  
  getRollbackMessage();

  
  

