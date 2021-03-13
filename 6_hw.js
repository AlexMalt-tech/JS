let catalog = {
    item1: {
        type: 'shorts',
        price: 50
    },
    item2: {
        type: 'skirt',
        price: 75
    },
    item3: {
        type: 'jeans',
        price: 125
    },
};
/* Здание каталога */
let cart = {};

/* Задание карты*/

let item1Type = document.getElementById('item_1');
item1Type.innerHTML = catalog.item1.type;
let item1Price = document.getElementById('price_1');
item1Price.innerHTML = catalog.item1.price;
let item2Type = document.getElementById('item_2');
item2Type.innerHTML = catalog.item2.type;
let item2Price = document.getElementById('price_2');
item2Price.innerHTML = catalog.item2.price;
let item3Type = document.getElementById('item_3');
item3Type.innerHTML = catalog.item3.type;
let item3Price = document.getElementById('price_3');
item3Price.innerHTML = catalog.item3.price;
/* Вывод каталога на страницу */

let btn1 = document.getElementById('btn_1');
let btn2 = document.getElementById('btn_2');
let btn3 = document.getElementById('btn_3');
let btnTotal = document.querySelector('#btnTotal');
let clearCart = document.getElementById('clear');
clearCart.addEventListener("click", clear);
btn1.addEventListener("click", handler1);
btn2.addEventListener("click", handler2);
btn3.addEventListener("click", handler3);
btnTotal.addEventListener("click", totalCount);
/* Связал книпки с кодом */

let cartGoodsClean = document.getElementById('cartItemsClean');
let cartGoods1 = document.getElementById('cartItems1');
let cartGoods2 = document.getElementById('cartItems2');
let cartGoods3 = document.getElementById('cartItems3');
let total1 = document.querySelector('#total_1');
let total2 = document.querySelector('#total_2');
let total3 = document.querySelector('#total_3');
let cartCount = document.querySelector('#cartCount');

let amount1 = 0, amount2 = 0, amount3 = 0;
let item1Count = 0, item2Count = 0, item3Count = 0, cartTotal = 0;

function handler1() {
    cartGoodsClean.innerHTML = '';
    amount1 += 1;
    cart.item1 = catalog.item1;
    cart.item1.amount = amount1;
    cartGoods1.innerHTML = 'Наименование: ' + cart.item1.type + '  Цена: ' + cart.item1.price + ' Количество: ' + cart.item1.amount;
    item1Count = cart.item1.price * cart.item1.amount;
    total1.innerHTML = 'Стоимость: ' + item1Count;
    return item1Count;

}

function handler2() {
    cartGoodsClean.innerHTML = '';
    amount2 += 1;
    cart.item2 = catalog.item2;
    cart.item2.amount = amount2;
    cartGoods2.innerHTML = 'Наименование: ' + cart.item2.type + '  Цена: ' + cart.item2.price + ' Количество: ' + cart.item2.amount;
    item2Count = cart.item2.price * cart.item2.amount;
    total2.innerHTML = 'Стоимость: ' + item2Count;
    return item2Count;
}

function handler3() {
    cartGoodsClean.innerHTML = '';
    amount3 += 1;
    cart.item3 = catalog.item3;
    cart.item3.amount = amount3;
    cartGoods3.innerHTML = 'Наименование: ' + cart.item3.type + '  Цена: ' + cart.item3.price + ' Количество: ' + cart.item3.amount;
    item3Count = cart.item3.price * cart.item3.amount;
    total3.innerHTML = 'Стоимость: ' + item3Count;
    return item3Count;
}

function clear() {
    cart = {};
    amount1 = 0;
    amount2 = 0;
    amount3 = 0;
    cartTotal = 0;
    item1Count = 0;
    item2Count = 0;
    item3Count = 0;
    cartGoodsClean.innerHTML = 'Корзина пуста';
    cartGoods1.innerHTML = '';
    total1.innerHTML = '';
    cartGoods2.innerHTML = '';
    total2.innerHTML = '';
    cartGoods3.innerHTML = '';
    total3.innerHTML = '';
    cartCount.innerHTML = '';
}



function totalCount() {
    cartTotal = item1Count + item2Count + item3Count;
    cartCount.innerHTML = 'Общая стоимость: ' + cartTotal;
}
