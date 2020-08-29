function calculateTotalPrice(array, prop) {
  'use strict';
  // Write code under this line
  let result = 0;
  //const name = '';
  //   let price = 0;
  //   let quantity = 0;
  for (const product of array) {
    if (prop === product.name) {
      result += product.price * product.quantity;
      //result += result;
    }
  }
  return result;
}

// Объекты и ожидаемый результат
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Радар', price: 1280, quantity: 2 },
  { name: 'Радар', price: 1320, quantity: 1 },
  { name: 'Сканер', price: 2700, quantity: 1 },
  { name: 'Сканер', price: 2500, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

console.log(calculateTotalPrice(products, 'Радар'));
// 9080

console.log(calculateTotalPrice(products, 'Сканер'));
// 10200

console.log(calculateTotalPrice(products, 'Захват'));
// 2400

console.log(calculateTotalPrice(products, 'Дроид'));
// 2800

/*
Задача 3 - 6
Суммирование значений свойства из массива объектов
Напиши функцию calculateTotalPrice(allProdcuts, productName), которая получает массив объектов и имя продукта(значение свойства name).Возвращает общую стоимость продукта(цена умноженная на количество).

Вызовы функции для проверки работоспособности твоей реализации.

// calculateTotalPrice(products, 'Радар'));
// 9080

// calculateTotalPrice(products, 'Сканер')); // 10200

// calculateTotalPrice(products, 'Захват')); // 2400

// calculateTotalPrice(products, 'Дроид')); // 2800
*/

/*
Ожидается что при вызове calculateTotalPrice([]) функция вернет 0
Ожидается что функция вернет 9080 для объекта products и значения 'Радар'
Ожидается что функция вернет 10200 для объекта products и значения 'Сканер'
Ожидается что функция вернет 2400 для объекта products и значения 'Захват'
Ожидается что функция вернет 2800 для объекта products и значения 'Дроид'
Код должен содержать функцию calculateTotalPrice
*/
