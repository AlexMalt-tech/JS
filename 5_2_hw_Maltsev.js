/*
3. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
3.1. Пустая корзина должна выводить строку «Корзина пуста»;
3.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
*/

let basket = [
    {
        name: 'scirt',
        size: 'xl',
        color: 'black',
        price: 100,
        amount: 0
    },
    {
        name: 'shirt',
        size: 'm',
        color: 'white',
        price: 37,
        amount: 2
    },
    {
        name: 'hoodie',
        size: 's',
        color: 'green',
        price: 52,
        amount: 1
    }
]


function countBasketPrice(arr) {
    let total = 0;
    let itemAmount = 0;
    for (let i in arr) {
        total += basket[i].price * basket[i].amount;
        itemAmount += basket[i].amount;
    }
    
    if (itemAmount === 0) {
        document.write('Корзина пуста');
    }
    else {
        document.write('В корзине: ' + itemAmount + ' товаров, на сумму ' + total + ' рублей');
    }
}

countBasketPrice(basket);




