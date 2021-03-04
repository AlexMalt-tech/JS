/*1. Написать функцию, преобразующую число в объект.Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни.Например, для числа 245 мы должны получить следующий объект: { ‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2 }.Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/
// let objectFromNumber = {};
// let number = '2222';
// console.log(numToObject(number));

// function numToObject(num) {
//     let str = num.split('');

//     switch (str.length) {
//         case 1: objectFromNumber.units = str[0]; /* программа отказалась выводить русскоязычные названия. */
//             objectFromNumber.dozens = 0;
//             objectFromNumber.hundreds = 0;
//             break;
//         case 2: objectFromNumber.units = str[0];
//             objectFromNumber.second = str[1];
//             objectFromNumber.hundreds = 0;
//             break;
//         case 3: objectFromNumber.units = str[0];
//             objectFromNumber.dozens = str[1];
//             objectFromNumber.hundreds = str[2];
//             break;
//         default: console.log('Число больше 999, введите число в промежутке от 0 до 999.');
//             console.log(objectFromNumber);
//     }
//     return objectFromNumber;
// };


/*2.Продолжить работу с интернет - магазином:
2.1.В прошлом домашнем задании вы реализовали корзину на базе массивов.Какими объектами можно заменить их элементы ?
    2.2.Реализуйте такие объекты.
   2.3.Перенести функционал подсчета корзины на объектно - ориентированную базу.
    */

//     let basket = [
//         {
//             name: 'scirt',
//             size: 'xl',
//             color: 'black',
//             price: 100,
//             amount: 2
//         },
//         {
//             name: 'shirt',
//             size: 'm',
//             color: 'white',
//             price: 37,
//             amount: 2
//         },
//         {
//             name: 'hoodie',
//             size: 's',
//             color: 'green',
//             price: 52,
//             amount: 3
//         }
//     ]

// function countBasketPrice(arr) {
//     let total = 0;
//     for (let i = 0; i < arr.length; i++) {
//         total += basket[i].price * basket[i].amount;
//     }
//     return total;
// }
// console.log(countBasketPrice(basket));


/*
3. * Подумать над глобальными сущностями.К примеру, сущность «Продукт» в интернет - магазине актуальна не только для корзины, но и для каталога.Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для различных модулей сайта, но в разных местах давал возможность вызывать разные методы. */