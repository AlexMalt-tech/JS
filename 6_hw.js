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
btn1.addEventListener("click", handler1);
btn2.addEventListener("click", handler2);
btn3.addEventListener("click", handler3);
let clearCart = document.getElementById('clear');
clearCart.addEventListener("click", clear);
/* Связал книпки с кодом */

let cartGoods = document.getElementById('cartItems');
let cartGoods1 = document.getElementById('cartItems1');
let cartGoods2 = document.getElementById('cartItems2');
let cartGoods3 = document.getElementById('cartItems3');




function handler1() {
    cart.item1 = catalog.item1;
    cartGoods1.innerHTML = 'Наименование: ' + cart.item1.type + '  Цена: ' + cart.item1.price;
    console.log(cart);
}

function handler2() {
    cart.item2 = catalog.item2;
    cartGoods2.innerHTML = 'Наименование: ' + cart.item2.type + '  Цена: ' + cart.item2.price;
    console.log(cart);

}
function handler3() {
    cart.item3 = catalog.item3;
    cartGoods3.innerHTML = 'Наименование: ' + cart.item3.type + '  Цена: ' + cart.item3.price;
    console.log(cart);

}

function clear() {
    cart = {};
    cartGoods1.innerHTML = 'Корзина пуста';
    cartGoods2.innerHTML = '';
    cartGoods3.innerHTML = '';
    console.log(cart);
}


